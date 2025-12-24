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

// SEO Meta Tags for Portfolio Page
useSeoMeta({
  title: 'Web Development Portfolio | E-commerce & Business Website Examples',
  description: 'View our portfolio of custom e-commerce stores, professional portfolio websites, and business sites built for international clients. See our work for US and European businesses.',
  ogTitle: 'Our Web Development Portfolio | Kylva',
  ogDescription: 'Explore successful e-commerce, portfolio, and business websites we\'ve built for clients across the US and Europe. Custom web solutions that deliver results.',
  ogImage: 'https://kylva.com/logo.svg',
  ogUrl: 'https://kylva.com/portfolio',
  twitterTitle: 'Our Web Development Portfolio | Kylva',
  twitterDescription: 'Explore successful e-commerce, portfolio, and business websites we\'ve built for clients across the US and Europe.',
  twitterImage: 'https://kylva.com/logo.svg',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://kylva.com/portfolio'
    }
  ]
})

// Schema.org Structured Data for Portfolio Page
useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://kylva.com/portfolio#webpage',
    url: 'https://kylva.com/portfolio',
    name: 'Web Development Portfolio | Kylva',
    isPartOf: {
      '@id': 'https://kylva.com/#website'
    },
    about: {
      '@id': 'https://kylva.com/#organization'
    },
    description: 'Portfolio showcasing custom e-commerce, portfolio, and business websites built for international clients.'
  },
  {
    '@type': 'CollectionPage',
    '@id': 'https://kylva.com/portfolio#collection',
    url: 'https://kylva.com/portfolio',
    name: 'Kylva Web Development Portfolio',
    description: 'A collection of successful web development projects including e-commerce stores, portfolio websites, and business sites.',
    provider: {
      '@id': 'https://kylva.com/#organization'
    }
  },
  {
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'CreativeWork',
        name: project.title,
        description: `${project.category} website project completed in ${project.year}`,
        creator: {
          '@id': 'https://kylva.com/#organization'
        },
        datePublished: `${project.year}-01-01`,
        genre: project.category,
        keywords: `${project.category}, web development, custom website, ${project.year}`
      }
    }))
  },
  {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://kylva.com'
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Portfolio',
        item: 'https://kylva.com/portfolio'
      }
    ]
  }
])
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