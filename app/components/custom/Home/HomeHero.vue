<!-- Path: /app/components/custom/Home/HomeHero.vue -->

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
  <section class="min-h-screen flex items-center justify-center px-8 py-32">
    <div class="max-w-2xl text-center space-y-12">
      <h1 class="text-4xl md:text-[98px] font-light tracking-tight leading-[110%]">
        Building digital foundations
        <br />
        for <span class="text-gold">international businesses</span>
      </h1>
      
      <Button 
        variant="primary"
        :dark-mode="darkMode"
        text="Start a Project"
        @click="navigateToContact"
        class="bg-[#212121] text-white hover:bg-[#212121]/70 font-semibold"
      />
    </div>
  </section>
</template>

<style scoped>
.text-gold {
  color: #D4AF37;
}
</style>