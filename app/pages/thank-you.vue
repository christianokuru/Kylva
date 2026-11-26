<!-- Path: /app/pages/thank-you.vue -->

<script setup>
const { whatsappUrl, track } = useContact();

// SEO Meta Tags for Thank You Page
useSeoMeta({
  title: "Thank You",
  description:
    "Your message has been received. We'll be in touch soon to discuss your project.",
  ogTitle: "Thank You | Kylva",
  ogDescription: "Your message has been received. We'll be in touch soon.",
  ogImage: "https://kylva.com/og-image.png",
  ogUrl: "https://kylva.com/thank-you",
  twitterTitle: "Thank You | Kylva",
  twitterDescription: "Your message has been received. We'll be in touch soon.",
  twitterImage: "https://kylva.com/og-image.png",
});

useHead({
  link: [
    {
      rel: "canonical",
      href: "https://kylva.com/thank-you",
    },
  ],
  // Prevent indexing of thank you page
  meta: [
    {
      name: "robots",
      content: "noindex, nofollow",
    },
  ],
});

// WebPage Schema for Thank You page
useSchemaOrg([
  {
    "@type": "WebPage",
    "@id": "https://kylva.com/thank-you/#webpage",
    name: "Thank You | Kylva",
    description:
      "Your message has been received. We will be in touch soon to discuss your luxury e-commerce project.",
    url: "https://kylva.com/thank-you",
    isPartOf: { "@id": "https://kylva.com/#website" },
  },
]);
</script>

<template>
  <section class="min-h-[70vh] flex items-center justify-center px-6 pt-36 pb-24 bg-[#fafaf9]">
    <div class="max-w-2xl text-center">
      <p class="text-xs uppercase tracking-[0.4em] text-[#8a6d12] mb-6 font-sans">
        Request received
      </p>
      <h1 class="text-5xl md:text-6xl tracking-tight leading-[1.1] mb-8 font-serif font-light">
        Thank you, <span class="italic" style="font-weight: 400">we're on it</span>
      </h1>
      <p class="text-base md:text-lg text-gray-600 leading-relaxed mb-12 font-sans font-light">
        We'll reply within 24 hours with next steps and a clear price. Check
        your inbox (and spam folder) for a copy of your request.
      </p>

      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <a
          v-if="whatsappUrl()"
          :href="whatsappUrl('Hi Kylva, I just sent a quote request on your website.')"
          target="_blank"
          rel="noopener"
          @click="track('contact_whatsapp', { location: 'thank_you' })"
          class="w-full sm:w-auto px-10 py-5 bg-[#1f7a4d] text-white text-xs uppercase tracking-[0.3em] hover:bg-[#17633e] transition-colors font-sans font-medium"
        >
          Can't wait? WhatsApp us
        </a>
        <NuxtLink
          to="/projects"
          class="w-full sm:w-auto px-10 py-5 border border-black text-xs uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-colors font-sans font-medium"
        >
          Try our concept stores
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
