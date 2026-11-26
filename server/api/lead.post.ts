// Short leads: "Email me my results" on the Shopify calculator, and the free store review offer.
import { Resend } from "resend";
import { z } from "zod";
import { estimate } from "../../app/lib/shopifyCost";
import { calculatorEmail, quickLeadEmail, reviewConfirmEmail } from "../utils/emails";
import { tooManyRequests } from "../utils/rateLimit";

const text = (max: number) => z.string().trim().max(max);

const schema = z.discriminatedUnion("source", [
  z.object({
    source: z.literal("calculator"),
    email: text(200).pipe(z.string().email()),
    brand: text(120).optional().default(""),
    company: z.string().optional().default(""),
    elapsed: z.number().optional().default(0),
    calc: z.object({
      sales: z.number().min(0).max(10_000_000),
      plan: z.enum(["basic", "grow", "advanced"]),
      billing: z.enum(["monthly", "yearly"]),
      apps: z.number().min(0).max(100_000),
      theme: z.number().min(0).max(100_000),
      ownPayments: z.boolean(),
      pkg: z.enum(["auto", "launch", "growth", "flagship"]),
    }),
  }),
  z.object({
    source: z.literal("review"),
    name: text(100).pipe(z.string().min(2)),
    email: text(200).pipe(z.string().email()),
    website: text(200).pipe(z.string().min(3)),
    company: z.string().optional().default(""),
    elapsed: z.number().optional().default(0),
  }),
]);

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig();

  if (tooManyRequests(event, "lead")) {
    throw createError({ statusCode: 429, statusMessage: "Too many requests, please try again later" });
  }

  const parsed = schema.safeParse(await readBody(event));
  if (!parsed.success) {
    throw createError({ statusCode: 400, statusMessage: "Invalid form data" });
  }
  const d = parsed.data;

  // Bots: filled the hidden field or sent impossibly fast. Pretend it worked.
  if (d.company || (d.elapsed > 0 && d.elapsed < 2000)) return { success: true };

  if (!config.resendApiKey || !config.contactReceiverEmail) {
    console.error("Lead form: RESEND_API_KEY or CONTACT_RECEIVER_EMAIL is not set");
    throw createError({ statusCode: 500, statusMessage: "Email is not set up" });
  }

  const resend = new Resend(config.resendApiKey);
  const from = config.fromEmail || "Kylva <onboarding@resend.dev>";
  const whatsapp = String(config.public.whatsapp || "").replace(/\D/g, "");
  const replyTo = String(config.public.contactEmail || config.contactReceiverEmail);

  // 1. Tell Kylva
  const owner =
    d.source === "calculator"
      ? (() => {
          const r = estimate(d.calc);
          return quickLeadEmail({
            source: "calculator",
            name: "",
            email: d.email,
            brand: d.brand,
            website: "",
            extra: [
              ["Monthly sales", `$${Math.round(d.calc.sales).toLocaleString("en-US")}`],
              ["Shopify plan", `${r.planName} (${d.calc.billing})`],
              ["Apps / month", `$${d.calc.apps}`],
              ["Payments", d.calc.ownPayments ? "Own provider (Paystack etc.)" : "Shopify Payments"],
              ["Suggested", `${r.pkgName} package`],
              ["3-year saving", `$${Math.round(r.saving3).toLocaleString("en-US")}`],
            ],
          });
        })()
      : quickLeadEmail({ source: "review", name: d.name, email: d.email, brand: "", website: d.website });

  const { error } = await resend.emails.send({
    from,
    to: [config.contactReceiverEmail],
    replyTo: d.email,
    subject: owner.subject,
    html: owner.html,
    text: owner.text,
  });
  if (error) {
    console.error("Resend error:", error);
    throw createError({ statusCode: 502, statusMessage: "Failed to send email" });
  }

  // 2. Email the visitor (needs a verified sending domain)
  if (config.fromEmail) {
    const mail =
      d.source === "calculator"
        ? calculatorEmail(estimate(d.calc), { brand: d.brand, whatsapp })
        : reviewConfirmEmail({ name: d.name, website: d.website }, { whatsapp });
    try {
      await resend.emails.send({
        from: config.fromEmail,
        to: [d.email],
        replyTo,
        subject: mail.subject,
        html: mail.html,
        text: mail.text,
      });
    } catch (e) {
      console.error("Visitor email failed:", e);
    }
  }

  return { success: true };
});
