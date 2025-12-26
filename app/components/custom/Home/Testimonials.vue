<!-- Path: /app/components/custom/Home/Testimonials.vue -->
<!-- Minimalist Testimonials Component -->

<script setup>
const testimonials = [
  {
    quote: 'Kylva transformed our online presence completely. The e-commerce platform they built increased our conversions by 150% in just three months.',
    author: 'Jennifer Walsh',
    company: 'Luxe Fashion NYC',
    location: 'New York, USA'
  },
  {
    quote: 'Professional, responsive, and incredibly talented. They delivered our portfolio site ahead of schedule with exceptional attention to detail.',
    author: 'David Mueller',
    company: 'Studio Architects',
    location: 'Berlin, Germany'
  },
  {
    quote: 'The best web development experience we\'ve had. They understood our vision perfectly and executed it flawlessly.',
    author: 'Amanda Foster',
    company: 'Greenleaf Consulting',
    location: 'London, UK'
  }
]
</script>

<template>
  <section class="py-32 px-6 bg-muted/30">
    <div class="max-w-4xl mx-auto">
      <!-- Section Label -->
      <h2 class="text-xs tracking-widest uppercase mb-20 text-muted-foreground">
        Client Testimonials
      </h2>

      <!-- Testimonials List -->
      <div class="space-y-24">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="index"
          class="space-y-6"
        >
          <!-- Quote -->
          <blockquote class="text-2xl md:text-3xl font-light leading-relaxed text-foreground">
            "{{ testimonial.quote }}"
          </blockquote>

          <!-- Author Info -->
          <div class="space-y-1">
            <div class="font-medium text-foreground">
              {{ testimonial.author }}
            </div>
            <div class="text-sm text-muted-foreground">
              {{ testimonial.company }} · {{ testimonial.location }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
