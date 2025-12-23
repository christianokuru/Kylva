<!-- Path: /app/components/custom/Services/ServicesList.vue -->

<script setup>
const props = defineProps({
  darkMode: {
    type: Boolean,
    required: true
  }
})

const services = [
  {
    num: '01',
    title: 'E-Commerce',
    desc: 'Custom online stores built for conversion',
    features: ['Payment integration', 'Inventory management', 'Analytics', 'Mobile-optimized']
  },
  {
    num: '02',
    title: 'Portfolio Sites',
    desc: 'Elegant showcases for your work',
    features: ['Visual storytelling', 'Project galleries', 'Responsive design', 'Fast performance']
  },
  {
    num: '03',
    title: 'Business Websites',
    desc: 'Professional platforms that drive growth',
    features: ['Lead generation', 'Content management', 'SEO optimized', 'Scalable infrastructure']
  }
]
</script>

<template>
  <section class="py-40 px-8">
    <div class="max-w-4xl mx-auto space-y-40">
      <div
        v-for="(service, index) in services"
        :key="service.num"
        :class="[
          'pb-32 border-b',
          index === services.length - 1 ? 'border-0' : '',
          darkMode ? 'border-white/10' : 'border-black/10'
        ]"
      >
        <ServiceCard :service="service" :dark-mode="darkMode" />
      </div>
    </div>
  </section>
</template>