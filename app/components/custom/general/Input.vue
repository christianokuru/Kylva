<!-- Path: /app/components/custom/general/Input.vue -->
<!-- Minimalist Input Component -->

<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'text',
    validator: (value) => ['text', 'email', 'tel', 'password'].includes(value)
  },
  placeholder: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  },
  required: {
    type: Boolean,
    default: false
  },
  error: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])
</script>

<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    :required="required"
    :class="[
      // Base styles - minimalist underline style
      'w-full px-0 py-4 min-h-[44px] border-b outline-none transition-colors duration-150 text-base sm:text-lg',
      // Focus and error states
      error
        ? 'border-destructive'
        : 'border-input focus:border-ring',
      // Colors
      'bg-background text-foreground placeholder:text-muted-foreground/50'
    ]"
    @input="emit('update:modelValue', $event.target.value)"
  />
</template>