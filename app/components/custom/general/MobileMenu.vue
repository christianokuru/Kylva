<!-- Path: /app/components/custom/general/MobileMenu.vue -->
<!-- Minimalist Mobile Menu Component -->

<script setup>
defineProps({
  isOpen: {
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
      class="md:hidden bg-background border-t border-border"
    >
      <div class="px-4 py-6 space-y-2">
        <button
          v-for="item in navItems"
          :key="item"
          @click="handleNavigation(item)"
          class="block w-full text-left min-h-[44px] px-4 text-sm tracking-widest uppercase transition-colors duration-150 rounded"
          :class="isActive(item) ? 'text-foreground font-medium bg-muted' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'"
        >
          {{ item }}
        </button>
      </div>
    </div>
  </Transition>
</template>