<script setup>
import HeroScene from "./HeroScene.vue";

const { goToSection } = useSectionNav();
const { whatsappUrl, track } = useContact();
</script>

<template>
  <section
    id="hero"
    class="relative h-screen max-sm:h-auto max-sm:min-h-screen flex items-center justify-center overflow-hidden max-sm:overflow-visible bg-[#fafaf9] max-sm:pt-24 max-sm:pb-12"
  >
    <!-- 3D background (gold ring + glass). Loads only in the browser. -->
    <ClientOnly>
      <HeroScene />
    </ClientOnly>

    <div class="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
      <div class="mt-4">
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          class="text-[10px] md:text-xs uppercase tracking-[0.2em] md:tracking-[0.35em] text-[#8a6d12] mb-6 font-sans font-medium"
        >
          E-commerce studio for fashion &amp; beauty brands
        </p>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          class="text-5xl md:text-7xl lg:text-8xl mb-8 tracking-tight font-serif font-light leading-[1.05]"
        >
          Custom online stores that
          <br class="hidden md:block" />
          <span class="italic" style="font-weight: 400">sell your brand</span>
        </h1>
      </div>

      <p
        data-aos="fade-up"
        data-aos-delay="400"
        class="text-sm md:text-lg text-gray-700 mb-12 max-w-2xl mx-auto font-sans font-light leading-relaxed"
      >
        Fast, mobile-first stores built from scratch for fashion and beauty
        brands. No templates, no monthly platform fees, and the code is yours.
        Card, bank transfer and global payments included.
      </p>

      <div
        class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <a
          href="/#contact"
          @click.prevent="goToSection('contact')"
          class="w-full sm:w-auto px-10 py-5 bg-black text-white text-xs uppercase tracking-[0.3em] transition-all duration-200 hover:scale-105 active:scale-95 font-sans font-medium"
        >
          Get a free quote
        </a>

        <a
          v-if="whatsappUrl()"
          :href="whatsappUrl()"
          target="_blank"
          rel="noopener"
          @click="track('contact_whatsapp', { location: 'hero' })"
          class="w-full sm:w-auto px-10 py-5 border border-black text-xs uppercase tracking-[0.3em] text-black flex items-center justify-center gap-3 transition-colors duration-200 hover:bg-black hover:text-white font-sans font-medium"
        >
          Chat on WhatsApp
        </a>
        <a
          v-else
          href="/#work"
          @click.prevent="goToSection('work')"
          class="w-full sm:w-auto text-xs px-10 py-5 border border-black uppercase tracking-[0.3em] text-black flex items-center justify-center gap-3 group transition-colors duration-200 hover:bg-black hover:text-white font-sans font-medium"
        >
          See our work
          <span class="transform group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>

      <p
        data-aos="fade-up"
        data-aos-delay="700"
        class="mt-8 text-[11px] md:text-xs text-gray-600 font-sans tracking-wide"
      >
        Stores from $500 · Reply within 24 hours · 3 months of support included
      </p>
    </div>

    <!-- <div class="absolute top-72 left-1/2 transform -translate-x-1/2 animate-fade-in animate-delay-1200 opacity-0">
      <div class="flex flex-col items-center gap-2 animate-bounce">
        <span class="text-xs uppercase tracking-[0.3em] text-gray-400" style="font-family: 'Inter', sans-serif">
          Scroll Down
        </span>
        <div class="w-px h-16 bg-linear-to-b from-gray-400 to-transparent" />
      </div>
    </div> -->
  </section>
</template>
