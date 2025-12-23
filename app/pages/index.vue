<!-- Path: /app/pages/index.vue -->

<script setup>
import { useDarkMode } from '@/composables/useDarkMode'
import HomeHero from '../components/custom/Home/HomeHero.vue'
import HomeServices from '../components/custom/Home/HomeServices.vue'
import HomePortfolio from '../components/custom/Home/HomePortfolio.vue'
import HomeCTA from '../components/custom/Home/HomeCTA.vue'

const { darkMode } = useDarkMode()
</script>

<template>
  <div>
    <HomeHero :dark-mode="darkMode" />
    <HomeServices :dark-mode="darkMode" />
    <HomePortfolio :dark-mode="darkMode" />
    <HomeCTA :dark-mode="darkMode" />
  </div>
</template>