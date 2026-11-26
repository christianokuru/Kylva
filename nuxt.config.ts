// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";
import { projects } from "./app/data/projects";
import { solutions } from "./app/data/solutions";
import { articles } from "./app/data/articles";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxtjs/color-mode",

    "@nuxtjs/seo",
  ],
  css: ["./app/assets/css/main.css"],
  vite: {
    plugins: [tailwindcss()],
  },

  // Color Mode Configuration
  colorMode: {
    classSuffix: "",
    fallback: "light",
    preference: "light",
  },

  // SEO Configuration
  site: {
    url: "https://kylva.com",
    name: "Kylva",
    description:
      "Custom online stores for fashion and beauty brands: fast, mobile-first and fully yours, with no monthly platform fees.",
    defaultLocale: "en",
  },

  // App Configuration
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/logo.svg" },
        { rel: "apple-touch-icon", href: "/logo.svg" },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "anonymous",
        },
      ],
      meta: [
        { name: "theme-color", content: "#D4AF37" },
        { name: "msapplication-TileColor", content: "#D4AF37" },
      ],
    },
  },

  // Robots Configuration (served as /robots.txt by @nuxtjs/seo)
  robots: {
    groups: [
      {
        userAgent: ["MJ12bot", "DotBot", "SemrushBot", "AhrefsBot"],
        disallow: ["/"],
      },
    ],
  },

  // Sitemap Configuration (pages are picked up automatically)
  sitemap: {
    exclude: ["/thank-you"],
    // Project pages come from app/data/projects.ts
    urls: [
      ...projects.map((project) => ({
        loc: `/projects/${project.slug}`,
        images: [project.cover, ...project.gallery].map((image) => ({
          loc: image.src,
        })),
      })),
      ...solutions.map((s) => ({ loc: `/solutions/${s.slug}` })),
      ...articles.map((a) => ({ loc: `/blog/${a.slug}`, lastmod: a.published })),
    ],
  },

  // SEO Meta Tags
  seo: {
    meta: {
      description:
        "Custom online stores for fashion and beauty brands. Fast, mobile-first, built from scratch and fully yours, with no monthly platform fees.",
      keywords:
        "custom online store, shopify alternative, fashion e-commerce agency, beauty brand website, haute couture digital, cosmetics e-commerce, luxury brand design, fashion website development, beauty platform, luxury digital agency, premium web design",
      author: "Kylva",
      ogImage: "https://kylva.com/og-image.png",
      twitterCard: "summary_large_image",
    },
  },

  // Link Checker (disable broken link warnings in dev)
  linkChecker: {
    enabled: false,
  },

  // OG Image: a static image (/og-image.png) is used, so the generator is off
  ogImage: {
    enabled: false,
  },

  runtimeConfig: {
    // Private keys (only available on server-side)
    resendApiKey: process.env.RESEND_API_KEY,
    fromEmail: process.env.FROM_EMAIL,
    contactReceiverEmail: process.env.CONTACT_RECEIVER_EMAIL,
    // mongodbUri: process.env.MONGODB_URI,

    // Public keys (exposed to client-side)
    public: {
      // appName: process.env.NUXT_PUBLIC_APP_NAME,
      // appUrl: process.env.NUXT_PUBLIC_APP_URL,
      // appDescription: process.env.NUXT_PUBLIC_APP_DESCRIPTION,
      // paystackPublicKey: process.env.NUXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      gaId: process.env.NUXT_PUBLIC_GA_ID || "", // Google Analytics 4 ID
      // Business email shown on the site (e.g. hello@kylva.com). Hidden while empty.
      contactEmail: process.env.NUXT_PUBLIC_CONTACT_EMAIL || "",
      // WhatsApp number with country code, digits only (e.g. 2348012345678). Hidden while empty.
      whatsapp: process.env.NUXT_PUBLIC_WHATSAPP || "",
    },
  },
});
