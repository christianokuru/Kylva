<!-- Path: /app/layouts/default.vue -->

<script setup>
import { useDarkMode } from '@/composables/useDarkMode'
import Navigation from '../components/custom/general/Navigation.vue'
import Footer from '../components/custom/general/Footer.vue'

const { darkMode } = useDarkMode()
</script>

<template>
  <div 
    :class="[
      'min-h-screen transition-colors',
      darkMode ? 'bg-black text-white' : 'bg-white text-black'
    ]"
  >
    <Navigation />
    
    <main>
      <slot />
    </main>
    
    <Footer :dark-mode="darkMode" />
  </div>
</template>

