<!-- Path: /app/components/custom/Home/TeamSection.vue -->
<!-- Minimalist Team Section Component -->

<script setup>
const team = [
  {
    name: 'Christian Okoro',
    role: 'Founder & Lead Developer',
    image: '/images/team/christian.jpg'
  },
  {
    name: 'Sarah Mitchell',
    role: 'Design Director',
    image: '/images/team/sarah.jpg'
  },
  {
    name: 'Michael Chen',
    role: 'Backend Engineer',
    image: '/images/team/michael.jpg'
  }
]
</script>

<template>
  <section class="py-32 px-6">
    <div class="max-w-4xl mx-auto">
      <!-- Section Label -->
      <h2 class="text-xs tracking-widest uppercase mb-20 text-muted-foreground">
        Our Team
      </h2>

      <!-- Team Grid -->
      <div class="grid md:grid-cols-3 gap-16">
        <div
          v-for="member in team"
          :key="member.name"
          class="space-y-6 text-center"
        >
          <!-- Photo with grayscale filter -->
          <div class="aspect-square bg-muted overflow-hidden">
            <NuxtImg
              :src="member.image"
              :alt="member.name"
              class="w-full h-full object-cover grayscale"
              loading="lazy"
              format="webp"
            />
          </div>

          <!-- Name -->
          <h3 class="text-xl font-light text-foreground">
            {{ member.name }}
          </h3>

          <!-- Role -->
          <p class="text-sm text-muted-foreground">
            {{ member.role }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
