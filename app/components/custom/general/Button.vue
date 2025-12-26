<!-- Path: /app/components/custom/general/Button.vue -->
<!-- Minimalist Button Component -->

<script setup>
const props = defineProps({
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'ghost'].includes(value)
  },
  text: {
    type: String,
    required: true
  },
  fullWidth: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])
</script>

<template>
  <button
    :class="[
      // Base styles - no rounded corners
      'inline-flex items-center justify-center font-medium transition-all duration-150 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring min-h-[44px]',
      'text-xs sm:text-sm tracking-widest uppercase px-6 sm:px-8 py-3 sm:py-4',
      // Disabled state
      disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer',
      // Variants
      variant === 'primary' && [
        'bg-primary text-primary-foreground hover:opacity-80',
        'active:scale-95'
      ],
      variant === 'secondary' && [
        'border border-border bg-background text-foreground hover:bg-muted',
        'active:scale-95'
      ],
      variant === 'ghost' && [
        'text-muted-foreground hover:text-foreground hover:bg-muted'
      ],
      // Width
      fullWidth ? 'w-full' : ''
    ]"
    :disabled="disabled"
    @click="emit('click')"
  >
    {{ text }}
  </button>
</template>