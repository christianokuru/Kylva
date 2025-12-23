<!-- Path: /app/pages/contact.vue -->

<script setup>
import { useDarkMode } from '@/composables/useDarkMode'
import ContactHero from '../components/custom/Contact/ContactHero.vue'
import ContactForm from '../components/custom/Contact/ContactForm.vue'
import ContactInfo from '../components/custom/Contact/ContactInfo.vue'

const { darkMode } = useDarkMode()

const handleFormSubmit = (formData) => {
  console.log('Form submitted:', formData)
  alert('Thank you! We will be in touch soon.')
  
  // Here you would typically send the data to your API
  // Example: await $fetch('/api/contact', { method: 'POST', body: formData })
}
</script>

<template>
  <section class="pt-32 min-h-screen flex items-center justify-center px-8 py-32">
    <div class="max-w-2xl w-full space-y-20">
      <ContactHero :dark-mode="darkMode" />
      <ContactForm 
        :dark-mode="darkMode"
        @submit="handleFormSubmit"
      />
      <ContactInfo :dark-mode="darkMode" />
    </div>
  </section>
</template>