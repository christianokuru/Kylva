<!-- Path: /app/components/custom/general/Button.vue -->

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'text'].includes(value)
  },
  darkMode: {
    type: Boolean,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click')
}

const buttonClasses = computed(() => {
  const base = 'text-xs tracking-widest uppercase transition-colors cursor-pointer'
  
  if (props.variant === 'primary') {
    return [
      base,
      'px-8 py-4 border',
      props.darkMode 
        ? 'border-white/20 hover:border-gold' 
        : 'border-black/20 hover:border-gold',
      props.fullWidth ? 'w-full' : ''
    ].filter(Boolean).join(' ')
  }
  
  if (props.variant === 'text') {
    return [
      base,
      'text-gold hover:opacity-70'
    ].join(' ')
  }
  
  return base
})
</script>

<template>
  <button
    :class="buttonClasses"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<style scoped>
.text-gold {
  color: #D4AF37;
}

.border-gold {
  border-color: #D4AF37;
}
</style>