// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@nuxtjs/seo'
  ],
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },

  // Color Mode Configuration
  colorMode: {
    classSuffix: '',
    fallback: 'light',
    preference: 'light'
  },

  // SEO Configuration
  site: {
    url: 'https://kylva.com',
    name: 'Kylva',
    description: 'International web development agency specializing in custom e-commerce websites, portfolio sites, and business websites for clients in the US and Europe.',
    defaultLocale: 'en',
    identity: {
      type: 'Organization'
    }
  },

  // App Configuration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      htmlAttrs: {
        lang: 'en'
      },
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' },
        { rel: 'apple-touch-icon', href: '/logo.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' }
      ],
      meta: [
        { name: 'theme-color', content: '#D4AF37' },
        { name: 'msapplication-TileColor', content: '#D4AF37' }
      ]
    }
  },

  // Robots Configuration
  robots: {
    allow: '/',
    sitemap: 'https://kylva.com/sitemap.xml'
  },

  // Sitemap Configuration
  sitemap: {
    strictNuxtContentPaths: true,
    urls: [
      {
        loc: '/',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 1.0
      },
      {
        loc: '/services',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.9
      },
      {
        loc: '/portfolio',
        lastmod: new Date().toISOString(),
        changefreq: 'weekly',
        priority: 0.8
      },
      {
        loc: '/about',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.7
      },
      {
        loc: '/contact',
        lastmod: new Date().toISOString(),
        changefreq: 'monthly',
        priority: 0.8
      }
    ]
  },

  // SEO Meta Tags
  seo: {
    meta: {
      description: 'Custom e-commerce, portfolio, and business websites for international clients. Expert web development agency serving the US and Europe.',
      keywords: 'web development agency, custom website development, e-commerce website, portfolio website design, business website, international web agency, US web development, Europe web design',
      author: 'Kylva',
      ogImage: '/logo.svg',
      twitterCard: 'summary_large_image',
      twitterSite: '@kylva'
    }
  },

  // Link Checker (disable broken link warnings in dev)
  linkChecker: {
    enabled: false
  },

  // Schema.org Configuration
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Kylva',
      url: 'https://kylva.com',
      logo: 'https://kylva.com/logo.svg',
      email: 'okuruchristian@gmail.com',
      description: 'International web development agency specializing in custom e-commerce websites, portfolio sites, and business websites for clients in the US and Europe.',
      address: {
        type: 'PostalAddress',
        addressCountry: 'NG'
      },
      sameAs: [
        'https://twitter.com/kylva',
        'https://www.linkedin.com/company/kylva',
        'https://www.tiktok.com/@kylva'
      ],
      areaServed: [
        {
          type: 'Country',
          name: 'United States'
        },
        {
          type: 'Country',
          name: 'United Kingdom'
        },
        {
          type: 'Continent',
          name: 'Europe'
        }
      ],
      knowsAbout: [
        'Web Development',
        'E-commerce Development',
        'Portfolio Website Design',
        'Business Website Development',
        'Custom Website Development'
      ]
    }
  },

  // OG Image Configuration
  ogImage: {
    enabled: true,
    defaults: {
      component: 'OgImage',
      props: {
        logo: '/logo.svg'
      }
    }
  },

  runtimeConfig: {
    // Private keys (only available on server-side)
    // mongodbUri: process.env.MONGODB_URI,
    // resendApiKey: process.env.RESEND_API_KEY,
    // jwtSecret: process.env.JWT_SECRET,
    // jwtExpiresIn: process.env.JWT_EXPIRES_IN,
    // jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
    // jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
    // paystackSecretKey: process.env.PAYSTACK_SECRET_KEY,
    // fromEmail: process.env.FROM_EMAIL,
    // fromName: process.env.FROM_NAME,

    // Public keys (exposed to client-side)
    public: {
      // appName: process.env.NUXT_PUBLIC_APP_NAME,
      // appUrl: process.env.NUXT_PUBLIC_APP_URL,
      // appDescription: process.env.NUXT_PUBLIC_APP_DESCRIPTION,
      // paystackPublicKey: process.env.NUXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
      gaId: process.env.NUXT_PUBLIC_GA_ID || '' // Google Analytics 4 ID
    }
  }
})