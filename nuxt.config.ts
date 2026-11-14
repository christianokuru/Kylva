// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

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
      "Luxury web development agency crafting exceptional e-commerce experiences exclusively for high-end fashion and beauty brands in the US and Europe.",
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
  },

  // SEO Meta Tags
  seo: {
    meta: {
      description:
        "Bespoke e-commerce experiences for luxury fashion, beauty, and cosmetics brands. Premium web development for haute couture and beauty houses in the US and Europe.",
      keywords:
        "luxury web development, fashion e-commerce agency, beauty brand website, haute couture digital, cosmetics e-commerce, luxury brand design, fashion website development, beauty platform, luxury digital agency, premium web design",
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
    },
  },
});
