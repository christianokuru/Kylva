<!-- Path: /app/components/custom/general/Navigation.vue -->
<!-- Minimalist Navigation Component -->

<script setup>
import Logo from '@/components/custom/general/Logo.vue'
import MobileMenu from '@/components/custom/general/MobileMenu.vue'

const colorMode = useColorMode()
const mobileMenuOpen = ref(false)
const route = useRoute()

const navItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact']

const navigateToPage = (page) => {
  const path = page === 'home' ? '/' : `/${page}`
  navigateTo(path)
  mobileMenuOpen.value = false
}

const isActive = (page) => {
  const pagePath = page.toLowerCase() === 'home' ? '/' : `/${page.toLowerCase()}`
  return route.path === pagePath
}

const toggleDarkMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>

<template>
  <nav class="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/80 border-b border-border">
    <div class="max-w-6xl mx-auto px-4 md:px-8">
      <div class="flex items-center justify-between h-16 md:h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center">
          <Logo size="text-lg md:text-xl" />
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-12">
          <NuxtLink
            v-for="item in navItems"
            :key="item"
            :to="item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`"
            class="text-xs tracking-widest uppercase transition-colors duration-150"
            :class="isActive(item) ? 'text-foreground font-medium' : 'text-muted-foreground hover:text-foreground'"
          >
            {{ item }}
          </NuxtLink>
        </div>

        <!-- Actions -->
        <div class="flex items-center gap-4 md:gap-6">
          <!-- Dark Mode Toggle -->
          <button
            @click="toggleDarkMode"
            class="min-h-[44px] px-3 text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            {{ colorMode.value === 'dark' ? 'Light' : 'Dark' }}
          </button>

          <!-- Mobile Menu Toggle -->
          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="md:hidden min-h-[44px] px-3 text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            {{ mobileMenuOpen ? 'Close' : 'Menu' }}
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <MobileMenu
      :is-open="mobileMenuOpen"
      @close="mobileMenuOpen = false"
      @navigate="navigateToPage"
    />
  </nav>
</template>