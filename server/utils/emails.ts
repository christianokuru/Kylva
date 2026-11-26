import type { estimate as estimateFn } from "../../app/lib/shopifyCost";
import { usd } from "../../app/lib/shopifyCost";

type Estimate = ReturnType<typeof estimateFn>;

// Branded HTML emails for the contact form.
// Table-based layout with inline styles so it looks right in Gmail, Outlook and Apple Mail.

export interface LeadData {
  name: string;
  email: string;
  brand: string;
  website: string;
  service: string;
  budget: string;
  timeline: string;
  message: string;
}

const SITE = "https://kylva.com";
const C = {
  ink: "#0c0c0c",
  text: "#3f3f46",
  muted: "#71717a",
  line: "#e7e5e4",
  ivory: "#fafaf9",
  gold: "#b8932b",
  goldSoft: "#f6efdc",
  green: "#1f7a4d",
};
const SERIF = "'Cormorant Garamond', Georgia, 'Times New Roman', serif";
const SANS = "'Inter', -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif";

/** Make user text safe to put inside HTML. */
export const esc = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

/** Turn "yourbrand.com" or "@yourbrand" into a usable link (or "" if unclear). */
const websiteLink = (raw: string) => {
  const v = raw.trim();
  if (!v) return "";
  if (/^@?[A-Za-z0-9._]{2,30}$/.test(v) && !v.includes(".")) {
    return `https://instagram.com/${v.replace(/^@/, "")}`;
  }
  if (/^@[A-Za-z0-9._]{2,30}$/.test(v)) return `https://instagram.com/${v.slice(1)}`;
  const url = /^https?:\/\//i.test(v) ? v : `https://${v}`;
  try {
    const u = new URL(url);
    return u.hostname.includes(".") ? u.toString() : "";
  } catch {
    return "";
  }
};

const button = (href: string, label: string, kind: "dark" | "light" | "green" = "dark") => {
  const bg = kind === "dark" ? C.ink : kind === "green" ? C.green : "#ffffff";
  const fg = kind === "light" ? C.ink : "#ffffff";
  const border = kind === "light" ? C.ink : bg;
  return `<a href="${esc(href)}" style="display:inline-block;background:${bg};color:${fg};border:1px solid ${border};font-family:${SANS};font-size:11px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;text-decoration:none;padding:14px 26px;margin:0 8px 8px 0">${label}</a>`;
};

const eyebrow = (text: string) =>
  `<p style="margin:0 0 10px;font-family:${SANS};font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;color:${C.gold}">${text}</p>`;

const heading = (text: string) =>
  `<h1 style="margin:0 0 18px;font-family:${SERIF};font-size:32px;line-height:1.15;font-weight:400;color:${C.ink}">${text}</h1>`;

const para = (html: string) =>
  `<p style="margin:0 0 16px;font-family:${SANS};font-size:14px;line-height:1.7;color:${C.text}">${html}</p>`;

const detailRows = (rows: [string, string][]) =>
  rows
    .filter(([, v]) => v)
    .map(
      ([label, value], i, all) => `
      <tr>
        <td class="lbl" style="padding:12px 16px 12px 0;${i < all.length - 1 ? `border-bottom:1px solid ${C.line};` : ""}font-family:${SANS};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${C.muted};vertical-align:top;white-space:nowrap;width:120px">${label}</td>
        <td style="padding:12px 0;${i < all.length - 1 ? `border-bottom:1px solid ${C.line};` : ""}font-family:${SANS};font-size:14px;color:${C.ink};vertical-align:top">${value}</td>
      </tr>`,
    )
    .join("");

