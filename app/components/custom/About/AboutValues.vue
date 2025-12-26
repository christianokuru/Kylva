<!-- Path: /app/components/custom/About/AboutValues.vue -->
<!-- Minimalist About Values Component -->

<script setup>
const values = [
  { title: 'Quality', desc: 'Excellence in every detail' },
  { title: 'Partnership', desc: 'Collaborative process' },
  { title: 'Results', desc: 'Performance-driven design' }
]
</script>

<template>
  <section class="py-32 px-6">
    <div class="max-w-4xl mx-auto">
      <h2 class="text-xs tracking-widest uppercase mb-20 text-muted-foreground">
        Our Approach
      </h2>

      <div class="grid md:grid-cols-3 gap-20">
        <div
          v-for="value in values"
          :key="value.title"
          class="space-y-6"
        >
          <h3 class="text-xl font-light text-foreground">{{ value.title }}</h3>
          <p class="text-sm leading-loose text-muted-foreground">
            {{ value.desc }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
