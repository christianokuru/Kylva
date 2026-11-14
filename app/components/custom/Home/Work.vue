<script setup>
// const { targetRef, isInView } = useInView({ threshold: 0.1 });
const { getFeaturedProjects } = useProjects();

const projects = getFeaturedProjects();
</script>

<template>
  <section
    id="work"
    class="py-32 px-6 lg:px-12 bg-black text-white"
  >
    <div class="max-w-7xl mx-auto">
      <div :class="['mb-24']" data-aos="fade-up">
        <p
          class="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4 font-sans"
        >
          Selected Work
        </p>
        <h2
          class="text-6xl md:text-7xl lg:text-8xl tracking-tight mb-8 font-serif font-light leading-[1.1]"
        >
          Creating Digital
          <span class="italic" style="font-weight: 400">Legacies</span>
        </h2>
        <p
          class="text-xs md:text-xl text-gray-400 leading-relaxed max-w-3xl font-sans font-light"
        >
          Each project is a partnership in excellence. These stores are more
          than beautiful websites: they are digital expressions of brands that
          expect nothing less than perfection.
        </p>
      </div>

      <ul class="space-y-32">
        <li
          v-for="(project, index) in projects"
          :key="project.slug"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <NuxtLink :to="`/projects/${project.slug}`" class="group block">
            <div
              class="relative aspect-16/10 overflow-hidden mb-8 border border-white/10 bg-gray-900"
            >
              <img
                :src="project.cover.src"
                :alt="project.cover.alt"
                :width="project.cover.width"
                :height="project.cover.height"
                loading="lazy"
                decoding="async"
                class="w-full h-full object-cover object-top transition-transform duration-600 group-hover:scale-105"
              />

              <div
                class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"
              />
            </div>

            <div class="grid md:grid-cols-12 gap-6">
              <div class="md:col-span-8">
                <h3
                  class="text-4xl md:text-5xl lg:text-6xl mb-4 tracking-tight group-hover:text-[#D4AF37] transition-colors duration-300 font-serif font-normal"
                >
                  {{ project.title }}
                </h3>
                <p
                  class="text-gray-400 leading-relaxed font-sans font-light text-xs md:text-base"
                >
                  {{ project.summary }}
                </p>
              </div>

              <div
                class="md:col-span-4 flex md:flex-col items-start md:items-end justify-between md:justify-start gap-4"
              >
                <span
                  class="text-sm uppercase tracking-[0.2em] text-gray-500 font-sans font-normal"
                >
                  {{ project.category }}
                </span>
                <span
                  class="text-xs uppercase tracking-[0.3em] text-white font-sans inline-flex items-center gap-2"
                >
                  View case study
                  <span
                    aria-hidden="true"
                    class="transition-transform group-hover:translate-x-1"
                    >→</span
                  >
                </span>
              </div>
            </div>
          </NuxtLink>
        </li>
      </ul>

      <div class="mt-32 text-center" data-aos="fade-up">
        <NuxtLink
          to="/projects"
          class="inline-block px-12 py-5 border border-white text-white text-sm uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300 hover:scale-105 active:scale-95 font-sans font-medium"
        >
          View All Projects
        </NuxtLink>
      </div>
    </div>
  </section>
</template>