/** Shared frame: wordmark header, white card, footer. */
const layout = ({ preview, body, footerNote }: { preview: string; body: string; footerNote: string }) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>Kylva</title>
<style>
  @media (max-width: 520px) {
    .px { padding-left: 22px !important; padding-right: 22px !important; }
    .card { padding: 28px 22px !important; }
    .lbl { width: 84px !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:${C.ivory};-webkit-text-size-adjust:100%">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;color:transparent">${esc(preview)}&#8199;&#65279;&#847;&#8199;&#65279;&#847;&#8199;&#65279;&#847;</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.ivory}">
  <tr>
    <td align="center" style="padding:32px 16px">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px">
        <!-- Header -->
        <tr>
          <td class="px" style="background:${C.ink};padding:28px 40px" align="left">
            <a href="${SITE}" style="text-decoration:none;font-family:${SERIF};font-size:26px;letter-spacing:8px;color:#ffffff">KYLVA</a>
          </td>
        </tr>
        <tr><td style="height:3px;background:${C.gold};line-height:3px;font-size:0">&nbsp;</td></tr>
        <!-- Card -->
        <tr>
          <td class="card" style="background:#ffffff;padding:40px;border:1px solid ${C.line};border-top:0">
            ${body}
          </td>
        </tr>
        <!-- Footer -->
        <tr>
          <td class="px" style="padding:28px 40px;text-align:center">
            <p style="margin:0 0 6px;font-family:${SERIF};font-size:18px;letter-spacing:5px;color:${C.ink}">KYLVA</p>
            <p style="margin:0 0 12px;font-family:${SANS};font-size:12px;line-height:1.6;color:${C.muted}">Custom online stores for fashion &amp; beauty brands</p>
            <p style="margin:0 0 12px;font-family:${SANS};font-size:12px">
              <a href="${SITE}" style="color:${C.ink};text-decoration:underline">kylva.com</a>
              &nbsp;·&nbsp;
              <a href="${SITE}/projects" style="color:${C.ink};text-decoration:underline">Our work</a>
            </p>
            <p style="margin:0;font-family:${SANS};font-size:11px;line-height:1.6;color:#a1a1aa">${footerNote}</p>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`;

/* ------------------------------------------------------------------ */
/* 1. New lead → Kylva                                                 */
/* ------------------------------------------------------------------ */
export const leadEmail = (d: LeadData) => {
  const site = websiteLink(d.website);
  const received = new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Lagos",
  }).format(new Date());

  const chip = (text: string) =>
    `<span style="display:inline-block;background:${C.goldSoft};color:#6b5410;font-family:${SANS};font-size:12px;font-weight:600;padding:6px 12px;margin:0 6px 6px 0">${esc(text)}</span>`;

  const body = `
    ${eyebrow("New quote request")}
    ${heading(`${esc(d.brand)} wants a store`)}
    <p style="margin:0 0 20px">${chip(d.service)}${chip(d.budget)}${chip(d.timeline)}</p>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px">
      ${detailRows([
        ["Name", esc(d.name)],
        ["Email", `<a href="mailto:${esc(d.email)}" style="color:${C.ink}">${esc(d.email)}</a>`],
        ["Brand", esc(d.brand)],
        ["Website", d.website ? (site ? `<a href="${esc(site)}" style="color:${C.ink}">${esc(d.website)}</a>` : esc(d.website)) : ""],
        ["Needs", esc(d.service)],
        ["Budget", esc(d.budget)],
        ["Launch", esc(d.timeline)],
        ["Received", `${received} (Lagos)`],
      ])}
    </table>

    ${
      d.message
        ? `<p style="margin:0 0 8px;font-family:${SANS};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${C.muted}">Their message</p>
           <div style="margin:0 0 28px;padding:18px 20px;background:${C.ivory};border-left:3px solid ${C.gold};font-family:${SANS};font-size:14px;line-height:1.7;color:${C.ink};white-space:pre-wrap">${esc(d.message)}</div>`
        : ""
    }

    <div style="margin:0 0 8px">
      ${button(`mailto:${d.email}?subject=${encodeURIComponent(`Your store for ${d.brand} · Kylva`)}`, `Reply to ${esc(d.name.split(" ")[0] || d.name)}`)}
      ${site ? button(site, "View their brand", "light") : ""}
    </div>
    <p style="margin:16px 0 0;font-family:${SANS};font-size:12px;line-height:1.6;color:${C.muted}">Tip: reply within a few hours. Fast replies win most projects.</p>
  `;

  const text = [
    `New quote request: ${d.brand}`,
    "",
    `Name: ${d.name}`,
    `Email: ${d.email}`,
    `Brand: ${d.brand}`,
    d.website ? `Website: ${d.website}` : "",
    `Needs: ${d.service}`,
    `Budget: ${d.budget}`,
    `Launch: ${d.timeline}`,
    `Received: ${received} (Lagos)`,
    d.message ? `\nMessage:\n${d.message}` : "",
    "",
    "Reply to this email to answer them directly.",
  ]
    .filter((l) => l !== "")
    .join("\n");

  return {
    subject: `New lead: ${d.brand} · ${d.service} · ${d.budget}`,
    html: layout({
      preview: `${d.name} from ${d.brand} · ${d.service} · ${d.budget} · ${d.timeline}`,
      body,
      footerNote: "Sent by the contact form on kylva.com. Press reply to answer them directly.",
    }),
    text,
  };
};

/* ------------------------------------------------------------------ */
/* 2. Thank-you → the person who asked                                 */
/* ------------------------------------------------------------------ */
export const thankYouEmail = (d: LeadData, opts: { whatsapp?: string } = {}) => {
  const first = (d.name.trim().split(/\s+/)[0] || d.name).trim();
  const wa = opts.whatsapp
    ? `https://wa.me/${opts.whatsapp}?text=${encodeURIComponent(`Hi Kylva, I just sent a quote request for ${d.brand}.`)}`
    : "";

  const step = (n: string, title: string, text: string) => `
    <tr>
      <td style="padding:0 16px 18px 0;vertical-align:top;width:36px;font-family:${SERIF};font-size:28px;line-height:1;color:${C.gold}">${n}</td>
      <td style="padding:0 0 18px;vertical-align:top">
        <p style="margin:0 0 2px;font-family:${SANS};font-size:14px;font-weight:600;color:${C.ink}">${title}</p>
        <p style="margin:0;font-family:${SANS};font-size:13px;line-height:1.6;color:${C.text}">${text}</p>
      </td>
    </tr>`;

  const body = `
    ${eyebrow("Request received")}
    ${heading(`Thank you, ${esc(first)}.`)}
    ${para(`We've received your request for <strong style="color:${C.ink}">${esc(d.brand)}</strong> and we're glad you reached out. A real person (not a bot) will read it and get back to you <strong style="color:${C.ink}">within 24 hours</strong>.`)}

    <p style="margin:28px 0 8px;font-family:${SANS};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${C.muted}">Your request</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 28px;background:${C.ivory};padding:4px 20px">
      ${detailRows([
        ["Brand", esc(d.brand)],
        ["Needs", esc(d.service)],
        ["Budget", esc(d.budget)],
        ["Launch", esc(d.timeline)],
      ])}
    </table>

    <p style="margin:0 0 16px;font-family:${SANS};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${C.muted}">What happens next</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 12px">
      ${step("1", "We review your brand", "We look at your products, your current store or Instagram, and what you need.")}
      ${step("2", "You get a clear reply", "Questions if we need them, or a written quote with price and timeline.")}
      ${step("3", "A short call", "We agree on features, price and launch date. No obligation until you're happy.")}
    </table>

    ${para("While you wait, have a look around our concept stores. Each one is live, so open it on your phone and try the checkout.")}

    <div style="margin:8px 0 28px">
      ${button(`${SITE}/projects`, "See our work")}
      ${wa ? button(wa, "Chat on WhatsApp", "green") : ""}
    </div>

    ${para("If you'd like to add anything, such as photos, links or stores you love, just reply to this email.")}

    <p style="margin:28px 0 0;font-family:${SANS};font-size:14px;line-height:1.6;color:${C.text}">Warmly,</p>
    <p style="margin:4px 0 0;font-family:${SERIF};font-size:24px;color:${C.ink}">Christian Okuru</p>
    <p style="margin:2px 0 0;font-family:${SANS};font-size:12px;color:${C.muted}">Founder, Kylva</p>
  `;

  const text = [
    `Thank you, ${first}.`,
    "",
    `We've received your request for ${d.brand} and will get back to you within 24 hours.`,
    "",
    "Your request:",
    `Brand: ${d.brand}`,
    `Needs: ${d.service}`,
    `Budget: ${d.budget}`,
    `Launch: ${d.timeline}`,
    "",
    "What happens next:",
    "1. We review your brand.",
    "2. You get a clear reply: questions, or a written quote with price and timeline.",
    "3. A short call to agree on features, price and launch date.",
    "",
    `See our work: ${SITE}/projects`,
    wa ? `Chat on WhatsApp: ${wa}` : "",
    "",
    "Just reply to this email if you'd like to add anything.",
    "",
    "Warmly,",
    "Christian Okuru",
    "Founder, Kylva",
  ]
    .filter((l, i, all) => !(l === "" && all[i - 1] === ""))
    .join("\n");

  return {
    subject: `Thanks, ${first}. We've got your request · Kylva`,
    html: layout({
      preview: `We'll reply within 24 hours about your store for ${d.brand}.`,
      body,
      footerNote: `You're getting this because you asked for a quote on kylva.com.`,
    }),
    text,
  };
};

/* ------------------------------------------------------------------ */
/* 3. Calculator results → the visitor                                 */
/* ------------------------------------------------------------------ */

export const calculatorEmail = (r: Estimate, opts: { brand?: string; whatsapp?: string } = {}) => {
  const brand = opts.brand?.trim();
  const good = r.saving3 > 0;
  const headline = good ? `You could save ${usd(r.saving3)} over 3 years` : "Shopify is cheaper for you right now";

  const body = `
    ${eyebrow("Your Shopify cost results")}
    ${heading(esc(headline))}
    ${para(
      good && r.breakEvenMonths
        ? `Based on your numbers${brand ? ` for <strong style="color:${C.ink}">${esc(brand)}</strong>` : ""}, a Kylva <strong style="color:${C.ink}">${r.pkgName}</strong> store pays for itself in about <strong style="color:${C.ink}">${r.breakEvenMonths} ${r.breakEvenMonths === 1 ? "month" : "months"}</strong>. After that, the money you'd pay Shopify every month stays with you.`
        : "At your current numbers the monthly Shopify bill is small. A custom store starts to pay off as your sales grow, or when you want a look a theme can't give you.",
    )}

    <p style="margin:24px 0 8px;font-family:${SANS};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${C.muted}">Your Shopify bill each month</p>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px">
      ${detailRows([
        [`${r.planName} plan`, usd(r.planMonthly)],
        ["Apps", usd(r.input.apps)],
        ["Extra payment fee", usd(r.feeMonthly)],
        ["Total", `<strong>${usd(r.shopifyMonthly)}</strong>`],
      ])}
    </table>

    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px">
      <tr>
        <td width="50%" style="padding:16px;background:${C.ivory};text-align:center;border-right:4px solid #ffffff">
          <p style="margin:0 0 4px;font-family:${SANS};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:${C.muted}">Shopify · 3 years</p>
          <p style="margin:0;font-family:${SERIF};font-size:26px;color:${C.ink}">${usd(r.shopify3)}</p>
        </td>
        <td width="50%" style="padding:16px;background:${C.ink};text-align:center">
          <p style="margin:0 0 4px;font-family:${SANS};font-size:11px;letter-spacing:1.5px;text-transform:uppercase;color:#d4d4d8">Kylva ${r.pkgName} · 3 years</p>
          <p style="margin:0;font-family:${SERIF};font-size:26px;color:#ffffff">${usd(r.kylva3)}</p>
        </td>
      </tr>
    </table>

    ${para(`Kylva's figure is the one-off ${r.pkgName} package (${usd(r.pkgPrice)}) plus about $20 a month for hosting, domain and email. Card processing fees are left out on both sides, because you pay them either way.`)}

    <div style="margin:8px 0 24px">
      ${button(`${SITE}/#contact`, "Get a free quote")}
      ${opts.whatsapp ? button(`https://wa.me/${opts.whatsapp}?text=${encodeURIComponent("Hi Kylva, I used your Shopify cost calculator and I'd like a quote.")}`, "Chat on WhatsApp", "green") : ""}
    </div>

    ${para("Questions about your numbers? Just reply to this email.")}
    <p style="margin:24px 0 0;font-family:${SANS};font-size:14px;color:${C.text}">Warmly,</p>
    <p style="margin:4px 0 0;font-family:${SERIF};font-size:24px;color:${C.ink}">Christian Okuru</p>
    <p style="margin:2px 0 0;font-family:${SANS};font-size:12px;color:${C.muted}">Founder, Kylva</p>
  `;

  const text = [
    headline,
    "",
    `Your Shopify bill each month: ${usd(r.shopifyMonthly)} (${r.planName} plan ${usd(r.planMonthly)}, apps ${usd(r.input.apps)}, extra payment fee ${usd(r.feeMonthly)})`,
    `Shopify over 3 years: ${usd(r.shopify3)}`,
    `Kylva ${r.pkgName} over 3 years: ${usd(r.kylva3)}`,
    good && r.breakEvenMonths ? `Pays for itself in about ${r.breakEvenMonths} months.` : "",
    "",
    `Get a free quote: ${SITE}/#contact`,
    "",
    "Christian Okuru, Founder, Kylva",
  ]
    .filter(Boolean)
    .join("\n");

  return {
    subject: good ? `Your results: save ${usd(r.saving3)} over 3 years · Kylva` : "Your Shopify cost results · Kylva",
    html: layout({
      preview: `Shopify: ${usd(r.shopify3)} vs Kylva: ${usd(r.kylva3)} over 3 years.`,
      body,
      footerNote: "You're getting this because you asked for your results on kylva.com.",
    }),
    text,
  };
};

