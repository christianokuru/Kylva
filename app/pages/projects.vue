<script setup>
const { getAllProjects } = useProjects();
const projects = getAllProjects();

useSeoMeta({
  title: "Projects - Kylva",
  description: "A selection of our finest e-commerce work.",
});
</script>

<template>
  <div class="bg-black text-white min-h-screen pt-32 pb-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Header -->
      <div class="mb-24 text-center" data-aos="fade-up">
        <p
          class="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4 font-sans"
        >
          Our Portfolio
        </p>
        <h1
          class="text-6xl md:text-7xl lg:text-8xl tracking-tight mb-8 font-serif font-light leading-[1.1]"
        >
          Selected <span class="italic" style="font-weight: 400">Works</span>
        </h1>
        <p
          class="text-xs md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-sans font-light"
        >
          A curated collection of digital experiences that define luxury
          e-commerce.
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        <div
          v-for="(project, index) in projects"
          :key="project.id"
          class="group cursor-pointer"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <div class="relative aspect-3/4 overflow-hidden mb-8 bg-gray-900">
            <img
              :src="project.image"
              :alt="project.title"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"
            />
          </div>

          <div>
            <div class="flex items-center justify-between mb-3">
              <span
                class="text-xs uppercase tracking-[0.2em] text-[#D4AF37] font-sans"
              >
                {{ project.category }}
              </span>
            </div>
            <h3
              class="text-3xl md:text-4xl mb-4 tracking-tight group-hover:text-gray-300 transition-colors duration-300 font-serif font-normal"
            >
              {{ project.title }}
            </h3>
            <p
              class="text-gray-400 text-sm leading-relaxed line-clamp-3 font-sans font-light"
            >
              {{ project.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div
        class="mt-32 text-center border-t border-white/10 pt-24"
        data-aos="fade-up"
      >
        <h2 class="text-3xl md:text-4xl mb-8 font-serif">
          Ready to create your legacy?
        </h2>
        <NuxtLink
          to="/#contact"
          class="inline-block px-12 py-5 bg-white text-black text-xs uppercase tracking-[0.3em] hover:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95 font-sans font-medium"
        >
          Start a Project
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
