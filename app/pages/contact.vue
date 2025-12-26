<!-- Path: /app/pages/contact.vue -->

<script setup>
import { toast } from 'vue-sonner'
import ContactHero from '../components/custom/Contact/ContactHero.vue'
import ContactForm from '../components/custom/Contact/ContactForm.vue'
import ContactInfo from '../components/custom/Contact/ContactInfo.vue'

const handleFormSubmit = (formData) => {
  console.log('Form submitted:', formData)

  // Show success toast
  toast.success('Message sent successfully', {
    description: 'We\'ll be in touch within 24-48 hours.'
  })

  // Redirect to thank you page
  setTimeout(() => {
    navigateTo('/thank-you')
  }, 1500)

  // Here you would typically send the data to your API
  // Example: await $fetch('/api/contact', { method: 'POST', body: formData })
}

// SEO Meta Tags for Contact Page
useSeoMeta({
  title: 'Contact Us | Get Your Custom Website Quote',
  description: 'Contact Kylva for a free consultation on your e-commerce, portfolio, or business website project. We serve clients across the US and Europe. Get started today.',
  ogTitle: 'Contact Kylva | Request a Website Quote',
  ogDescription: 'Get in touch with our web development team for a free consultation. We build custom e-commerce, portfolio, and business websites for international clients.',
  ogImage: 'https://kylva.com/logo.svg',
  ogUrl: 'https://kylva.com/contact',
  twitterTitle: 'Contact Kylva | Request a Website Quote',
  twitterDescription: 'Get in touch with our web development team for a free consultation. Custom websites for US and European clients.',
  twitterImage: 'https://kylva.com/logo.svg',
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: 'https://kylva.com/contact'
    }
  ]
})

// Schema.org Structured Data for Contact Page
useSchemaOrg([
  {
    '@type': 'WebPage',
    '@id': 'https://kylva.com/contact#webpage',
    url: 'https://kylva.com/contact',
    name: 'Contact Us | Kylva',
    isPartOf: {
      '@id': 'https://kylva.com/#website'
    },
    about: {
      '@id': 'https://kylva.com/#organization'
    },
    description: 'Contact Kylva for web development services. Get a free consultation for your e-commerce, portfolio, or business website project.'
  },
  {
    '@type': 'ContactPage',
    '@id': 'https://kylva.com/contact#contactpage',
    url: 'https://kylva.com/contact',
    name: 'Contact Kylva',
    mainEntity: {
      '@id': 'https://kylva.com/#organization'
    }
  },
  {
    '@type': 'Organization',
    '@id': 'https://kylva.com/#organization',
    name: 'Kylva',
    url: 'https://kylva.com',
    logo: 'https://kylva.com/logo.svg',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'okuruchristian@gmail.com',
      availableLanguage: ['English'],
      areaServed: [
        'US',
        'GB',
        'EU'
      ]
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
        name: 'Contact',
        item: 'https://kylva.com/contact'
      }
    ]
  }
])
</script>

<template>
  <section class="pt-32 min-h-screen flex items-center justify-center px-8 py-32">
    <div class="max-w-2xl w-full space-y-20">
      <ContactHero />
      <ContactForm
        @submit="handleFormSubmit"
      />
      <ContactInfo />
    </div>
  </section>
</template>