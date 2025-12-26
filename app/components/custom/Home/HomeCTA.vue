<!-- Path: /app/components/custom/Home/HomeCTA.vue -->
<!-- Minimalist CTA Component -->

<script setup>
import Button from '@/components/custom/general/Button.vue'

const router = useRouter()

const navigateToContact = () => {
  router.push('/contact')
}
</script>

<template>
  <section class="py-32 px-6">
    <div class="max-w-2xl mx-auto text-center space-y-12">
      <h2 class="text-3xl md:text-4xl font-light leading-relaxed text-foreground">
        Ready to elevate your
        <br />
        digital presence?
      </h2>

      <Button
        variant="primary"
        text="Get in Touch"
        @click="navigateToContact"
      />
    </div>
  </section>
</template>