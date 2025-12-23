<!-- Path: /app/components/custom/Services/ServiceCard.vue -->

<script setup>
const props = defineProps({
  service: {
    type: Object,
    required: true
  },
  darkMode: {
    type: Boolean,
    required: true
  }
})

const router = useRouter()

const navigateToContact = () => {
  router.push('/contact')
}
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-6">
      <div 
        :class="[
          'text-xs',
          darkMode ? 'text-white/30' : 'text-black/30'
        ]"
      >
        {{ service.num }}
      </div>
      
      <h2 class="text-3xl font-light">{{ service.title }}</h2>
      
      <p 
        :class="[
          'text-lg',
          darkMode ? 'text-white/50' : 'text-black/50'
        ]"
      >
        {{ service.desc }}
      </p>
    </div>
    
    <div class="grid grid-cols-2 gap-6">
      <div 
        v-for="(feature, i) in service.features" 
        :key="i" 
        :class="[
          'text-sm',
          darkMode ? 'text-white/40' : 'text-black/40'
        ]"
      >
        — {{ feature }}
      </div>
    </div>
  </div>
</template>