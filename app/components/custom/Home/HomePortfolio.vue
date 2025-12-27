<!-- Path: /app/components/custom/Home/HomePortfolio.vue -->
<!-- Minimalist Home Portfolio Component with 3D Hover Effect -->

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

// 3D hover effect state
const cardRefs = ref([])
const cardStyles = ref([])

const handleMouseMove = (e, index) => {
  const card = cardRefs.value[index]
  if (!card) return

  const bounds = card.getBoundingClientRect()
  const mouseX = e.clientX - bounds.x
  const mouseY = e.clientY - bounds.y
  const centerX = bounds.width / 2
  const centerY = bounds.height / 2

  const rotateX = (mouseY - centerY) / 60
  const rotateY = (centerX - mouseX) / 60

  cardStyles.value[index] = {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
  }
}

const handleMouseLeave = (index) => {
  cardStyles.value[index] = {
    transform: 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)'
  }
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
          ref="cardRefs"
          class="group cursor-pointer transition-all duration-300 ease-out"
          :style="cardStyles[i] || {}"
          @click="navigateToPortfolio"
          @mousemove="(e) => handleMouseMove(e, i)"
          @mouseleave="() => handleMouseLeave(i)"
        >
          <div class="aspect-video mb-8 overflow-hidden bg-muted shadow-lg rounded-lg">
            <NuxtImg
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
