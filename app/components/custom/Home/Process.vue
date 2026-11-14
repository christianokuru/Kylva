<!-- Path: /app/components/custom/Home/Process.vue -->
<script setup>
const { goToSection } = useSectionNav();

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your brand, your products and your customers, then agree on the features, budget and timeline together.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We design the look and feel of your store, page by page, and refine it with you until it feels unmistakably yours.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We build your store from scratch, connect your payments, and test every page on phones, tablets and desktops.",
  },
  {
    number: "04",
    title: "Launch & Handover",
    description:
      "Your store goes live and we hand over the full codebase. It belongs to you, to keep, change or host wherever you like.",
  },
];

const stack = [
  { name: "Next.js", role: "Website" },
  { name: "Supabase", role: "Database & accounts" },
  { name: "Redis", role: "Caching & speed" },
  { name: "Stripe", role: "Global payments" },
  { name: "Flutterwave", role: "Payments in Africa" },
  { name: "Paystack", role: "Payments in Africa" },
];
</script>

<template>
  <section id="process" class="py-32 px-6 lg:px-12 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Heading -->
      <div class="mb-24" data-aos="fade-up">
        <p
          class="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4 font-sans"
        >
          How We Work
        </p>
        <h2
          class="text-6xl md:text-7xl lg:text-8xl tracking-tight mb-8 font-serif font-light leading-[1.1]"
        >
          From First Call to
          <span class="italic" style="font-weight: 400">Launch</span>
        </h2>
        <p
          class="text-xs md:text-xl text-gray-600 leading-relaxed max-w-3xl font-sans font-light"
        >
          Every store is custom-built, never a template. We work with brands
          anywhere in the world, and you always know what happens next.
        </p>
      </div>

      <!-- Steps -->
      <ol class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-32">
        <li
          v-for="(step, index) in steps"
          :key="step.number"
          class="border-t border-gray-200 pt-8"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <span
            class="block text-5xl text-gray-300 mb-6 font-serif font-light"
            aria-hidden="true"
          >
            {{ step.number }}
          </span>
          <h3 class="text-3xl mb-4 tracking-tight font-serif font-normal">
            {{ step.title }}
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed font-sans font-light">
            {{ step.description }}
          </p>
        </li>
      </ol>

      <!-- Tech stack -->
      <div class="mb-32" data-aos="fade-up">
        <h3
          class="text-xs uppercase tracking-[0.3em] text-gray-500 mb-10 font-sans font-medium"
        >
          Built with
        </h3>
        <ul
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-gray-200"
        >
          <li
            v-for="tool in stack"
            :key="tool.name"
            class="border-r border-b border-gray-200 px-6 py-8"
          >
            <span
              class="block text-2xl md:text-3xl tracking-tight mb-2 font-serif font-normal"
            >
              {{ tool.name }}
            </span>
            <span
              class="block text-[11px] uppercase tracking-[0.2em] text-gray-500 font-sans"
            >
              {{ tool.role }}
            </span>
          </li>
        </ul>
      </div>

      <!-- Pricing -->
      <div
        class="bg-black text-white px-8 py-16 md:px-16 grid md:grid-cols-12 gap-10 items-center"
        data-aos="fade-up"
      >
        <div class="md:col-span-8">
          <p
            class="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4 font-sans"
          >
            Investment
          </p>
          <p
            class="text-4xl md:text-6xl tracking-tight mb-6 font-serif font-light leading-[1.1]"
          >
            Custom stores from
            <span class="italic" style="font-weight: 400">$500</span>
          </p>
          <p
            class="text-gray-400 text-sm md:text-base leading-relaxed max-w-xl font-sans font-light"
          >
            The final price depends on the size of your store and the features
            you need. You own the full codebase when we launch.
          </p>
        </div>
        <div class="md:col-span-4 md:text-right">
          <a
            href="/#contact"
            @click.prevent="goToSection('contact')"
            class="inline-block px-12 py-5 bg-white text-black text-xs uppercase tracking-[0.3em] hover:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95 font-sans font-medium"
          >
            Get a Quote
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
