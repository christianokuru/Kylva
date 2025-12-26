<!-- Path: /app/pages/thank-you.vue -->

<script setup>
import Button from '@/components/custom/general/Button.vue'

const router = useRouter()

const navigateToHome = () => {
  router.push('/')
}

// SEO Meta Tags for Thank You Page
useSeoMeta({
  title: 'Thank You | Message Received',
  description: 'Your message has been received. We\'ll be in touch soon to discuss your project.',
  ogTitle: 'Thank You | Kylva',
  ogDescription: 'Your message has been received. We\'ll be in touch soon.',
  ogImage: 'https://kylva.com/logo.svg',
  ogUrl: 'https://kylva.com/thank-you',
  twitterTitle: 'Thank You | Kylva',
  twitterDescription: 'Your message has been received. We\'ll be in touch soon.',
  twitterImage: 'https://kylva.com/logo.svg',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://kylva.com/thank-you'
    }
  ],
  // Prevent indexing of thank you page
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow'
    }
  ]
})
</script>

<template>
  <section class="min-h-[60vh] flex items-center justify-center px-6 py-32">
    <div class="max-w-2xl text-center space-y-12">
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-light tracking-tight leading-[110%] text-foreground">
        Thank you
      </h1>

      <p class="text-lg md:text-xl text-muted-foreground leading-relaxed">
        Your message has been received. We'll be in touch within 24-48 hours to discuss your project.
      </p>

      <Button
        variant="primary"
        text="Back to Home"
        @click="navigateToHome"
      />
    </div>
  </section>
</template>
