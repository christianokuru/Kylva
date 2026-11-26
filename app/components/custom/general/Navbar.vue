<script setup>
import { ref, computed, onMounted, onUnmounted } from "vue";
import Logo from "@/components/custom/general/Logo.vue";
import MobileMenu from "@/components/custom/general/MobileMenu.vue";

const scrolled = ref(false);
const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  if (isMobileMenuOpen.value) {
    history.back();
  } else {
    isMobileMenuOpen.value = true;
    history.pushState({ menu: "open" }, "");
  }
};

const handlePopState = (event) => {
  isMobileMenuOpen.value = !!(event.state && event.state.menu === "open");
};

const { goToSection } = useSectionNav();
const route = useRoute();
// The home hero is light, so use dark text there until the page scrolls.
// Light pages opt in with definePageMeta({ lightNav: true }).
const dark = computed(
  () => scrolled.value || route.path === "/" || !!route.meta.lightNav,
);

onMounted(() => {
  window.addEventListener("popstate", handlePopState);

  const handleScroll = () => {
    scrolled.value = window.scrollY > 50;
  };

  window.addEventListener("scroll", handleScroll);

  onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
    window.removeEventListener("popstate", handlePopState);
  });
});
</script>

<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,shadow] duration-500',
      isMobileMenuOpen
        ? 'bg-transparent'
        : scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-sm'
          : dark
            ? 'bg-[#fafaf9]/80 backdrop-blur-sm'
            : 'bg-black/40 backdrop-blur-sm',
    ]"
  >
    <div
      class="max-w-7xl mx-auto px-6 lg:px-12 py-6 flex items-center justify-between"
    >
      <NuxtLink
        to="/"
        class="flex items-center transition-transform duration-200 hover:scale-105"
      >
        <Logo :variant="dark || isMobileMenuOpen ? 'black' : 'white'" />
      </NuxtLink>

      <MobileMenu
        :scrolled="dark"
        :is-open="isMobileMenuOpen"
        @toggle="toggleMobileMenu"
      />

      <div class="hidden md:flex items-center gap-8 lg:gap-12">
        <a
          v-for="item in [
            'services',
            'about',
            'work',
            'process',
            'faq',
            'contact',
          ]"
          :key="item"
          :href="`/#${item}`"
          @click.prevent="goToSection(item)"
          :class="[
            'py-3 text-xs uppercase tracking-[0.2em] transition-all duration-200 hover:-translate-y-0.5',
            dark
              ? 'text-gray-900 hover:text-gray-600'
              : 'text-white hover:text-gray-300',
          ]"
          style="font-family: &quot;Inter&quot;, sans-serif; font-weight: 400"
        >
          {{ item }}
        </a>
      </div>

      <a
        href="/#contact"
        @click.prevent="goToSection('contact')"
        :class="[
          'hidden lg:block px-8 py-3 text-xs uppercase tracking-[0.2em] transition-all duration-200 hover:scale-105 active:scale-95',
          dark
            ? 'bg-black text-white hover:bg-gray-900'
            : 'bg-white text-black hover:bg-gray-100',
        ]"
        style="font-family: &quot;Inter&quot;, sans-serif; font-weight: 500"
      >
        Get a free quote
      </a>
    </div>
  </nav>
</template>
