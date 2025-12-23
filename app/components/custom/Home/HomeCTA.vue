<!-- Path: /app/components/custom/Home/HomeCTA.vue -->

<script setup>
import Button from '@/components/custom/general/Button.vue'

const props = defineProps({
  darkMode: {
    type: Boolean,
    required: true
  }
})

const router = useRouter()

const navigateToContact = () => {
  router.push('/contact')
}
</script>

<template>
  <section class="py-40 px-8">
    <div class="max-w-2xl mx-auto text-center space-y-12">
      <h2 class="text-3xl md:text-4xl font-light leading-relaxed">
        Ready to elevate your
        <br />
        digital presence?
      </h2>
      
      <Button 
        variant="primary"
        :dark-mode="darkMode"
        text="Get in Touch"
        @click="navigateToContact"
      />
    </div>
  </section>
</template>