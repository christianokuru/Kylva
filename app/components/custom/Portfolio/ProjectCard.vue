<!-- Path: /app/components/custom/Portfolio/ProjectCard.vue -->
<!-- Minimalist Project Card Component -->

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click', props.project)
}
</script>

<template>
  <div
    class="group cursor-pointer border border-border rounded-lg p-4 transition-all duration-200 hover:shadow-sm"
    @click="handleClick"
  >
    <!-- Project Image -->
    <div class="aspect-video mb-4 overflow-hidden bg-muted">
      <NuxtImg
        :src="project.image"
        :alt="project.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        loading="lazy"
        format="webp"
      />
    </div>

    <!-- Project Info -->
    <div class="space-y-2">
      <h3 class="text-xl font-semibold text-foreground">{{ project.title }}</h3>
      <div class="flex items-center gap-4 text-sm text-muted-foreground">
        <span>{{ project.category }}</span>
        <span class="w-1 h-1 bg-muted-foreground/40 rounded-full"></span>
        <span>{{ project.year }}</span>
      </div>
    </div>
  </div>
</template>