/* ------------------------------------------------------------------ */
/* 4. Short lead (calculator or free review) → Kylva                   */
/* ------------------------------------------------------------------ */
export const quickLeadEmail = (d: {
  source: "calculator" | "review";
  name: string;
  email: string;
  brand: string;
  website: string;
  extra?: [string, string][];
}) => {
  const what = d.source === "calculator" ? "Used the Shopify calculator" : "Wants a free store review";
  const site = websiteLink(d.website);
  const who = d.brand || d.name || d.email;

  const body = `
    ${eyebrow(d.source === "calculator" ? "Calculator lead" : "Free review request")}
    ${heading(`${esc(who)}`)}
    ${para(esc(what) + (d.source === "review" ? ". Send them a short video with 5 fixes within 48 hours." : ". They have their results by email. A friendly follow-up in a day or two works well."))}
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px">
      ${detailRows([
        ["Name", esc(d.name)],
        ["Email", `<a href="mailto:${esc(d.email)}" style="color:${C.ink}">${esc(d.email)}</a>`],
        ["Brand", esc(d.brand)],
        ["Website", d.website ? (site ? `<a href="${esc(site)}" style="color:${C.ink}">${esc(d.website)}</a>` : esc(d.website)) : ""],
        ...(d.extra || []).map(([k, v]) => [k, esc(v)] as [string, string]),
      ])}
    </table>
    <div>
      ${button(`mailto:${d.email}`, "Reply")}
      ${site ? button(site, "View their brand", "light") : ""}
    </div>
  `;

  return {
    subject: `${d.source === "calculator" ? "Calculator lead" : "Free review request"}: ${who}`,
    html: layout({ preview: `${what}: ${d.email}`, body, footerNote: "Sent from kylva.com. Press reply to answer them directly." }),
    text: [what, `Name: ${d.name}`, `Email: ${d.email}`, `Brand: ${d.brand}`, `Website: ${d.website}`, ...(d.extra || []).map(([k, v]) => `${k}: ${v}`)].join("\n"),
  };
};

