<!-- Path: /app/components/custom/Contact/ContactInfo.vue -->

<script setup>
const props = defineProps({
  darkMode: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <div class="text-center space-y-6 pt-20">
    <div 
      :class="[
        'text-xs tracking-widest uppercase',
        darkMode ? 'text-white/40' : 'text-black/40'
      ]"
    >
      Or Email Directly
    </div>
    <div class="text-gold text-sm">hello@kylva.com</div>
  </div>
</template>

<style scoped>
.text-gold {
  color: #D4AF37;
}
</style>