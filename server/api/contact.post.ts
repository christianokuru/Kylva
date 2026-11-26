import { Resend } from "resend";
import { z } from "zod";
import { leadEmail, thankYouEmail } from "../utils/emails";

const text = (max: number) => z.string().trim().max(max);

const contactSchema = z.object({
  name: text(100).pipe(z.string().min(2)),
  email: text(200).pipe(z.string().email()),
  brand: text(120).pipe(z.string().min(1)),
  website: text(200).optional().default(""),
  service: text(80).pipe(z.string().min(1)),
  budget: text(40).pipe(z.string().min(1)),
  timeline: text(40).pipe(z.string().min(1)),
  message: text(3000).optional().default(""),
  company: z.string().optional().default(""), // honeypot
  elapsed: z.number().optional().default(0), // ms spent on the page before sending
});

// Simple per-IP limit: 5 messages per 10 minutes (per server instance).
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const LIMIT = 5;
const tooMany = (ip: string) => {
  const now = Date.now();
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return recent.length > LIMIT;
};

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  const ip = getRequestIP(event, { xForwardedFor: true }) || "unknown";
  if (tooMany(ip)) {
    throw createError({ statusCode: 429, statusMessage: "Too many messages, please try again later" });
  }

  const parsed = contactSchema.safeParse(await readBody(event));
  if (!parsed.success) {
    throw createError({ statusCode: 400, statusMessage: "Invalid form data" });
  }
  const d = parsed.data;

  // Bots: filled the hidden field or sent the form impossibly fast. Pretend it worked.
  if (d.company || (d.elapsed > 0 && d.elapsed < 3000)) {
    return { success: true };
  }

  if (!config.resendApiKey || !config.contactReceiverEmail) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_RECEIVER_EMAIL is not set");
    throw createError({ statusCode: 500, statusMessage: "Email is not set up" });
  }

  const resend = new Resend(config.resendApiKey);
  const from = config.fromEmail || "Kylva <onboarding@resend.dev>";

  const lead = leadEmail(d);
  const { error } = await resend.emails.send({
    from,
    to: [config.contactReceiverEmail],
    replyTo: d.email,
    subject: lead.subject,
    html: lead.html,
    text: lead.text,
  });

  if (error) {
    console.error("Resend error:", error);
    throw createError({ statusCode: 502, statusMessage: "Failed to send email" });
  }

  // Auto-reply to the person who asked. Only when a real sending address is set
  // (Resend's test address can't email other people). A failure here never fails the form.
  if (config.fromEmail) {
    const whatsapp = String(config.public.whatsapp || "").replace(/\D/g, "");
    const replyTo = String(config.public.contactEmail || config.contactReceiverEmail);
    const thanks = thankYouEmail(d, { whatsapp });
    try {
      await resend.emails.send({
        from: config.fromEmail,
        to: [d.email],
        replyTo,
        subject: thanks.subject,
        html: thanks.html,
        text: thanks.text,
      });
    } catch (e) {
      console.error("Auto-reply failed:", e);
    }
  }

  return { success: true };
});
