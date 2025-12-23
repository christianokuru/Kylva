<!-- Path: /app/components/custom/Contact/ContactHero.vue -->

<script setup>
const props = defineProps({
  darkMode: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div class="text-center space-y-12">
    <h1 class="text-3xl md:text-4xl font-light leading-relaxed">
      Let's create something
      <br />
      <span class="text-gold">exceptional together</span>
    </h1>
  </div>
</template>

<style scoped>
.text-gold {
  color: #D4AF37;
}
</style>