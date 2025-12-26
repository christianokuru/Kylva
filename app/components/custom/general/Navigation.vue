<!-- Path: /app/components/custom/general/Navigation.vue -->

<script setup>
import { useDarkMode } from '@/composables/useDarkMode'
import Logo from '@/components/custom/general/Logo.vue'
import MobileMenu from '@/components/custom/general/MobileMenu.vue'

const { darkMode, toggleDarkMode } = useDarkMode()
const mobileMenuOpen = ref(false)
const route = useRoute()
const router = useRouter()

const navItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact']

const navigateToPage = (page) => {
  const path = page === 'home' ? '/' : `/${page}`
  router.push(path)
  mobileMenuOpen.value = false
}

const isActive = (page) => {
  const pagePath = page.toLowerCase() === 'home' ? '/' : `/${page.toLowerCase()}`
  return route.path === pagePath
}
</script>

<template>
  <nav 
    :class="[
      'fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-colors',
      darkMode ? 'bg-black/60' : 'bg-white/60'
    ]"
  >
    <div class="max-w-6xl mx-auto px-8 md:px-12">
      <div class="flex items-center justify-between h-24">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <Logo />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-16">
          <NuxtLink
            v-for="item in navItems"
            :key="item"
            :to="item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`"
            :class="[
              'text-[14px] tracking-[0.2em] uppercase transition-colors',
              isActive(item) 
                ? 'text-gold' 
                : darkMode 
                  ? 'text-white/70 hover:text-white' 
                  : 'text-black/70 hover:text-black'
            ]"
          >
            {{ item }}
          </NuxtLink>
        </div>

        <!-- Dark Mode Toggle -->
        <button
          @click="toggleDarkMode"
          :class="[
            'text-[14px] tracking-[0.2em] uppercase transition-colors',
            darkMode ? 'text-white/70 hover:text-white' : 'text-black/70 hover:text-black'
          ]"
        >
          {{ darkMode ? 'Light' : 'Dark' }}
        </button>

        <!-- Mobile Menu Toggle -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          :class="[
            'md:hidden text-xs tracking-widest uppercase',
            darkMode ? 'text-white/70' : 'text-black/70'
          ]"
        >
          Menu
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <MobileMenu 
      :is-open="mobileMenuOpen"
      :dark-mode="darkMode"
      @close="mobileMenuOpen = false"
      @navigate="navigateToPage"
    />
  </nav>
</template>

<style scoped>
.text-gold {
  color: #D4AF37;
}
</style>