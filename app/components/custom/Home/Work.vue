<script setup>
const { targetRef, isInView } = useInView({ threshold: 0.1 })

const projects = [
  {
    title: "Maison Noir",
    category: "Fashion E-Commerce",
    image: "https://images.unsplash.com/photo-1611747581894-45e5f11c7be6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxibGFjayUyMHdoaXRlJTIwZmFzaGlvbnxlbnwxfHx8fDE3Njc2MjA0NTF8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Contemporary fashion redefined through the purity of minimalist design. A digital experience where every garment becomes a protagonist, every collection tells a story, and simplicity speaks volumes.",
  },
  {
    title: "Lumière Beauty",
    category: "Beauty Platform",
    image: "https://images.unsplash.com/photo-1739980296455-3f8d6051ca20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwYmVhdXR5JTIwY29zbWV0aWNzfGVufDF8fHx8MTc2NzczNDA1N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "A luxury cosmetics house brought to life through an immersive platform where beauty discovery becomes a personal journey. Technology and intuition merge to guide each customer to their perfect shade, their signature look.",
  },
  {
    title: "Essence",
    category: "Fragrance Experience",
    image: "https://images.unsplash.com/photo-1762751629196-1d9a874cdf92?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwcGVyZnVtZSUyMGJvdHRsZXxlbnwxfHx8fDE3Njc2NDE3MjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "Artisanal perfumery elevated through digital storytelling. Where fragrance notes become narratives, and choosing a scent becomes an exploration of identity and desire.",
  },
]
</script>

<template>
  <section id="work" ref="targetRef" class="py-32 px-6 lg:px-12 bg-black text-white">
    <div class="max-w-7xl mx-auto">
      <div :class="['mb-24 scroll-reveal', { 'revealed': isInView }]">
        <p class="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4" style="font-family: 'Inter', sans-serif">
          Selected Work
        </p>
        <h2
          class="text-6xl md:text-7xl lg:text-8xl tracking-tight mb-8"
          style="font-family: 'Cormorant Garamond', serif; font-weight: 300; line-height: 1.1"
        >
          Creating Digital <span class="italic" style="font-weight: 400">Legacies</span>
        </h2>
        <p
          class="text-lg md:text-base text-gray-400 leading-relaxed max-w-3xl"
          style="font-family: 'Inter', sans-serif; font-weight: 300"
        >
          Each collaboration is a partnership in excellence. These projects represent more than beautiful websites—they are digital expressions of brands who demand nothing less than perfection.
        </p>
      </div>

      <div class="space-y-32">
        <div
          v-for="(project, index) in projects"
          :key="project.title"
          :class="['group cursor-pointer scroll-reveal', { 'revealed': isInView }]"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden mb-8">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-600 group-hover:scale-105"
            />

            <div class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />
          </div>

          <div class="grid md:grid-cols-12 gap-6">
            <div class="md:col-span-8">
              <h3
                class="text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300"
                style="font-family: 'Cormorant Garamond', serif; font-weight: 400"
              >
                {{ project.title }}
              </h3>
              <p
                class="text-gray-400 text-base leading-relaxed"
                style="font-family: 'Inter', sans-serif; font-weight: 300"
              >
                {{ project.description }}
              </p>
            </div>

            <div class="md:col-span-4 flex items-start justify-end">
              <span
                class="text-sm uppercase tracking-[0.2em] text-gray-500"
                style="font-family: 'Inter', sans-serif; font-weight: 400"
              >
                {{ project.category }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div :class="['mt-32 text-center scroll-reveal', { 'revealed': isInView }]" style="animation-delay: 0.8s">
        <button
          class="px-12 py-5 border border-white text-white text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 active:scale-95"
          style="font-family: 'Inter', sans-serif; font-weight: 500"
        >
          View Case Studies
        </button>
      </div>
    </div>
  </section>
</template>