<script setup>
import Hero from '@/components/custom/Home/Hero.vue'
import Services from '@/components/custom/Home/Services.vue'
import About from '@/components/custom/Home/About.vue'
import Work from '@/components/custom/Home/Work.vue'
import Testimonials from '@/components/custom/Home/Testimonials.vue'
import Contact from '@/components/custom/Home/Contact.vue'

useSeoMeta({
  title: 'Kylva - Luxury E-Commerce Web Development Agency',
  description: 'Crafting exceptional e-commerce experiences exclusively for luxury fashion and beauty brands.',
  ogTitle: 'Kylva - Luxury E-Commerce Web Development Agency',
  ogDescription: 'Crafting exceptional e-commerce experiences exclusively for luxury fashion and beauty brands.',
  ogImage: '/logo.svg',
  twitterCard: 'summary_large_image',
})
</script>

<template>
  <div class="size-full">
    <Hero />
    <Services />
    <About />
    <Work />
    <Testimonials />
    <Contact />
  </div>
</template>