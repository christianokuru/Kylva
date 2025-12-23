<!-- Path: /app/components/custom/Home/HomePortfolio.vue -->

<script setup>
const props = defineProps({
  darkMode: {
    type: Boolean,
    required: true
  }
})

const router = useRouter()

const projects = [
  { title: 'Luxury Fashion', category: 'E-Commerce', year: '2024' },
  { title: 'Design Studio', category: 'Portfolio', year: '2024' },
  { title: 'Consulting Firm', category: 'Business', year: '2024' }
]

const navigateToPortfolio = () => {
  router.push('/portfolio')
}
</script>

<template>
  <section class="py-40 px-8">
    <div class="max-w-5xl mx-auto">
      <h2 
        :class="[
          'text-xs tracking-widest uppercase mb-20',
          darkMode ? 'text-white/50' : 'text-black/50'
        ]"
      >
        Selected Work
      </h2>
      
      <div class="space-y-32">
        <div 
          v-for="(project, i) in projects" 
          :key="i" 
          class="group cursor-pointer"
          @click="navigateToPortfolio"
        >
          <div 
            :class="[
              'aspect-video mb-8 group-hover:opacity-70 transition-opacity',
              darkMode ? 'bg-white/5' : 'bg-black/5'
            ]"
          ></div>
          
          <div class="flex justify-between items-baseline">
            <h3 class="text-2xl font-light">{{ project.title }}</h3>
            <div class="flex gap-8 text-xs">
              <span 
                :class="darkMode ? 'text-white/40' : 'text-black/40'"
              >
                {{ project.category }}
              </span>
              <span 
                :class="darkMode ? 'text-white/40' : 'text-black/40'"
              >
                {{ project.year }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>