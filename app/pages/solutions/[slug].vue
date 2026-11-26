<script setup>
import { getSolution, solutions } from "~/data/solutions";

definePageMeta({ lightNav: true });

const route = useRoute();
const page = getSolution(String(route.params.slug));
if (!page) {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}

const { getProjectBySlug } = useProjects();
const project = getProjectBySlug(page.project);
const others = solutions.filter((s) => s.slug !== page.slug);

const { goToSection } = useSectionNav();
const { whatsappUrl, track } = useContact();

const siteUrl = "https://kylva.com";
const pageUrl = `${siteUrl}/solutions/${page.slug}`;

useSeoMeta({
  title: page.metaTitle,
  description: page.metaDescription,
  ogTitle: `${page.metaTitle} | Kylva`,
  ogDescription: page.metaDescription,
  ogUrl: pageUrl,
});

useSchemaOrg([
  {
    "@type": "Service",
    name: page.metaTitle,
    description: page.metaDescription,
    url: pageUrl,
    provider: { "@id": `${siteUrl}/#organization` },
    areaServed: page.slug === "ecommerce-website-nigeria" ? "Nigeria" : "Worldwide",
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "USD",
      lowPrice: "500",
      highPrice: "2500",
    },
  },
  {
    "@type": "FAQPage",
    mainEntity: page.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  },
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: page.label, item: pageUrl },
    ],
  },
]);

const quote = (where) => {
  track("solution_cta", { page: page.slug, location: where });
  goToSection("contact");
};
</script>

