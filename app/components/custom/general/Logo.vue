<!-- Path: /app/components/custom/general/Logo.vue -->
<!-- Minimalist Text-Based Logo Component -->

<script setup>
const props = defineProps({
  size: {
    type: String,
    default: 'text-xl'
  }
})
</script>

<template>
  <span
    :class="[
      'font-semibold tracking-tight text-foreground',
      size
    ]"
  >
    Kylva
  </span>
</template>