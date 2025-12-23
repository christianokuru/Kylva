<!-- Path: /app/components/custom/Portfolio/ProjectCard.vue -->

<script setup>
const props = defineProps({
  project: {
    type: Object,
    required: true
  },
  darkMode: {
    type: Boolean,
    required: true
  }
})

const emit = defineEmits(['click'])

const handleClick = () => {
  emit('click', props.project)
}
</script>

<template>
  <div class="group cursor-pointer" @click="handleClick">
    <div 
      :class="[
        'aspect-video mb-8 group-hover:opacity-70 transition-opacity',
        darkMode ? 'bg-white/5' : 'bg-black/5'
      ]"
    ></div>
    
    <div class="flex justify-between items-baseline">
      <h3 class="text-2xl font-light">{{ project.title }}</h3>
      <div class="flex gap-8 text-xs">
        <span :class="darkMode ? 'text-white/40' : 'text-black/40'">
          {{ project.category }}
        </span>
        <span :class="darkMode ? 'text-white/40' : 'text-black/40'">
          {{ project.year }}
        </span>
      </div>
    </div>
  </div>
</template>