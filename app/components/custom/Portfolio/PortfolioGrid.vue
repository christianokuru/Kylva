<!-- Path: /app/components/custom/Portfolio/PortfolioGrid.vue -->
<!-- Minimalist Portfolio Grid Component -->

<script setup>
import ProjectCard from './ProjectCard.vue'

const props = defineProps({
  projects: {
    type: Array,
    required: true
  }
})

const emit = defineEmits(['selectProject'])

const handleProjectClick = (project) => {
  emit('selectProject', project)
}
</script>

<template>
  <section class="py-32 px-6">
    <div class="max-w-5xl mx-auto space-y-24">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        @click="handleProjectClick"
      />
    </div>
  </section>
</template>