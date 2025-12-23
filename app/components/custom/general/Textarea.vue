<!-- Path: /app/components/custom/general/Textarea.vue -->

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
  darkMode: {
    type: Boolean,
    required: true
  },
  rows: {
    type: [String, Number],
    default: 6
  },
  required: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const handleInput = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <textarea
    :placeholder="placeholder"
    :value="modelValue"
    :rows="rows"
    :required="required"
    @input="handleInput"
    :class="[
      'w-full px-0 py-4 border-b outline-none transition-colors text-sm resize-none',
      darkMode 
        ? 'bg-transparent border-white/10 text-white focus:border-gold placeholder:text-white/30' 
        : 'bg-transparent border-black/10 text-black focus:border-gold placeholder:text-black/30'
    ]"
  ></textarea>
</template>

<style scoped>
.border-gold {
  border-color: #D4AF37;
}
</style>