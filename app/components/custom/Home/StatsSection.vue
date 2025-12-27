<!-- Path: /app/components/custom/Home/StatsSection.vue -->
<!-- Stats/Benefits Grid Component -->

<script setup>
const stats = [
  { number: '400+', label: 'Happy Clients' },
  { number: '8 years', label: 'Experience' },
  { number: '300+', label: 'Successful Projects' },
  { number: '100%', label: 'Client Satisfaction' }
]
</script>

<template>
  <section class="py-32 px-6 relative overflow-hidden">
    <!-- Gradient blur background -->
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px]" />
    </div>

    <div class="max-w-5xl mx-auto relative">
      <h2 class="text-4xl md:text-6xl font-light tracking-tight text-center mb-20">
        Your ultimate<br>
        <span class="text-accent">website partner</span>
      </h2>

      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div
          v-for="(stat, i) in stats"
          :key="i"
          class="text-center group"
        >
          <div class="text-4xl md:text-5xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
            {{ stat.number }}
          </div>
          <div class="text-sm text-muted-foreground uppercase tracking-wider">
            {{ stat.label }}
          </div>
        </div>
      </div>

      <!-- Description below stats -->
      <p class="text-center text-muted-foreground mt-16 max-w-2xl mx-auto leading-relaxed">
        With years of web design experience, I'm passionate about great design and focus on the small details which have a huge impact. That is the type of web designer I am.
      </p>
    </div>
  </section>
</template>
