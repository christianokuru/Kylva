// composables/useContact.ts
// Contact details come from settings (env vars), never from code.
// Anything not set yet is simply hidden on the site.
export const useContact = () => {
  const config = useRuntimeConfig();
  const email = String(config.public.contactEmail || "").trim();
  const whatsappNumber = String(config.public.whatsapp || "").replace(/\D/g, "");

  const whatsappUrl = (text = "Hi Kylva, I'd like a quote for an online store.") =>
    whatsappNumber
      ? `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
      : "";

  /** Send a GA4 event if analytics is loaded. */
  const track = (name: string, params: Record<string, unknown> = {}) => {
    if (import.meta.client && typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
  };

  return { email, whatsappNumber, whatsappUrl, track };
};
