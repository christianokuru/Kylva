import { Resend } from "resend";
import { z } from "zod";

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

/** Make user text safe to put inside an HTML email. */
const esc = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

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

const row = (label: string, value: string) =>
  value
    ? `<tr><td style="padding:6px 12px 6px 0;color:#6b7280;font-size:13px;vertical-align:top;white-space:nowrap">${label}</td><td style="padding:6px 0;font-size:14px;color:#111">${esc(value)}</td></tr>`
    : "";

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

  const { error } = await resend.emails.send({
    from,
    to: [config.contactReceiverEmail],
    replyTo: d.email,
    subject: `New lead: ${d.brand} · ${d.service} · ${d.budget}`,
    html: `
      <div style="font-family:Arial,sans-serif;max-width:560px">
        <h2 style="font-size:18px;margin:0 0 12px">New quote request</h2>
        <table style="border-collapse:collapse">
          ${row("Name", d.name)}
          ${row("Email", d.email)}
          ${row("Brand", d.brand)}
          ${row("Website", d.website)}
          ${row("Needs", d.service)}
          ${row("Budget", d.budget)}
          ${row("Launch", d.timeline)}
        </table>
        ${d.message ? `<p style="margin:16px 0 4px;color:#6b7280;font-size:13px">Message</p><p style="white-space:pre-wrap;font-size:14px;margin:0">${esc(d.message)}</p>` : ""}
        <p style="margin-top:20px;font-size:12px;color:#6b7280">Reply to this email to answer ${esc(d.name)} directly.</p>
      </div>
    `,
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
    const firstName = esc(d.name.split(" ")[0] || d.name);
    try {
      await resend.emails.send({
        from: config.fromEmail,
        to: [d.email],
        replyTo,
        subject: "Thanks, we got your request · Kylva",
        html: `
          <div style="font-family:Arial,sans-serif;max-width:520px;font-size:14px;line-height:1.6;color:#111">
            <p>Hi ${firstName},</p>
            <p>Thanks for telling us about <strong>${esc(d.brand)}</strong>. We've got your request and will reply within 24 hours with next steps and a clear price.</p>
            <p>Meanwhile, you can try our concept stores at <a href="https://kylva.com/projects">kylva.com/projects</a>.</p>
            ${whatsapp ? `<p>Prefer to chat? <a href="https://wa.me/${whatsapp}">Message us on WhatsApp</a>.</p>` : ""}
            <p>Just reply to this email if you'd like to add anything.</p>
            <p>Christian<br/>Kylva</p>
          </div>
        `,
      });
    } catch (e) {
      console.error("Auto-reply failed:", e);
    }
  }

  return { success: true };
});
