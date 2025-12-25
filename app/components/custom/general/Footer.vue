<!-- Path: /app/components/custom/general/Footer.vue -->

<script setup>
import Logo from '@/components/custom/general/Logo.vue'

const props = defineProps({
  darkMode: {
    type: Boolean,
    required: true
  }
})

const socialLinks = [
  { name: 'LinkedIn', url: '#' },
  { name: 'Twitter', url: '#' },
  { name: 'GitHub', url: '#' }
]

const currentYear = new Date().getFullYear()
</script>

<template>
  <footer 
    :class="[
      'border-t py-20 px-8',
      darkMode ? 'border-white/10' : 'border-black/10'
    ]"
  >
    <div class="max-w-6xl mx-auto">
      <div class="grid md:grid-cols-2 gap-16 mb-20">
        <!-- Logo -->
        <div>
          <Logo width="48" />
        </div>

        <!-- Social Links -->
        <div class="flex justify-start md:justify-end gap-12">
          <a
            v-for="social in socialLinks"
            :key="social.name"
            :href="social.url"
            target="_blank"
            rel="noopener noreferrer"
            :class="[
              'text-xs tracking-widest uppercase transition-colors',
              darkMode 
                ? 'text-white/40 hover:text-gold' 
                : 'text-black/40 hover:text-gold'
            ]"
          >
            {{ social.name }}
          </a>
        </div>
      </div>

      <!-- Copyright -->
      <div 
        :class="[
          'text-xs',
          darkMode ? 'text-white/30' : 'text-black/30'
        ]"
      >
        © {{ currentYear }} Kylva. All rights reserved.
      </div>
    </div>
  </footer>
</template>

<style scoped>
.text-gold {
  color: #D4AF37;
}
</style>