<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'white',
    validator: (value) => ['white', 'black'].includes(value)
  }
})

const fillColor = computed(() => props.variant === 'black' ? '#000000' : '#FFFFFF')
</script>

<template>
  <svg 
    width="120" 
    height="32" 
    viewBox="0 0 120 32" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    class="h-8"
  >
    <text
      x="0"
      y="24"
      :fill="fillColor"
      font-family="Cormorant Garamond, serif"
      font-size="30"
      font-weight="300"
      letter-spacing="0.1em"
    >
      KYLVA
    </text>
  </svg>
</template>