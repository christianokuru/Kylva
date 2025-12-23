<!-- Path: /app/pages/about.vue -->

<script setup>
import { useDarkMode } from '@/composables/useDarkMode'
import AboutHero from '../components/custom/About/AboutHero.vue'
import AboutValues from '../components/custom/About/AboutValues.vue'

const { darkMode } = useDarkMode()
</script>

<template>
  <div class="pt-32">
    <AboutHero :dark-mode="darkMode" />
    <AboutValues :dark-mode="darkMode" />
  </div>
</template>