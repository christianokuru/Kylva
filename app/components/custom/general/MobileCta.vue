<script setup>
// Always-visible quote button on phones, once the visitor scrolls past the hero.
// Hides itself when the contact form is on screen and on the thank-you page.
const route = useRoute();
const { goToSection } = useSectionNav();
const { whatsappUrl, track } = useContact();

const scrolled = ref(false);
const contactVisible = ref(false);
let observer;

const onScroll = () => {
  scrolled.value = window.scrollY > 500;
};

const watchContact = () => {
  observer?.disconnect();
  const el = document.getElementById("contact");
  contactVisible.value = false;
  if (!el) return;
  observer = new IntersectionObserver(([entry]) => {
    contactVisible.value = entry.isIntersecting;
  });
  observer.observe(el);
};

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  watchContact();
});
watch(() => route.path, () => nextTick(watchContact));
onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  observer?.disconnect();
});

const show = computed(
  () => scrolled.value && !contactVisible.value && route.path !== "/thank-you",
);
</script>

<template>
  <Transition
    enter-active-class="transition duration-300"
    enter-from-class="translate-y-full opacity-0"
    leave-active-class="transition duration-200"
    leave-to-class="translate-y-full opacity-0"
  >
    <div
      v-if="show"
      class="md:hidden fixed inset-x-0 bottom-0 z-40 flex gap-2 border-t border-gray-200 bg-white/95 backdrop-blur-sm px-4 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <a
        href="/#contact"
        @click.prevent="track('mobile_cta', { action: 'quote' }); goToSection('contact')"
        class="flex-1 bg-black py-3.5 text-center text-[11px] uppercase tracking-[0.25em] text-white font-sans font-medium"
      >
        Get a free quote
      </a>
      <a
        v-if="whatsappUrl()"
        :href="whatsappUrl()"
        target="_blank"
        rel="noopener"
        @click="track('contact_whatsapp', { location: 'mobile_bar' })"
        class="bg-[#1f7a4d] px-5 py-3.5 text-center text-[11px] uppercase tracking-[0.2em] text-white font-sans font-medium"
      >
        WhatsApp
      </a>
    </div>
  </Transition>
</template>
