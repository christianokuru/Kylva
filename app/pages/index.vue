<!-- Path: /app/pages/index.vue -->

<script setup>
import HomeHero from '../components/custom/Home/HomeHero.vue'
import HomeServices from '../components/custom/Home/HomeServices.vue'
import HomePortfolio from '../components/custom/Home/HomePortfolio.vue'
import StatsSection from '../components/custom/Home/StatsSection.vue'
import BenefitsSection from '../components/custom/Home/BenefitsSection.vue'
import ProcessSection from '../components/custom/Home/ProcessSection.vue'
import TeamSection from '../components/custom/Home/TeamSection.vue'
import Testimonials from '../components/custom/Home/Testimonials.vue'
import HomeCTA from '../components/custom/Home/HomeCTA.vue'

// SEO Meta Tags for Home Page
useSeoMeta({
  title: 'Custom Website Development for International Clients',
  description: 'Kylva builds high-converting e-commerce sites, stunning portfolio websites, and professional business websites for clients in the US and Europe. Get your custom solution today.',
  ogTitle: 'Kylva | Custom Website Development Agency',
  ogDescription: 'International web development agency specializing in e-commerce, portfolio, and business websites. Serving clients across the US and Europe.',
  ogImage: 'https://kylva.com/logo.svg',
  ogUrl: 'https://kylva.com',
  twitterTitle: 'Kylva | Custom Website Development Agency',
  twitterDescription: 'International web development agency specializing in e-commerce, portfolio, and business websites.',
  twitterImage: 'https://kylva.com/logo.svg',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://kylva.com'
    }
  ]
})

// Schema.org Structured Data for Home Page
useSchemaOrg([
  {
    '@type': 'Organization',
    '@id': 'https://kylva.com/#organization',
    name: 'Kylva',
    url: 'https://kylva.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://kylva.com/logo.svg'
    },
    description: 'International web development agency specializing in custom e-commerce websites, portfolio sites, and business websites for clients in the US and Europe.',
    email: 'okuruchristian@gmail.com',
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Continent', name: 'Europe' }
    ],
    sameAs: [
      'https://twitter.com/kylva',
      'https://www.linkedin.com/company/kylva',
      'https://www.tiktok.com/@kylva'
    ]
  },
  {
    '@type': 'Service',
    '@id': 'https://kylva.com/#ecommerce-service',
    serviceType: 'E-commerce Website Development',
    provider: {
      '@id': 'https://kylva.com/#organization'
    },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Continent', name: 'Europe' }
    ],
    description: 'Custom e-commerce website development with payment integration, inventory management, and responsive design.'
  },
  {
    '@type': 'Service',
    '@id': 'https://kylva.com/#portfolio-service',
    serviceType: 'Portfolio Website Design',
    provider: {
      '@id': 'https://kylva.com/#organization'
    },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Continent', name: 'Europe' }
    ],
    description: 'Professional portfolio websites for creatives, designers, and professionals to showcase their work.'
  },
  {
    '@type': 'Service',
    '@id': 'https://kylva.com/#business-service',
    serviceType: 'Business Website Development',
    provider: {
      '@id': 'https://kylva.com/#organization'
    },
    areaServed: [
      { '@type': 'Country', name: 'United States' },
      { '@type': 'Country', name: 'United Kingdom' },
      { '@type': 'Continent', name: 'Europe' }
    ],
    description: 'Corporate and business websites with professional design, SEO optimization, and lead generation features.'
  },
  {
    '@type': 'WebPage',
    '@id': 'https://kylva.com/#webpage',
    url: 'https://kylva.com',
    name: 'Kylva | Custom Website Development for International Clients',
    isPartOf: {
      '@id': 'https://kylva.com/#website'
    },
    about: {
      '@id': 'https://kylva.com/#organization'
    },
    description: 'Kylva builds high-converting e-commerce sites, stunning portfolio websites, and professional business websites for clients in the US and Europe.'
  }
])
</script>

<template>
  <div>
    <HomeHero />
    <HomeServices />
    <HomePortfolio />
    <StatsSection />
    <BenefitsSection />
    <ProcessSection />
    <TeamSection />
    <Testimonials />
    <HomeCTA />
  </div>
</template>