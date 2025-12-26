<!-- Path: /app/components/custom/Contact/ContactForm.vue -->
<!-- Minimalist Contact Form Component -->

<script setup>
import { reactive } from 'vue'
import Input from '@/components/custom/general/Input.vue'
import Select from '@/components/custom/general/Select.vue'
import Textarea from '@/components/custom/general/Textarea.vue'
import Button from '@/components/custom/general/Button.vue'

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
  <div class="space-y-6 sm:space-y-8">
    <Input
      v-model="formData.name"
      type="text"
      placeholder="Name"
      :required="true"
    />

    <Input
      v-model="formData.email"
      type="email"
      placeholder="Email"
      :required="true"
    />

    <Input
      v-model="formData.phone"
      type="tel"
      placeholder="Phone (Optional)"
    />

    <Select
      v-model="formData.service"
      :options="serviceOptions"
      placeholder="Service Interest"
      :required="true"
    />

    <Textarea
      v-model="formData.message"
      placeholder="Message"
      :rows="6"
      :required="true"
    />

    <Button
      variant="primary"
      text="Send Message"
      :full-width="true"
      @click="handleSubmit"
    />
  </div>
</template>