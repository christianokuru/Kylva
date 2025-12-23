<!-- Path: /app/components/custom/Services/ServicesHero.vue -->

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
        Comprehensive digital solutions
        <br />
        for <span class="text-gold">modern businesses</span>
      </h1>
    </div>
  </section>
</template>

<style scoped>
.text-gold {
  color: #D4AF37;
}
</style>