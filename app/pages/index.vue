<script setup>
import Hero from "@/components/custom/Home/Hero.vue";
import Services from "@/components/custom/Home/Services.vue";
import About from "@/components/custom/Home/About.vue";
import Work from "@/components/custom/Home/Work.vue";
import Process from "@/components/custom/Home/Process.vue";
import Faq from "@/components/custom/Home/Faq.vue";
import { faqs } from "~/data/faqs";
import Contact from "@/components/custom/Home/Contact.vue";

const homeTitle = "Custom Online Stores for Fashion & Beauty Brands";
const homeDescription =
  "Kylva builds fast, mobile-first online stores for fashion and beauty brands. No templates, no monthly platform fees, and you own the code. From $500.";

useSeoMeta({
  title: homeTitle,
  description: homeDescription,
  ogTitle: `Kylva - ${homeTitle}`,
  ogDescription: homeDescription,
  ogImage: "https://kylva.com/og-image.png",
  twitterCard: "summary_large_image",
});

// Page-specific Schema.org structured data
useSchemaOrg([
  // WebPage Schema
  {
    "@type": "WebPage",
    "@id": "https://kylva.com/#webpage",
    name: `Kylva - ${homeTitle}`,
    description: homeDescription,
    url: "https://kylva.com",
    isPartOf: { "@id": "https://kylva.com/#website" },
    about: { "@id": "https://kylva.com/#organization" },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: "https://kylva.com/og-image.png",
    },
  },
  // Service Schema: Fashion E-Commerce
  {
    "@type": "Service",
    "@id": "https://kylva.com/#service-fashion",
    name: "Fashion E-Commerce",
    description:
      "Bespoke online stores that embody the essence of luxury fashion. From haute couture to contemporary brands, we create digital experiences that mirror the sophistication of your collections.",
    provider: { "@id": "https://kylva.com/#organization" },
    areaServed: "Worldwide",
    serviceType: "Luxury Fashion E-commerce Development",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fashion E-Commerce Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Custom Design Systems" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Product Showcases" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Seamless Checkout" },
        },
      ],
    },
  },
  // Service Schema: Beauty Platforms
  {
    "@type": "Service",
    "@id": "https://kylva.com/#service-beauty",
    name: "Beauty Platforms",
    description:
      "Elegant e-commerce solutions for beauty and cosmetics brands. We craft immersive experiences that highlight your products' luxury and effectiveness with refined detail.",
    provider: { "@id": "https://kylva.com/#organization" },
    areaServed: "Worldwide",
    serviceType: "Luxury Beauty E-commerce Development",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Beauty Platform Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Interactive Product Views",
          },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Shade Matching" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Subscription Systems" },
        },
      ],
    },
  },
  // Service Schema: Brand Experience
  {
    "@type": "Service",
    "@id": "https://kylva.com/#service-brand",
    name: "Brand Experience",
    description:
      "More than just a store—a complete digital identity. We develop cohesive experiences that tell your brand's story and connect with discerning customers on a deeper level.",
    provider: { "@id": "https://kylva.com/#organization" },
    areaServed: "Worldwide",
    serviceType: "Luxury Brand Experience Design",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Brand Experience Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Brand Storytelling" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Editorial Layouts" },
        },
        {
          "@type": "Offer",
          itemOffered: { "@type": "Service", name: "Luxury UI/UX" },
        },
      ],
    },
  },
  // FAQ Schema (matches the FAQ section on the page)
  {
    "@type": "FAQPage",
    "@id": "https://kylva.com/#faq",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
]);
</script>

<template>
  <div class="size-full">
    <Hero />
    <Services />
    <About />
    <Work />
    <Process />
    <Faq />
    <Contact />
  </div>
</template>
