<!-- Path: /app/components/custom/Portfolio/ProjectModal.vue -->
<!-- Minimalist Project Modal Component -->

<script setup>
const props = defineProps({
  project: {
    type: Object,
    default: null
  }
})

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}

const handleBackdropClick = () => {
  emit('close')
}

const handleContentClick = (e) => {
  e.stopPropagation()
}
</script>

<template>
  <Transition
    enter-active-class="transition-opacity duration-300"
    enter-from-class="opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="transition-opacity duration-300"
    leave-from-class="opacity-100"
    leave-to-class="opacity-0"
  >
    <div
      v-if="project"
      class="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-6"
      @click="handleBackdropClick"
    >
      <div
        class="max-w-4xl w-full p-12 space-y-12 bg-card shadow-lg"
        @click="handleContentClick"
      >
        <button
          @click="handleClose"
          class="text-xs tracking-widest uppercase text-accent hover:opacity-70 transition-opacity"
        >
          Close
        </button>

        <div class="aspect-video overflow-hidden bg-muted">
          <NuxtImg
            :src="project.image"
            :alt="project.title"
            class="w-full h-full object-cover"
            format="webp"
          />
        </div>

        <div class="space-y-8">
          <h2 class="text-3xl font-light text-foreground">{{ project.title }}</h2>

          <div class="flex gap-8 text-xs">
            <span class="text-muted-foreground">
              {{ project.category }}
            </span>
            <span class="text-muted-foreground">
              {{ project.year }}
            </span>
          </div>

          <p class="text-lg leading-loose text-muted-foreground">
            A premium digital experience crafted with meticulous attention to detail. This project exemplifies our commitment to creating exceptional web solutions that perform beautifully.
          </p>
        </div>
      </div>
    </div>
  </Transition>
</template>