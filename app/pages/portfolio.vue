<!-- Path: /app/pages/portfolio.vue -->

<script setup>
import { useDarkMode } from '@/composables/useDarkMode'
import PortfolioHero from '../components/custom/Portfolio/PortfolioHero.vue'
import PortfolioGrid from '../components/custom/Portfolio/PortfolioGrid.vue'
import ProjectModal from '../components/custom/Portfolio/ProjectModal.vue'

const { darkMode } = useDarkMode()
const selectedProject = ref(null)

const projects = [
  { id: 1, title: 'Luxury Fashion Store', category: 'E-Commerce', year: '2024' },
  { id: 2, title: 'Designer Portfolio', category: 'Portfolio', year: '2024' },
  { id: 3, title: 'Consulting Firm', category: 'Business', year: '2024' },
  { id: 4, title: 'Tech Startup', category: 'Business', year: '2024' },
  { id: 5, title: 'Art Gallery', category: 'Portfolio', year: '2023' },
  { id: 6, title: 'Global Marketplace', category: 'E-Commerce', year: '2023' }
]

const handleSelectProject = (project) => {
  selectedProject.value = project
}

const handleCloseModal = () => {
  selectedProject.value = null
}
</script>

<template>
  <div class="pt-32">
    <PortfolioHero :dark-mode="darkMode" />
    <PortfolioGrid 
      :projects="projects"
      :dark-mode="darkMode"
      @select-project="handleSelectProject"
    />
    <ProjectModal 
      :project="selectedProject"
      :dark-mode="darkMode"
      @close="handleCloseModal"
    />
  </div>
</template>