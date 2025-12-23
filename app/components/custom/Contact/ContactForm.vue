<!-- Path: /app/components/custom/Contact/ContactForm.vue -->

<script setup>
import { reactive } from 'vue'

import Input from '@/components/custom/general/Input.vue'
import Select from '@/components/custom/general/Select.vue'
import Textarea from '@/components/custom/general/Textarea.vue'
import Button from '@/components/custom/general/Button.vue'

const props = defineProps({
  darkMode: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['submit'])

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  service: '',
  message: ''
})

const serviceOptions = [
  { value: 'ecommerce', label: 'E-Commerce' },
  { value: 'portfolio', label: 'Portfolio' },
  { value: 'business', label: 'Business Website' },
  { value: 'other', label: 'Other' }
]

const handleSubmit = () => {
  emit('submit', { ...formData })
  
  // Reset form
  formData.name = ''
  formData.email = ''
  formData.phone = ''
  formData.service = ''
  formData.message = ''
}
</script>

<template>
  <div class="space-y-8">
    <Input 
      v-model="formData.name"
      type="text"
      placeholder="Name"
      :dark-mode="darkMode"
      :required="true"
    />
    
    <Input 
      v-model="formData.email"
      type="email"
      placeholder="Email"
      :dark-mode="darkMode"
      :required="true"
    />
    
    <Input 
      v-model="formData.phone"
      type="tel"
      placeholder="Phone (Optional)"
      :dark-mode="darkMode"
    />
    
    <Select 
      v-model="formData.service"
      :options="serviceOptions"
      placeholder="Service Interest"
      :dark-mode="darkMode"
      :required="true"
    />
    
    <Textarea 
      v-model="formData.message"
      placeholder="Message"
      :dark-mode="darkMode"
      :rows="6"
      :required="true"
    />
    
    <Button 
      variant="primary"
      :dark-mode="darkMode"
      text="Send Message"
      :full-width="true"
      @click="handleSubmit"
    />
  </div>
</template>