<template>
  <div class="bg-[#fafaf9]">
    <!-- Hero -->
    <section class="pt-36 pb-20 px-6 lg:px-12">
      <div class="max-w-5xl mx-auto text-center">
        <p class="text-xs uppercase tracking-[0.35em] text-[#8a6d12] mb-6 font-sans font-medium">
          {{ page.eyebrow }}
        </p>
        <h1 class="text-5xl md:text-7xl tracking-tight mb-8 font-serif font-light leading-[1.05]">
          {{ page.title }}
          <span class="italic" style="font-weight: 400">{{ page.titleItalic }}</span>
        </h1>
        <p class="text-base md:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mb-10 font-sans font-light">
          {{ page.intro }}
        </p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/#contact" @click.prevent="quote('hero')" class="w-full sm:w-auto px-10 py-5 bg-black text-white text-xs uppercase tracking-[0.3em] hover:bg-gray-900 transition-colors font-sans font-medium">
            Get a free quote
          </a>
          <a
            v-if="whatsappUrl()"
            :href="whatsappUrl()"
            target="_blank"
            rel="noopener"
            @click="track('contact_whatsapp', { location: `solution:${page.slug}` })"
            class="w-full sm:w-auto px-10 py-5 border border-black text-xs uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-colors font-sans font-medium"
          >
            Chat on WhatsApp
          </a>
        </div>
        <p class="mt-6 text-xs text-gray-600 font-sans">From $500 · One-off price · You own the code</p>
      </div>
    </section>

    <!-- Problems -->
    <section class="py-20 px-6 lg:px-12 bg-white">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl md:text-5xl tracking-tight mb-12 font-serif font-light">{{ page.problemsTitle }}</h2>
        <ul class="grid md:grid-cols-3 gap-10">
          <li v-for="(p, i) in page.problems" :key="p.title" class="border-t border-gray-200 pt-6">
            <span class="block text-4xl text-gray-300 font-serif mb-4" aria-hidden="true">0{{ i + 1 }}</span>
            <h3 class="text-2xl mb-3 font-serif">{{ p.title }}</h3>
            <p class="text-sm text-gray-600 leading-relaxed font-sans font-light">{{ p.text }}</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- What you get -->
    <section class="py-20 px-6 lg:px-12 bg-black text-white">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
        <div class="lg:col-span-5">
          <p class="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4 font-sans">What you get</p>
          <h2 class="text-4xl md:text-5xl tracking-tight mb-6 font-serif font-light leading-[1.1]">
            A store built around <span class="italic" style="font-weight: 400">your customers</span>
          </h2>
          <p class="text-sm text-gray-400 leading-relaxed font-sans font-light mb-8">
            Every store is designed and built from scratch. Packages start at $500 for new brands, with 3 months of support included.
          </p>
          <NuxtLink to="/#pricing" class="inline-block text-xs uppercase tracking-[0.3em] underline underline-offset-8 decoration-[#D4AF37] font-sans">
            See packages
          </NuxtLink>
        </div>
        <ul class="lg:col-span-7 grid sm:grid-cols-2 gap-x-8 gap-y-5">
          <li v-for="item in page.included" :key="item" class="flex gap-3 text-sm font-sans font-light text-gray-200">
            <span class="text-[#D4AF37]" aria-hidden="true">✓</span>{{ item }}
          </li>
        </ul>
      </div>
    </section>

    <!-- Example store -->
    <section v-if="project" class="py-20 px-6 lg:px-12">
      <div class="max-w-7xl mx-auto grid md:grid-cols-12 gap-10 items-center">
        <NuxtLink :to="`/projects/${project.slug}`" class="md:col-span-7 block overflow-hidden border border-gray-200 bg-white group">
          <img :src="project.cover.src" :alt="project.cover.alt" :width="project.cover.width" :height="project.cover.height" loading="lazy" decoding="async" class="w-full transition-transform duration-700 group-hover:scale-105" />
        </NuxtLink>
        <div class="md:col-span-5">
          <p class="text-xs uppercase tracking-[0.3em] text-[#8a6d12] mb-3 font-sans">Example · Concept store</p>
          <h2 class="text-4xl tracking-tight mb-4 font-serif font-light">{{ project.title }}</h2>
          <p class="text-sm text-gray-600 leading-relaxed mb-6 font-sans font-light">{{ project.summary }}</p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink :to="`/projects/${project.slug}`" class="px-8 py-4 bg-black text-white text-xs uppercase tracking-[0.3em] font-sans font-medium">Case study</NuxtLink>
            <a :href="project.url" target="_blank" rel="noopener" class="px-8 py-4 border border-black text-xs uppercase tracking-[0.3em] font-sans font-medium">Try the demo ↗</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Calculator nudge -->
    <section class="px-6 lg:px-12 pb-20">
      <div class="max-w-7xl mx-auto border border-dashed border-gray-300 p-8 md:p-10 grid md:grid-cols-12 gap-6 items-center bg-white">
        <div class="md:col-span-8">
          <p class="text-2xl md:text-3xl font-serif mb-2">How much is Shopify really costing you?</p>
          <p class="text-sm text-gray-600 font-sans font-light">Plan, apps and payment fees add up. See your own numbers in under a minute.</p>
        </div>
        <div class="md:col-span-4 md:text-right">
          <NuxtLink to="/shopify-cost-calculator" class="inline-block px-8 py-4 border border-black text-xs uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-colors font-sans font-medium">
            Try the calculator
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-20 px-6 lg:px-12 bg-white">
      <div class="max-w-3xl mx-auto">
        <h2 class="text-4xl md:text-5xl tracking-tight mb-10 font-serif font-light">Questions</h2>
        <div class="divide-y divide-gray-200 border-y border-gray-200">
          <details v-for="f in page.faqs" :key="f.question" class="group py-5">
            <summary class="flex justify-between gap-6 cursor-pointer list-none text-lg font-serif">
              {{ f.question }}
              <span class="text-gray-400 transition-transform group-open:rotate-45" aria-hidden="true">+</span>
            </summary>
            <p class="mt-3 text-sm text-gray-600 leading-relaxed font-sans font-light">{{ f.answer }}</p>
          </details>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-20 px-6 lg:px-12 text-center">
      <h2 class="text-4xl md:text-6xl tracking-tight mb-6 font-serif font-light">
        Ready to <span class="italic" style="font-weight: 400">start?</span>
      </h2>
      <p class="text-sm md:text-base text-gray-600 mb-10 font-sans font-light">Tell us about your brand. You'll get a reply within 24 hours.</p>
      <a href="/#contact" @click.prevent="quote('footer')" class="inline-block px-12 py-5 bg-black text-white text-xs uppercase tracking-[0.3em] hover:bg-gray-900 transition-colors font-sans font-medium">
        Get a free quote
      </a>

      <nav aria-label="More solutions" class="mt-16">
        <p class="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 font-sans">Also see</p>
        <ul class="flex flex-wrap justify-center gap-x-8 gap-y-3 font-sans text-sm">
          <li v-for="s in others" :key="s.slug">
            <NuxtLink :to="`/solutions/${s.slug}`" class="underline underline-offset-4 decoration-gray-300 hover:decoration-black">{{ s.label }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </section>
  </div>
</template>
