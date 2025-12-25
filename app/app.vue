<!-- app/app.vue -->
<script setup>
import 'vue-sonner/style.css'
import { Toaster } from '@/components/ui/sonner'

// Global SEO defaults
useSeoMeta({
  titleTemplate: '%s | Kylva',
  ogSiteName: 'Kylva',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

const route = useRoute()

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  link: [
    {
      rel: 'canonical',
      href: () => `https://kylva.com${route.path}`
    }
  ]
})

// Schema.org WebSite markup
useSchemaOrg([
  {
    '@type': 'WebSite',
    name: 'Kylva',
    url: 'https://kylva.com',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://kylva.com/search?q={search_term_string}'
      },
      'query-input': 'required name=search_term_string'
    }
  }
])

// Google Analytics 4
const config = useRuntimeConfig()
if (config.public.gaId) {
  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=${config.public.gaId}`,
        async: true
      },
      {
        children: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${config.public.gaId}');
        `,
        type: 'text/javascript'
      }
    ]
  })
}
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toaster :position="'bottom-right'" :rich-colors="true" :expand="true"/>
  </div>
</template>