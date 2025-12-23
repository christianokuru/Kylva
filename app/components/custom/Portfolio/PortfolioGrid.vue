<!-- Path: /app/components/custom/Portfolio/PortfolioGrid.vue -->

<script setup>
const props = defineProps({
  projects: {
    type: Array,
    required: true
  },
  darkMode: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['selectProject'])

const handleProjectClick = (project) => {
  emit('selectProject', project)
}
</script>

<template>
  <section class="py-40 px-8">
    <div class="max-w-5xl mx-auto space-y-32">
      <ProjectCard
        v-for="project in projects"
        :key="project.id"
        :project="project"
        :dark-mode="darkMode"
        @click="handleProjectClick"
      />
    </div>
  </section>
</template>