<!-- Path: /app/components/custom/Home/HomeHero.vue -->
<!-- Minimalist Home Hero Component -->

<script setup>
import Button from '@/components/custom/general/Button.vue'

const router = useRouter()

const navigateToContact = () => {
  router.push('/contact')
}
</script>

<template>
  <section class="flex max-sm:pt-28 items-center justify-center px-8 py-32 max-sm:py-0">
    <div class="max-w-2xl text-center space-y-12">
      <h1 class="text-4xl max-sm:text-5xl md:text-[98px] font-light tracking-tight leading-[110%]">
        Building digital foundations
        <br />
        for <span class="text-accent">international businesses</span>
      </h1>

      <Button
        variant="primary"
        text="Start a Project"
        @click="navigateToContact"
      />
    </div>
  </section>
</template>