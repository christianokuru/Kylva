<!-- Path: /app/components/custom/general/Select.vue -->
<!-- Minimalist Select Component -->

<script setup>
const props = defineProps({
  options: {
    type: Array,
    required: true
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
  <select
    :value="modelValue"
    :required="required"
    :class="[
      // Base styles - minimalist underline style
      'w-full px-0 py-4 min-h-[44px] border-b outline-none transition-colors duration-150 text-base sm:text-lg',
      // Remove default arrow for custom styling
      'appearance-none bg-background',
      // Focus and error states
      error
        ? 'border-destructive'
        : 'border-input focus:border-ring',
      // Colors
      'text-foreground'
    ]"
    @change="emit('update:modelValue', $event.target.value)"
  >
    <option value="" disabled>{{ placeholder }}</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.label }}
    </option>
  </select>
</template>