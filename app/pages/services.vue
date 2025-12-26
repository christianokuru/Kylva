<!-- Path: /app/pages/services.vue -->

<script setup>
import ServicesHero from '../components/custom/Services/ServicesHero.vue'
import ServicesList from '../components/custom/Services/ServicesList.vue'

// SEO Meta Tags for Services Page
useSeoMeta({
  title: 'Web Development Services | E-commerce, Portfolio & Business Websites',
  description: 'Expert web development services including custom e-commerce platforms, portfolio websites, and business sites. Tailored solutions for international clients in the US and Europe.',
  ogTitle: 'Professional Web Development Services | Kylva',
  ogDescription: 'Custom e-commerce development, portfolio website design, and business web solutions for international clients. Specialized services for US and European markets.',
  ogImage: 'https://kylva.com/logo.svg',
  ogUrl: 'https://kylva.com/services',
  twitterTitle: 'Professional Web Development Services | Kylva',
  twitterDescription: 'Custom e-commerce development, portfolio website design, and business web solutions for international clients.',
  twitterImage: 'https://kylva.com/logo.svg',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://kylva.com/services'
    }
  ]
})

// Schema.org Structured Data for Services Page
useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://kylva.com/services#webpage',
    url: 'https://kylva.com/services',
    name: 'Web Development Services | Kylva',
    isPartOf: {
      '@id': 'https://kylva.com/#website'
    },
    about: {
      '@id': 'https://kylva.com/#organization'
    },
    description: 'Professional web development services including e-commerce, portfolio, and business website solutions.'
  },
  {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'Service',
        position: 1,
        name: 'E-commerce Website Development',
        description: 'Custom online stores with secure payment processing, inventory management, shopping cart functionality, and mobile-responsive design. Perfect for businesses looking to sell products online globally.',
        provider: {
          '@id': 'https://kylva.com/#organization'
        },
        serviceType: 'E-commerce Development',
        areaServed: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Continent', name: 'Europe' }
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'E-commerce Features',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Payment Gateway Integration'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Shopping Cart Development'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Inventory Management System'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Mobile Responsive Design'
              }
            }
          ]
        }
      },
      {
        '@type': 'Service',
        position: 2,
        name: 'Portfolio Website Design',
        description: 'Stunning portfolio websites for creatives, designers, photographers, and professionals. Showcase your work with beautiful galleries, case studies, and contact forms.',
        provider: {
          '@id': 'https://kylva.com/#organization'
        },
        serviceType: 'Portfolio Website Design',
        areaServed: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Continent', name: 'Europe' }
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Portfolio Features',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Custom Gallery Design'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Project Showcase Pages'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Contact Form Integration'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Responsive Mobile Design'
              }
            }
          ]
        }
      },
      {
        '@type': 'Service',
        position: 3,
        name: 'Business Website Development',
        description: 'Professional corporate and business websites with modern design, SEO optimization, lead generation forms, and content management systems. Establish your online presence effectively.',
        provider: {
          '@id': 'https://kylva.com/#organization'
        },
        serviceType: 'Business Website Development',
        areaServed: [
          { '@type': 'Country', name: 'United States' },
          { '@type': 'Country', name: 'United Kingdom' },
          { '@type': 'Continent', name: 'Europe' }
        ],
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Business Website Features',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'SEO Optimization'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Lead Generation Forms'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Content Management System'
              }
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Professional Design'
              }
            }
          ]
        }
      }
    ]
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
        name: 'Services',
        item: 'https://kylva.com/services'
      }
    ]
  }
])
</script>

<template>
  <div class="pt-32 max-sm:pt-0">
    <ServicesHero />
    <ServicesList />
  </div>
</template>