<!-- Path: /app/components/custom/Portfolio/ProjectModal.vue -->

<script setup>
const props = defineProps({
  project: {
    type: Object,
    default: null
  },
  darkMode: {
    type: Boolean,
    required: true
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
      class="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-8"
      @click="handleBackdropClick"
    >
      <div 
        :class="[
          'max-w-4xl w-full p-16 space-y-12',
          darkMode ? 'bg-black' : 'bg-white'
        ]"
        @click="handleContentClick"
      >
        <button 
          @click="handleClose"
          class="text-xs tracking-widest uppercase text-gold hover:opacity-70 transition-opacity"
        >
          Close
        </button>
        
        <div 
          :class="[
            'aspect-video',
            darkMode ? 'bg-white/5' : 'bg-black/5'
          ]"
        ></div>
        
        <div class="space-y-8">
          <h2 class="text-3xl font-light">{{ project.title }}</h2>
          
          <div class="flex gap-8 text-xs">
            <span :class="darkMode ? 'text-white/40' : 'text-black/40'">
              {{ project.category }}
            </span>
            <span :class="darkMode ? 'text-white/40' : 'text-black/40'">
              {{ project.year }}
            </span>
          </div>
          
          <p 
            :class="[
              'text-lg leading-loose',
              darkMode ? 'text-white/60' : 'text-black/60'
            ]"
          >
            A premium digital experience crafted with meticulous attention to detail. This project exemplifies our commitment to creating exceptional web solutions that perform beautifully.
          </p>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.text-gold {
  color: #D4AF37;
}
</style>