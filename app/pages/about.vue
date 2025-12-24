<!-- Path: /app/pages/about.vue -->

<script setup>
import { useDarkMode } from '@/composables/useDarkMode'
import AboutHero from '../components/custom/About/AboutHero.vue'
import AboutValues from '../components/custom/About/AboutValues.vue'

const { darkMode } = useDarkMode()

// SEO Meta Tags for About Page
useSeoMeta({
  title: 'About Kylva | International Web Development Agency',
  description: 'Learn about Kylva, an international web development agency specializing in custom e-commerce, portfolio, and business websites for clients in the US and Europe. Our mission and values.',
  ogTitle: 'About Kylva | Web Development Agency',
  ogDescription: 'International web development agency building custom websites for businesses across the US and Europe. Learn about our expertise in e-commerce, portfolio, and business web solutions.',
  ogImage: 'https://kylva.com/logo.svg',
  ogUrl: 'https://kylva.com/about',
  twitterTitle: 'About Kylva | Web Development Agency',
  twitterDescription: 'International web development agency building custom websites for businesses across the US and Europe.',
  twitterImage: 'https://kylva.com/logo.svg',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://kylva.com/about'
    }
  ]
})

// Schema.org Structured Data for About Page
useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://kylva.com/about#webpage',
    url: 'https://kylva.com/about',
    name: 'About Kylva | International Web Development Agency',
    isPartOf: {
      '@id': 'https://kylva.com/#website'
    },
    about: {
      '@id': 'https://kylva.com/#organization'
    },
    description: 'Learn about Kylva, our mission, values, and expertise in web development for international clients.'
  },
  {
    '@type': 'AboutPage',
    '@id': 'https://kylva.com/about#aboutpage',
    url: 'https://kylva.com/about',
    name: 'About Kylva',
    mainEntity: {
      '@id': 'https://kylva.com/#organization'
    }
  },
  {
    '@type': 'Organization',
    '@id': 'https://kylva.com/#organization',
    name: 'Kylva',
    alternateName: 'Kylva Agency',
    url: 'https://kylva.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://kylva.com/logo.svg',
      width: 250,
      height: 60
    },
    description: 'International web development agency specializing in custom e-commerce websites, portfolio sites, and business websites for clients in the US and Europe.',
    email: 'okuruchristian@gmail.com',
    foundingDate: '2023',
    knowsAbout: [
      'Web Development',
      'E-commerce Development',
      'Portfolio Website Design',
      'Business Website Development',
      'Custom Website Solutions',
      'Responsive Web Design',
      'User Experience Design',
      'Search Engine Optimization'
    ],
    slogan: 'Building exceptional websites for international clients',
    areaServed: [
      {
        '@type': 'Country',
        name: 'United States'
      },
      {
        '@type': 'Country',
        name: 'United Kingdom'
      },
      {
        '@type': 'Continent',
        name: 'Europe'
      }
    ],
    sameAs: [
      'https://twitter.com/kylva',
      'https://www.linkedin.com/company/kylva',
      'https://www.tiktok.com/@kylva'
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NG'
    }
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
        name: 'About',
        item: 'https://kylva.com/about'
      }
    ]
  }
])
</script>

<template>
  <div class="pt-32">
    <AboutHero :dark-mode="darkMode" />
    <AboutValues :dark-mode="darkMode" />
  </div>
</template>