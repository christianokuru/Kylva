<!-- Path: /app/components/custom/Home/ProcessSection.vue -->
<!-- Minimalist Process Section Component -->

<script setup>
const steps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We learn about your business, goals, and audience to understand what success looks like.'
  },
  {
    num: '02',
    title: 'Design',
    desc: 'We create a visual direction that aligns with your brand and resonates with your target audience.'
  },
  {
    num: '03',
    title: 'Build',
    desc: 'We develop your site with clean code, optimal performance, and seamless user experience.'
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'We deploy your site, monitor performance, and provide ongoing support.'
  }
]
</script>

<template>
  <section class="py-32 px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Section Label -->
      <h2 class="text-xs tracking-widest uppercase mb-20 text-muted-foreground">
        Our Process
      </h2>

      <!-- Process Steps -->
      <div class="space-y-24">
        <div
          v-for="(step, index) in steps"
          :key="step.num"
          class="grid md:grid-cols-[auto_1fr] gap-8 md:gap-12"
        >
          <!-- Step Number -->
          <div class="text-xs text-muted-foreground/30 md:text-right">
            {{ step.num }}
          </div>

          <!-- Step Content -->
          <div class="space-y-4">
            <h3 class="text-2xl font-light text-foreground">
              {{ step.title }}
            </h3>
            <p class="text-base text-muted-foreground leading-relaxed">
              {{ step.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
