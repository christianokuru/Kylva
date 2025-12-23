<!-- Path: /app/components/custom/Home/HomeServices.vue -->

<script setup>
import Button from '@/components/custom/general/Button.vue'

const props = defineProps({
  darkMode: {
    type: Boolean,
    required: true
  }
})

const router = useRouter()

const services = [
  { title: 'E-Commerce', num: '01' },
  { title: 'Portfolio', num: '02' },
  { title: 'Business', num: '03' }
]

const navigateToServices = () => {
  router.push('/services')
}
</script>

<template>
  <section class="py-40 px-8">
    <div class="max-w-4xl mx-auto">
      <div class="grid md:grid-cols-3 gap-20">
        <div 
          v-for="service in services" 
          :key="service.num" 
          class="space-y-6"
        >
          <div 
            :class="[
              'text-xs',
              darkMode ? 'text-white/30' : 'text-black/30'
            ]"
          >
            {{ service.num }}
          </div>
          
          <h3 class="text-xl font-light">{{ service.title }}</h3>
          
          <Button 
            variant="text"
            :dark-mode="darkMode"
            text="Learn More →"
            @click="navigateToServices"
          />
        </div>
      </div>
    </div>
  </section>
</template>