<script setup>
import { articles } from "~/data/articles";

definePageMeta({ lightNav: true });

const siteUrl = "https://kylva.com";
const description =
  "Plain-English guides for fashion and beauty brands selling online: store costs, Shopify vs custom, payments in naira and dollars, and more.";

useSeoMeta({
  title: "Guides for Fashion & Beauty Brands Selling Online",
  description,
  ogTitle: "Guides | Kylva",
  ogDescription: description,
  ogUrl: `${siteUrl}/blog`,
});

useSchemaOrg([
  {
    "@type": "Blog",
    name: "Kylva Guides",
    url: `${siteUrl}/blog`,
    description,
    publisher: { "@id": `${siteUrl}/#organization` },
    blogPost: articles.map((a) => ({
      "@type": "BlogPosting",
      headline: a.title,
      url: `${siteUrl}/blog/${a.slug}`,
      datePublished: a.published,
    })),
  },
]);

const fmt = (d) =>
  new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(d));
</script>

<template>
  <div class="bg-[#fafaf9] pt-36 pb-24 px-6 lg:px-12">
    <div class="max-w-5xl mx-auto">
      <header class="mb-16">
        <p class="text-xs uppercase tracking-[0.4em] text-[#8a6d12] mb-4 font-sans">Guides</p>
        <h1 class="text-5xl md:text-7xl tracking-tight mb-6 font-serif font-light leading-[1.05]">
          Selling online, <span class="italic" style="font-weight: 400">made clear</span>
        </h1>
        <p class="text-base md:text-lg text-gray-600 max-w-2xl font-sans font-light leading-relaxed">
          Short, honest guides for fashion and beauty brands: what things cost, which tools to use, and how to sell more.
        </p>
      </header>

      <ul class="divide-y divide-gray-200 border-y border-gray-200">
        <li v-for="a in articles" :key="a.slug">
          <NuxtLink :to="`/blog/${a.slug}`" class="group block py-10">
            <p class="text-xs uppercase tracking-[0.25em] text-gray-500 mb-3 font-sans">
              {{ a.tag }} · {{ a.readMinutes }} min read · {{ fmt(a.published) }}
            </p>
            <h2 class="text-3xl md:text-4xl tracking-tight mb-3 font-serif group-hover:text-[#8a6d12] transition-colors">{{ a.title }}</h2>
            <p class="text-sm md:text-base text-gray-600 font-sans font-light max-w-3xl">{{ a.description }}</p>
          </NuxtLink>
        </li>
      </ul>

      <div class="mt-16 bg-black text-white p-8 md:p-12 grid md:grid-cols-12 gap-6 items-center">
        <div class="md:col-span-8">
          <p class="text-2xl md:text-3xl font-serif mb-2">How much is Shopify really costing you?</p>
          <p class="text-sm text-gray-400 font-sans font-light">See your plan, apps and payment fees over 3 years.</p>
        </div>
        <div class="md:col-span-4 md:text-right">
          <NuxtLink to="/shopify-cost-calculator" class="inline-block px-8 py-4 bg-white text-black text-xs uppercase tracking-[0.3em] font-sans font-medium">Try the calculator</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
