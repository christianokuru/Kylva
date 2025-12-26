<script setup>
import 'vue-sonner/style.css'
import { Toaster } from '@/components/ui/sonner'

/* ---------------------
   Global SEO defaults
---------------------- */
useSeoMeta({
  titleTemplate: '%s | Kylva',
  ogSiteName: 'Kylva',
  ogType: 'website',
  twitterCard: 'summary_large_image',
})

const route = useRoute()
const config = useRuntimeConfig()

/* ---------------------
   Canonical + HTML attrs
---------------------- */
useHead({
  htmlAttrs: { lang: 'en' },
  link: [
    {
      rel: 'canonical',
      href: () => `https://kylva.com${route.path}`
    }
  ]
})

/* ---------------------
   Schema.org
---------------------- */
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

/* --------------------------------
   Google Analytics 4 (Nuxt 4 safe)
--------------------------------- */

onMounted(() => {
  if (!config.public.gaId) return

  // Prevent duplicate injection
  if (window.gtag) return

  // Load GA library
  const gtagScript = document.createElement('script')
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${config.public.gaId}`
  gtagScript.async = true
  document.head.appendChild(gtagScript)

  // Init GA
  const inlineScript = document.createElement('script')
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${config.public.gaId}', {
      send_page_view: false
    });
  `
  document.head.appendChild(inlineScript)
})

// Track SPA route changes
watch(
  () => route.fullPath,
  () => {
    if (!window.gtag) return
    window.gtag('event', 'page_view', {
      page_path: route.fullPath
    })
  }
)
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toaster
      position="bottom-right"
      duration="4000"
      :close-button="true"
      :toast-options="{
        class: 'border-0 shadow-sm',
        classes: {
          toast: 'border border-border text-foreground',
          success: 'bg-green-50 border-green-200 text-green-900',
          error: 'bg-red-50 border-red-200 text-red-900',
          title: 'text-sm font-medium',
          description: 'text-xs opacity-80',
          actionButton: 'bg-primary text-primary-foreground hover:opacity-80 text-xs',
          cancelButton: 'text-muted-foreground hover:text-foreground text-xs'
        }
      }"
    />
  </div>
</template>
