<script setup>
import "vue-sonner/style.css";
import { Toaster } from "@/components/ui/sonner";

/* ---------------------
   Global SEO defaults
---------------------- */
useSeoMeta({
  titleTemplate: "%s | Kylva",
  ogSiteName: "Kylva",
  ogType: "website",
  twitterCard: "summary_large_image",
});

const route = useRoute();
const config = useRuntimeConfig();

/* ---------------------
   Canonical + HTML attrs
---------------------- */
useHead({
  htmlAttrs: { lang: "en" },
  link: [
    {
      rel: "canonical",
      href: () => `https://kylva.com${route.path}`,
    },
  ],
});

/* ---------------------
   Schema.org
---------------------- */
useSchemaOrg([
  // Organization Schema
  {
    "@type": "Organization",
    "@id": "https://kylva.com/#organization",
    name: "Kylva",
    url: "https://kylva.com",
    logo: {
      "@type": "ImageObject",
      url: "https://kylva.com/logo.svg",
    },
    email: "okuruchristian@gmail.com",
    description:
      "Luxury web development agency crafting exceptional e-commerce experiences exclusively for high-end fashion and beauty brands.",
    sameAs: [
      "https://twitter.com/kylva",
      "https://www.linkedin.com/company/kylva",
      "https://www.tiktok.com/@kylva",
    ],
    areaServed: ["United States", "Canada", "Europe"],
    knowsAbout: [
      "Luxury E-commerce Development",
      "Fashion Brand Web Design",
      "Beauty Platform Development",
      "Brand Experience Design",
    ],
  },
  // WebSite Schema with Sitelinks Search Box
  {
    "@type": "WebSite",
    "@id": "https://kylva.com/#website",
    name: "Kylva",
    url: "https://kylva.com",
    publisher: { "@id": "https://kylva.com/#organization" },
    inLanguage: "en-US",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://kylva.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  },
  // LocalBusiness Schema (ProfessionalService for credibility)
  {
    "@type": "ProfessionalService",
    "@id": "https://kylva.com/#localbusiness",
    name: "Kylva",
    image: "https://kylva.com/og-image.png",
    url: "https://kylva.com",
    email: "okuruchristian@gmail.com",
    priceRange: "$$$",
    description:
      "Luxury web development agency specializing in bespoke e-commerce experiences for high-end fashion and beauty brands.",
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
      { "@type": "Continent", name: "Europe" },
    ],
    sameAs: [
      "https://twitter.com/kylva",
      "https://www.linkedin.com/company/kylva",
      "https://www.tiktok.com/@kylva",
    ],
  },
]);

/* --------------------------------
   Google Analytics 4 (Nuxt 4 safe)
--------------------------------- */

onMounted(() => {
  if (!config.public.gaId) return;

  // Prevent duplicate injection
  if (window.gtag) return;

  // Load GA library
  const gtagScript = document.createElement("script");
  gtagScript.src = `https://www.googletagmanager.com/gtag/js?id=${config.public.gaId}`;
  gtagScript.async = true;
  document.head.appendChild(gtagScript);

  // Init GA
  const inlineScript = document.createElement("script");
  inlineScript.innerHTML = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', '${config.public.gaId}', {
      send_page_view: false
    });
  `;
  document.head.appendChild(inlineScript);
});

// Track SPA route changes
watch(
  () => route.fullPath,
  () => {
    if (!window.gtag) return;
    window.gtag("event", "page_view", {
      page_path: route.fullPath,
    });
  },
);
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
          actionButton:
            'bg-primary text-primary-foreground hover:opacity-80 text-xs',
          cancelButton: 'text-muted-foreground hover:text-foreground text-xs',
        },
      }"
    />
  </div>
</template>
