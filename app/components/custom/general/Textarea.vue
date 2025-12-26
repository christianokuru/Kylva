<!-- Path: /app/components/custom/general/Textarea.vue -->
<!-- Minimalist Textarea Component -->

<script setup>
const props = defineProps({
  placeholder: {
    type: String,
    required: true
  },
  modelValue: {
    type: String,
    default: ''
  },
  rows: {
    type: [String, Number],
    default: 6
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
  <textarea
    :placeholder="placeholder"
    :value="modelValue"
    :rows="rows"
    :required="required"
    :class="[
      // Base styles - minimalist underline style
      'w-full px-0 py-4 min-h-[44px] border-b outline-none transition-colors duration-150 text-base sm:text-lg resize-none',
      // Focus and error states
      error
        ? 'border-destructive'
        : 'border-input focus:border-ring',
      // Colors
      'bg-background text-foreground placeholder:text-muted-foreground/50'
    ]"
    @input="emit('update:modelValue', $event.target.value)"
  ></textarea>
</template>