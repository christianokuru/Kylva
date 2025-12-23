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
  ],
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  // runtimeConfig: {
  //   // Private keys (only available on server-side)
  //   mongodbUri: process.env.MONGODB_URI,
  //   resendApiKey: process.env.RESEND_API_KEY,
  //   jwtSecret: process.env.JWT_SECRET,
  //   jwtExpiresIn: process.env.JWT_EXPIRES_IN,
  //   jwtRefreshSecret: process.env.JWT_REFRESH_SECRET,
  //   jwtRefreshExpiresIn: process.env.JWT_REFRESH_EXPIRES_IN,
  //   paystackSecretKey: process.env.PAYSTACK_SECRET_KEY,
  //   fromEmail: process.env.FROM_EMAIL,
  //   fromName: process.env.FROM_NAME,

  //   // Public keys (exposed to client-side)
  //   public: {
  //     appName: process.env.NUXT_PUBLIC_APP_NAME,
  //     appUrl: process.env.NUXT_PUBLIC_APP_URL,
  //     appDescription: process.env.NUXT_PUBLIC_APP_DESCRIPTION,
  //     paystackPublicKey: process.env.NUXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
  //   }
  // }
})