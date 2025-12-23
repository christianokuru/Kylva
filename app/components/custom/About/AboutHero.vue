<!-- Path: /app/components/custom/About/AboutHero.vue -->

<script setup>
const props = defineProps({
  darkMode: {
    type: Boolean,
    required: true
  }
})
</script>

<template>
  <section class="min-h-screen flex items-center justify-center px-8 py-32">
    <div class="max-w-3xl space-y-20">
      <h1 class="text-3xl md:text-4xl font-light leading-relaxed">
        We build premium digital experiences for businesses that value quality and precision
      </h1>
      
      <div class="space-y-16 text-lg leading-loose">
        <p :class="darkMode ? 'text-white/60' : 'text-black/60'">
          Kylva is a digital agency focused on creating exceptional web experiences. We work with international clients who understand that great design is an investment, not an expense.
        </p>
        <p :class="darkMode ? 'text-white/60' : 'text-black/60'">
          Every project receives our full attention. We combine modern technology with timeless design principles to create websites that perform as beautifully as they look.
        </p>
      </div>
    </div>
  </section>
</template>