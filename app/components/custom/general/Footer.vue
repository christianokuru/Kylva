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
  <footer class="border-t border-border py-16 px-6">
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-12 mb-12">
        <!-- Logo -->
        <div>
          <Logo />
        </div>

        <!-- Social Links -->
        <div class="flex justify-start md:justify-end gap-8">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-150"
          >
            {{ social.name }}
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="text-xs text-muted-foreground">
        © {{ currentYear }} Kylva. All rights reserved.
      </div>
    </div>
  </footer>
</template>