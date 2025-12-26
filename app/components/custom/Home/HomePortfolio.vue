<!-- Path: /app/components/custom/Home/HomePortfolio.vue -->
<!-- Minimalist Home Portfolio Component -->

<script setup>
const router = useRouter()

const projects = [
  { title: 'Luxury Fashion', category: 'E-Commerce', year: '2024', image: '/images/portfolio/luxury-fashion.jpg' },
  { title: 'Design Studio', category: 'Portfolio', year: '2024', image: '/images/portfolio/designer-portfolio.jpg' },
  { title: 'Consulting Firm', category: 'Business', year: '2024', image: '/images/portfolio/consulting-firm.jpg' }
]

const navigateToPortfolio = () => {
  router.push('/portfolio')
}
</script>

<template>
  <section class="py-32 px-6">
    <div class="max-w-5xl mx-auto">
      <h2 class="text-xs tracking-widest uppercase mb-20 text-muted-foreground">
        Selected Work
      </h2>

      <div class="space-y-32">
        <div
          v-for="(project, i) in projects"
          :key="i"
          class="group cursor-pointer"
          @click="navigateToPortfolio"
        >
          <div class="aspect-video mb-8 overflow-hidden group-hover:opacity-70 transition-opacity bg-muted">
            <NuxtImg
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover"
              loading="lazy"
              format="webp"
            />
          </div>

          <div class="flex justify-between items-baseline">
            <h3 class="text-2xl font-light text-foreground">{{ project.title }}</h3>
            <div class="flex gap-8 text-xs">
              <span class="text-muted-foreground">
                {{ project.category }}
              </span>
              <span class="text-muted-foreground">
                {{ project.year }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
