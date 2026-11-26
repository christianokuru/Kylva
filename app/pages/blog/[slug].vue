<script setup>
import { articles, getArticle } from "~/data/articles";

definePageMeta({ lightNav: true });

const route = useRoute();
const article = getArticle(String(route.params.slug));
if (!article) {
  throw createError({ statusCode: 404, statusMessage: "Page not found", fatal: true });
}
const more = articles.filter((a) => a.slug !== article.slug);

const siteUrl = "https://kylva.com";
const url = `${siteUrl}/blog/${article.slug}`;

useSeoMeta({
  title: article.title,
  description: article.description,
  ogTitle: article.title,
  ogDescription: article.description,
  ogUrl: url,
  ogType: "article",
  articlePublishedTime: article.published,
});

useSchemaOrg([
  {
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    url,
    datePublished: article.published,
    dateModified: article.published,
    author: { "@type": "Person", name: "Christian Okuru", url: siteUrl },
    publisher: { "@id": `${siteUrl}/#organization` },
    mainEntityOfPage: url,
    image: `${siteUrl}/og-image.png`,
  },
  {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
      { "@type": "ListItem", position: 2, name: "Guides", item: `${siteUrl}/blog` },
      { "@type": "ListItem", position: 3, name: article.title, item: url },
    ],
  },
]);

const { goToSection } = useSectionNav();
const { track } = useContact();
const go = (to) => {
  track("article_cta", { article: article.slug, to });
  if (to.startsWith("/#")) goToSection(to.slice(2));
  else navigateTo(to);
};

const fmt = (d) =>
  new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(d));
</script>

<template>
  <article class="bg-[#fafaf9] pt-36 pb-24 px-6 lg:px-12">
    <div class="max-w-3xl mx-auto">
      <nav aria-label="Breadcrumb" class="mb-10 text-xs uppercase tracking-[0.25em] text-gray-500 font-sans">
        <NuxtLink to="/blog" class="hover:text-black">← All guides</NuxtLink>
      </nav>

      <header class="mb-12">
        <p class="text-xs uppercase tracking-[0.25em] text-[#8a6d12] mb-4 font-sans">
          {{ article.tag }} · {{ article.readMinutes }} min read
        </p>
        <h1 class="text-4xl md:text-6xl tracking-tight mb-6 font-serif font-light leading-[1.1]">{{ article.title }}</h1>
        <p class="text-sm text-gray-500 font-sans">
          By Christian Okuru, founder of Kylva · {{ fmt(article.published) }}
        </p>
      </header>

      <div class="font-sans text-base md:text-lg text-gray-700 leading-relaxed font-light">
        <template v-for="(b, i) in article.blocks" :key="i">
          <h2 v-if="b.type === 'h2'" class="mt-12 mb-4 text-3xl text-black font-serif font-normal">{{ b.text }}</h2>
          <p v-else-if="b.type === 'p'" class="mb-5">{{ b.text }}</p>
          <ul v-else-if="b.type === 'ul'" class="mb-6 space-y-3">
            <li v-for="item in b.items" :key="item" class="flex gap-3">
              <span class="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D4AF37]" aria-hidden="true" />
              <span>{{ item }}</span>
            </li>
          </ul>
          <aside v-else-if="b.type === 'tip'" class="my-8 border-l-4 border-[#D4AF37] bg-white px-6 py-5 text-base">
            <strong class="block text-xs uppercase tracking-[0.25em] text-[#8a6d12] mb-2 font-medium">Tip</strong>
            {{ b.text }}
          </aside>
          <div v-else-if="b.type === 'cta'" class="my-10 bg-black text-white px-6 py-8 md:px-10">
            <p class="text-xl md:text-2xl font-serif mb-5">{{ b.text }}</p>
            <a :href="b.to" @click.prevent="go(b.to)" class="inline-block px-8 py-4 bg-white text-black text-xs uppercase tracking-[0.3em] font-medium">{{ b.label }}</a>
          </div>
        </template>
      </div>

      <!-- Author -->
      <div class="mt-16 flex items-center gap-4 border-t border-gray-200 pt-8">
        <span class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-black text-white font-serif text-xl" aria-hidden="true">CO</span>
        <p class="text-sm text-gray-600 font-sans">
          <strong class="text-black font-medium">Christian Okuru</strong> is a full-stack developer and the founder of Kylva, a studio that builds custom online stores for fashion and beauty brands.
        </p>
      </div>

      <!-- More -->
      <nav aria-label="More guides" class="mt-16">
        <p class="text-xs uppercase tracking-[0.3em] text-gray-500 mb-6 font-sans">More guides</p>
        <ul class="space-y-6">
          <li v-for="a in more" :key="a.slug">
            <NuxtLink :to="`/blog/${a.slug}`" class="text-2xl font-serif hover:text-[#8a6d12] transition-colors">{{ a.title }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </article>
</template>
