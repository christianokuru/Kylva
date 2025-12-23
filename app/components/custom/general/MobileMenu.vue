<!-- Path: /app/components/custom/general/MobileMenu.vue -->

<script setup>
import { useRoute, useRouter } from 'vue-router'


const props = defineProps({
  isOpen: {
    type: Boolean,
    required: true
  },
  darkMode: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['close', 'navigate'])

const navItems = ['Home', 'About', 'Services', 'Portfolio', 'Contact']

const handleNavigation = (page) => {
  emit('navigate', page.toLowerCase())
  emit('close')
}

const route = useRoute()
const isActive = (page) => {
  const pagePath = page.toLowerCase() === 'home' ? '/' : `/${page.toLowerCase()}`
  return route.path === pagePath
}
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div 
      v-if="isOpen"
      :class="[
        'md:hidden',
        darkMode ? 'bg-black border-white/10' : 'bg-white border-black/10',
        'border-t'
      ]"
    >
      <div class="px-8 py-8 space-y-6">
        <button
          v-for="item in navItems"
          :key="item"
          @click="handleNavigation(item)"
          :class="[
            'block w-full text-left text-sm tracking-widest uppercase transition-colors',
            isActive(item) ? 'text-gold' : darkMode ? 'text-white hover:text-gold' : 'text-black hover:text-gold'
          ]"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.text-gold {
  color: #D4AF37;
}
</style>