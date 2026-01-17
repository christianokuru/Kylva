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
    identity: {
      type: "Organization",
    },
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

  // Robots Configuration
  robots: {
    allow: "/",
    sitemap: "https://kylva.com/sitemap.xml",
  },

  // Sitemap Configuration
  sitemap: {
    strictNuxtContentPaths: true,
    urls: [
      {
        loc: "/",
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 1.0,
      },
      {
        loc: "/services",
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.9,
      },
      {
        loc: "/portfolio",
        lastmod: new Date().toISOString(),
        changefreq: "weekly",
        priority: 0.8,
      },
      {
        loc: "/about",
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.7,
      },
      {
        loc: "/contact",
        lastmod: new Date().toISOString(),
        changefreq: "monthly",
        priority: 0.8,
      },
    ],
  },

  // SEO Meta Tags
  seo: {
    meta: {
      description:
        "Bespoke e-commerce experiences for luxury fashion, beauty, and cosmetics brands. Premium web development for haute couture and beauty houses in the US and Europe.",
      keywords:
        "luxury web development, fashion e-commerce agency, beauty brand website, haute couture digital, cosmetics e-commerce, luxury brand design, fashion website development, beauty platform, luxury digital agency, premium web design",
      author: "Kylva",
      ogImage: "/og-image.png",
      twitterCard: "summary_large_image",
      twitterSite: "@kylva",
    },
  },

  // Link Checker (disable broken link warnings in dev)
  linkChecker: {
    enabled: false,
  },

  // Schema.org Configuration
  schemaOrg: {
    identity: {
      type: "Organization",
      name: "Kylva",
      url: "https://kylva.com",
      logo: "https://kylva.com/logo.svg",
      email: "hello@kylva.studio",
      description:
        "Luxury web development agency crafting exceptional e-commerce experiences exclusively for high-end fashion and beauty brands.",
      address: {
        type: "PostalAddress",
        addressCountry: "US",
      },
      sameAs: [
        "https://twitter.com/kylva",
        "https://www.linkedin.com/company/kylva",
        "https://www.tiktok.com/@kylva",
      ],
      areaServed: [
        {
          type: "Country",
          name: "United States",
        },
        {
          type: "Country",
          name: "Canada",
        },
        {
          type: "Continent",
          name: "Europe",
        },
      ],
      knowsAbout: [
        "Luxury E-commerce Development",
        "Fashion Brand Web Design",
        "Beauty Platform Development",
        "Brand Experience Design",
        "Haute Couture Digital",
        "Cosmetics E-commerce",
      ],
    },
  },

  // OG Image Configuration
  ogImage: {
    enabled: true,
    defaults: {
      component: "OgImage",
      props: {
        logo: "/logo.svg",
      },
    },
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
