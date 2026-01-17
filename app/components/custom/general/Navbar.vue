<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import Logo from "@/components/custom/general/Logo.vue";
import MobileMenu from "@/components/custom/general/MobileMenu.vue";

const scrolled = ref(false);

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

onMounted(() => {
  const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
  };

  window.addEventListener("scroll", handleScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
  });
});
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-fade-in-down',
      scrolled
        ? 'bg-white/95 backdrop-blur-sm shadow-sm'
        : 'bg-black/20 backdrop-blur-sm',
    ]"
  >
    <div
      class="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between"
    >
      <button
        @click="scrollToSection('hero')"
        class="flex items-center transition-transform duration-200 hover:scale-105"
      >
        <Logo :variant="scrolled ? 'black' : 'white'" />
      </button>

      <MobileMenu :scrolled="scrolled" />

      <div class="hidden md:flex items-center gap-12">
        <button
          v-for="item in [
            'services',
            'about',
            'work',
            'testimonials',
            'contact',
          ]"
          :key="item"
          @click="scrollToSection(item)"
          :class="[
            'text-xs uppercase tracking-[0.2em] transition-all duration-200 hover:-translate-y-0.5',
            scrolled
              ? 'text-gray-800 hover:text-gray-600'
              : 'text-white hover:text-gray-300',
          ]"
          style="font-family: &quot;Inter&quot;, sans-serif; font-weight: 400"
        >
          {{ item }}
        </button>
      </div>

      <button
        @click="scrollToSection('contact')"
        :class="[
          'hidden lg:block px-8 py-3 text-xs uppercase tracking-[0.2em] transition-all duration-200 hover:scale-105 active:scale-95',
          scrolled
            ? 'bg-black text-white hover:bg-gray-900'
            : 'bg-white text-black hover:bg-gray-100',
        ]"
        style="font-family: &quot;Inter&quot;, sans-serif; font-weight: 500"
      >
        Start Project
      </button>
    </div>
  </nav>
</template>
