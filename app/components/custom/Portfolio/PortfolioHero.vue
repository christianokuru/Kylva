<!-- Path: /app/components/custom/Portfolio/PortfolioHero.vue -->

<script setup>
const props = defineProps({
  darkMode: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <section class="min-h-screen flex items-center justify-center px-8 py-32">
    <div class="max-w-3xl text-center space-y-12">
      <h1 class="text-3xl md:text-4xl font-light leading-relaxed">
        Selected projects
      </h1>
    </div>
  </section>
</template>