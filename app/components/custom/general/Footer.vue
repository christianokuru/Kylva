<!-- Path: /app/components/custom/general/Footer.vue -->
<!-- Minimalist Footer Component -->

<script setup>
import Logo from '@/components/custom/general/Logo.vue'

const socialLinks = [
  { name: 'LinkedIn', url: '#' },
  { name: 'Twitter', url: '#' },
  { name: 'GitHub', url: '#' }
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer class="border-t border-border py-12 md:py-16 px-4 md:px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
        <!-- Logo -->
        <div>
          <Logo size="text-xl" />
        </div>

        <!-- Social Links -->
        <div class="flex justify-start md:justify-end gap-6 md:gap-8">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="min-h-[44px] inline-flex items-center px-2 text-xs sm:text-sm tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            {{ social.name }}
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-xs sm:text-sm text-muted-foreground">
        © {{ currentYear }} Kylva. All rights reserved.
      </div>
    </div>
  </footer>
</template>