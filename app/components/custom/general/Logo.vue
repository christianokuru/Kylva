<!-- Path: /app/components/custom/general/Logo.vue -->

<script setup>
const props = defineProps({
  width: {
    type: String,
    default: '100'
  }
})
</script>

<template>
  <img 
    src="/logo.svg" 
    alt="Kylva Logo" 
    :width="props.width"
    class="h-auto"
  />
</template>