<script setup>
const { goToSection } = useSectionNav();
const { getAllProjects } = useProjects();
const shots = getAllProjects().slice(0, 4);

const promises = [
  { title: "No monthly platform fees", text: "No Shopify plan, no app subscriptions, no cut of your sales." },
  { title: "You own the code", text: "Host it anywhere and work with any developer you like." },
  { title: "Built for phones first", text: "Most fashion and beauty shoppers buy on their phone." },
];
</script>

<template>
  <section id="about" class="py-24 md:py-32 bg-neutral-50">
    <div class="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
      <div class="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div data-aos="fade-up">
          <p class="text-sm tracking-widest uppercase text-neutral-500 mb-4">
            About Kylva
          </p>
          <h2
            class="text-3xl md:text-5xl font-light tracking-tight text-neutral-900 mb-8 font-serif leading-[1.1]"
          >
            A small studio that builds stores your brand can grow into
          </h2>

          <div
            class="space-y-5 text-neutral-600 leading-relaxed text-sm md:text-base font-sans font-light"
          >
            <p>
              Fashion and beauty brands are judged on looks. A store built on a
              generic theme makes a great product feel ordinary, and the monthly
              fees and apps keep adding up.
            </p>
            <p>
              Kylva designs and builds online stores from scratch: fast on mobile
              data, easy for you to run, and shaped around how your customers
              actually shop. You get a store that looks like your brand, and you
              own every line of it.
            </p>
          </div>

          <ul class="mt-8 space-y-4">
            <li v-for="item in promises" :key="item.title" class="flex gap-3">
              <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" aria-hidden="true" />
              <p class="text-sm text-neutral-700 font-sans">
                <strong class="font-medium text-neutral-900">{{ item.title }}.</strong>
                {{ item.text }}
              </p>
            </li>
          </ul>

          <!-- Founder -->
          <div class="mt-10 flex items-center gap-4 border-t border-neutral-200 pt-8">
            <span
              class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-white font-serif text-xl"
              aria-hidden="true"
              >CO</span
            >
            <div class="font-sans">
              <p class="text-sm font-medium text-neutral-900">
                Christian Okuru, founder
              </p>
              <p class="text-xs text-neutral-500 leading-relaxed">
                Full-stack developer · Lagos, Nigeria (GMT+1). Working hours
                overlap the UK and Europe, and US mornings.
              </p>
            </div>
          </div>

          <a
            href="/#contact"
            @click.prevent="goToSection('contact')"
            class="inline-block mt-8 px-8 py-4 border border-neutral-900 text-neutral-900 text-xs tracking-[0.3em] uppercase hover:bg-neutral-900 hover:text-white transition-colors duration-300 font-sans font-medium"
          >
            Get a free quote
          </a>
        </div>

        <!-- Collage of our concept stores -->
        <div data-aos="fade-in" data-aos-delay="300">
          <div class="grid grid-cols-2 gap-3 md:gap-4">
            <NuxtLink
              v-for="(project, i) in shots"
              :key="project.slug"
              :to="`/projects/${project.slug}`"
              :class="[
                'group relative block overflow-hidden border border-neutral-200 bg-white',
                i % 2 === 1 ? 'translate-y-6' : '',
              ]"
            >
              <img
                :src="project.cover.src"
                :alt="project.cover.alt"
                :width="project.cover.width"
                :height="project.cover.height"
                loading="lazy"
                decoding="async"
                class="aspect-4/5 w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <span
                class="absolute bottom-0 inset-x-0 bg-linear-to-t from-black/70 to-transparent px-3 pb-2 pt-8 text-[11px] uppercase tracking-[0.2em] text-white font-sans"
              >
                {{ project.title }}
              </span>
            </NuxtLink>
          </div>
          <p class="mt-10 text-xs text-neutral-500 font-sans text-center">
            Concept stores designed and built by Kylva.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
