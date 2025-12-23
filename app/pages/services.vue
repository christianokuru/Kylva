<!-- Path: /app/pages/services.vue -->

<script setup>
import { useDarkMode } from '@/composables/useDarkMode'
import ServicesHero from '../components/custom/Services/ServicesHero.vue'
import ServicesList from '../components/custom/Services/ServicesList.vue'

const { darkMode } = useDarkMode()
</script>

<template>
  <div class="pt-32">
    <ServicesHero :dark-mode="darkMode" />
    <ServicesList :dark-mode="darkMode" />
  </div>
</template>