<!-- Path: /app/components/custom/Home/Faq.vue -->
<script setup>
import { faqs } from "~/data/faqs";
</script>

<template>
  <section id="faq" class="py-32 px-6 lg:px-12 bg-black text-white">
    <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16">
      <div class="lg:col-span-4" data-aos="fade-up">
        <p
          class="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4 font-sans"
        >
          Questions
        </p>
        <h2
          class="text-6xl md:text-7xl tracking-tight mb-8 font-serif font-light leading-[1.1]"
        >
          Good to
          <span class="italic" style="font-weight: 400">Know</span>
        </h2>
        <p
          class="text-xs md:text-base text-gray-400 leading-relaxed font-sans font-light"
        >
          Answers to what brands ask us most. Anything else? Send us a message
          below.
        </p>
      </div>

      <!-- Native <details> keeps every answer in the page for search engines -->
      <div class="lg:col-span-8 border-t border-white/15" data-aos="fade-up">
        <details
          v-for="faq in faqs"
          :key="faq.question"
          class="group border-b border-white/15"
        >
          <summary
            class="flex items-center justify-between gap-6 py-7 cursor-pointer list-none [&::-webkit-details-marker]:hidden"
          >
            <h3
              class="text-2xl md:text-3xl tracking-tight font-serif font-normal group-hover:text-[#D4AF37] transition-colors"
            >
              {{ faq.question }}
            </h3>
            <span
              class="shrink-0 text-2xl text-[#D4AF37] font-sans font-light transition-transform duration-300 group-open:rotate-45"
              aria-hidden="true"
              >+</span
            >
          </summary>
          <p
            class="pb-8 pr-10 text-gray-400 text-sm md:text-base leading-relaxed font-sans font-light"
          >
            {{ faq.answer }}
          </p>
        </details>
      </div>
    </div>
  </section>
</template>
