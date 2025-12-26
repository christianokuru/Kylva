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
  <div class="w-32 h-5">
    <img 
    src="/logo.svg" 
    alt="Kylva Logo" 
    :width="props.width"
    class="border object-contain"
  />
  </div>
</template>