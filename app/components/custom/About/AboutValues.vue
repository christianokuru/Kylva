<!-- Path: /app/components/custom/About/AboutValues.vue -->

<script setup>
const props = defineProps({
  darkMode: {
    type: Boolean,
    required: true
  }
})

const values = [
  { title: 'Quality', desc: 'Excellence in every detail' },
  { title: 'Partnership', desc: 'Collaborative process' },
  { title: 'Results', desc: 'Performance-driven design' }
]
</script>

<template>
  <section class="py-40 px-8">
    <div class="max-w-4xl mx-auto">
      <h2 
        :class="[
          'text-xs tracking-widest uppercase mb-20',
          darkMode ? 'text-white/50' : 'text-black/50'
        ]"
      >
        Our Approach
      </h2>
      
      <div class="grid md:grid-cols-3 gap-20">
        <div 
          v-for="value in values" 
          :key="value.title" 
          class="space-y-6"
        >
          <h3 class="text-xl font-light">{{ value.title }}</h3>
          <p 
            :class="[
              'text-sm leading-loose',
              darkMode ? 'text-white/50' : 'text-black/50'
            ]"
          >
            {{ value.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>