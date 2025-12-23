<!-- Path: /app/components/custom/general/Select.vue -->

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
  darkMode: {
    type: Boolean,
    required: true
  },
  required: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const handleChange = (event) => {
  emit('update:modelValue', event.target.value)
}
</script>

<template>
  <select
    :value="modelValue"
    :required="required"
    @change="handleChange"
    :class="[
      'w-full px-0 py-4 border-b outline-none transition-colors text-sm',
      darkMode 
        ? 'bg-transparent border-white/10 text-white focus:border-gold' 
        : 'bg-transparent border-black/10 text-black focus:border-gold'
    ]"
  >
    <option value="" disabled>{{ placeholder }}</option>
    <option 
      v-for="option in options" 
      :key="option.value" 
      :value="option.value"
      :class="darkMode ? 'bg-black text-white' : 'bg-white text-black'"
    >
      {{ option.label }}
    </option>
  </select>
</template>

<style scoped>
.border-gold {
  border-color: #D4AF37;
}
</style>