/* ------------------------------------------------------------------ */
/* 5. Free review confirmation → the visitor                           */
/* ------------------------------------------------------------------ */
export const reviewConfirmEmail = (d: { name: string; website: string }, opts: { whatsapp?: string } = {}) => {
  const first = esc((d.name.trim().split(/\s+/)[0] || "there").trim());
  const body = `
    ${eyebrow("Free store review")}
    ${heading(`Thanks, ${first}. Your review is on its way.`)}
    ${para(`We'll look at <strong style="color:${C.ink}">${esc(d.website)}</strong> and send you a short video with <strong style="color:${C.ink}">5 practical fixes</strong> to help you sell more, within 48 hours. It's free, whether or not you work with us.`)}
    ${para("While you wait, have a look at the stores we've built. Each one is live, so try it on your phone.")}
    <div style="margin:8px 0 24px">
      ${button(`${SITE}/projects`, "See our work")}
      ${opts.whatsapp ? button(`https://wa.me/${opts.whatsapp}`, "Chat on WhatsApp", "green") : ""}
    </div>
    <p style="margin:24px 0 0;font-family:${SANS};font-size:14px;color:${C.text}">Warmly,</p>
    <p style="margin:4px 0 0;font-family:${SERIF};font-size:24px;color:${C.ink}">Christian Okuru</p>
    <p style="margin:2px 0 0;font-family:${SANS};font-size:12px;color:${C.muted}">Founder, Kylva</p>
  `;
  return {
    subject: "Your free store review is on its way · Kylva",
    html: layout({ preview: "5 practical fixes for your store, within 48 hours.", body, footerNote: "You're getting this because you asked for a free store review on kylva.com." }),
    text: `Thanks, ${d.name}. We'll review ${d.website} and send you a short video with 5 fixes within 48 hours.\n\nSee our work: ${SITE}/projects\n\nChristian Okuru, Founder, Kylva`,
  };
};
