<!-- Path: /app/pages/projects/[slug].vue -->
<script setup>
const route = useRoute();
const { getProjectBySlug, getNextProject } = useProjects();

const project = getProjectBySlug(String(route.params.slug));

if (!project) {
  throw createError({
    statusCode: 404,
    statusMessage: "Project not found",
    fatal: true,
  });
}

const nextProject = getNextProject(project.slug);

const siteUrl = "https://kylva.com";
const pageUrl = `${siteUrl}/projects/${project.slug}`;
const ogImage = `${siteUrl}${project.ogImage}`;
const pageTitle = `${project.title}: ${project.category} Case Study`;

useSeoMeta({
  title: pageTitle,
  description: project.metaDescription,
  ogTitle: `${pageTitle} | Kylva`,
  ogDescription: project.metaDescription,
  ogType: "article",
  ogUrl: pageUrl,
  ogImage,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: project.cover.alt,
  twitterTitle: `${pageTitle} | Kylva`,
  twitterDescription: project.metaDescription,
  twitterImage: ogImage,
  twitterImageAlt: project.cover.alt,
});

useHead({
  link: [
    // Start loading the main image early
    {
      rel: "preload",
      as: "image",
      href: project.cover.src,
      fetchpriority: "high",
    },
  ],
});

useSchemaOrg([
  {
    "@type": "WebPage",
    "@id": `${pageUrl}/#webpage`,
    name: `${pageTitle} | Kylva`,
    description: project.metaDescription,
    url: pageUrl,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${pageUrl}/#work` },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${siteUrl}${project.cover.src}`,
    },
    breadcrumb: { "@id": `${pageUrl}/#breadcrumb` },
  },
  {
    "@type": "CreativeWork",
    "@id": `${pageUrl}/#work`,
    name: project.title,
    headline: project.tagline,
    description: project.summary,
    genre: project.category,
    url: project.url,
    image: [project.cover, ...project.gallery].map(
      (image) => `${siteUrl}${image.src}`,
    ),
    keywords: [project.category, ...project.tech].join(", "),
    creator: { "@id": `${siteUrl}/#organization` },
  },
  {
    "@type": "BreadcrumbList",
    "@id": `${pageUrl}/#breadcrumb`,
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
      {
        "@type": "ListItem",
        position: 2,
        name: "Projects",
        item: `${siteUrl}/projects`,
      },
      { "@type": "ListItem", position: 3, name: project.title, item: pageUrl },
    ],
  },
]);
</script>

<template>
  <article class="bg-black text-white min-h-screen pt-32 pb-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Breadcrumb -->
      <nav aria-label="Breadcrumb" class="mb-12">
        <ol
          class="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-gray-500 font-sans"
        >
          <li><NuxtLink to="/" class="hover:text-white">Home</NuxtLink></li>
          <li aria-hidden="true">/</li>
          <li>
            <NuxtLink to="/projects" class="hover:text-white">Projects</NuxtLink>
          </li>
          <li aria-hidden="true">/</li>
          <li class="text-gray-300" aria-current="page">{{ project.title }}</li>
        </ol>
      </nav>

      <!-- Header -->
      <header class="mb-16 grid lg:grid-cols-12 gap-8 items-end">
        <div class="lg:col-span-8">
          <p
            class="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4 font-sans"
          >
            {{ project.category }}
          </p>
          <h1
            class="text-6xl md:text-7xl lg:text-8xl tracking-tight mb-6 font-serif font-light leading-[1.05]"
          >
            {{ project.title }}
          </h1>
          <p
            class="text-base md:text-xl text-gray-400 leading-relaxed max-w-2xl font-sans font-light"
          >
            {{ project.tagline }}
          </p>
        </div>
        <div class="lg:col-span-4 flex lg:justify-end">
          <a
            :href="project.url"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-3 px-10 py-5 bg-white text-black text-xs uppercase tracking-[0.3em] hover:bg-gray-200 transition-all duration-300 font-sans font-medium"
          >
            Visit live site
            <span aria-hidden="true">↗</span>
            <span class="sr-only">(opens in a new tab)</span>
          </a>
        </div>
      </header>

      <!-- Cover -->
      <figure class="mb-24 overflow-hidden border border-white/10 bg-gray-900">
        <img
          :src="project.cover.src"
          :alt="project.cover.alt"
          :width="project.cover.width"
          :height="project.cover.height"
          fetchpriority="high"
          class="w-full h-auto block"
        />
      </figure>

      <!-- Overview + facts -->
      <section class="grid lg:grid-cols-12 gap-16 mb-32">
        <div class="lg:col-span-8 space-y-16">
          <div>
            <h2
              class="text-4xl md:text-5xl mb-8 tracking-tight font-serif font-light"
            >
              Overview
            </h2>
            <div class="space-y-6">
              <p
                v-for="(paragraph, i) in project.overview"
                :key="i"
                class="text-gray-300 text-base md:text-lg leading-relaxed font-sans font-light"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>

          <div>
            <h2
              class="text-4xl md:text-5xl mb-8 tracking-tight font-serif font-light"
            >
              What we built
            </h2>
            <ul class="divide-y divide-white/10 border-y border-white/10">
              <li
                v-for="feature in project.features"
                :key="feature"
                class="py-5 flex gap-6 text-gray-300 text-base leading-relaxed font-sans font-light"
              >
                <span class="text-[#D4AF37]" aria-hidden="true">—</span>
                <span>{{ feature }}</span>
              </li>
            </ul>
          </div>
        </div>

        <aside class="lg:col-span-4">
          <dl
            class="lg:sticky lg:top-32 space-y-8 border-t border-white/10 pt-8 font-sans"
          >
            <div>
              <dt
                class="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2"
              >
                Category
              </dt>
              <dd class="text-white font-light">{{ project.category }}</dd>
            </div>
            <div>
              <dt
                class="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2"
              >
                Built with
              </dt>
              <dd class="text-white font-light">
                {{ project.tech.join(", ") }}
              </dd>
            </div>
            <div>
              <dt
                class="text-xs uppercase tracking-[0.3em] text-gray-500 mb-2"
              >
                Live site
              </dt>
              <dd>
                <a
                  :href="project.url"
                  target="_blank"
                  rel="noopener"
                  class="text-white font-light underline underline-offset-4 decoration-white/30 hover:decoration-[#D4AF37] break-all"
                >
                  {{ project.url.replace(/^https?:\/\//, "").replace(/\/$/, "") }}
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <!-- Gallery -->
      <section class="mb-32" aria-labelledby="gallery-heading">
        <h2
          id="gallery-heading"
          class="text-4xl md:text-5xl mb-12 tracking-tight font-serif font-light"
        >
          A closer look
        </h2>

        <div class="space-y-12">
          <figure
            v-for="image in project.gallery"
            :key="image.src"
            class="overflow-hidden border border-white/10 bg-gray-900"
          >
            <img
              :src="image.src"
              :alt="image.alt"
              :width="image.width"
              :height="image.height"
              loading="lazy"
              decoding="async"
              class="w-full h-auto block"
            />
          </figure>
        </div>

        <!-- Mobile view -->
        <div class="mt-24 grid md:grid-cols-12 gap-12 items-center">
          <div class="md:col-span-5 md:col-start-2">
            <h3
              class="text-3xl md:text-4xl mb-6 tracking-tight font-serif font-light"
            >
              Made for phones
            </h3>
            <p
              class="text-gray-400 text-base leading-relaxed font-sans font-light"
            >
              Most shoppers browse on their phones, so every page is designed
              to work just as well on a small screen.
            </p>
          </div>
          <figure class="md:col-span-4 md:col-start-8 max-w-xs mx-auto w-full">
            <img
              :src="project.mobile.src"
              :alt="project.mobile.alt"
              :width="project.mobile.width"
              :height="project.mobile.height"
              loading="lazy"
              decoding="async"
              class="w-full h-auto block rounded-[2rem] border-4 border-white/10"
            />
          </figure>
        </div>
      </section>

      <!-- Next project -->
      <nav
        v-if="nextProject && nextProject.slug !== project.slug"
        aria-label="Next project"
        class="border-t border-white/10 pt-16 mb-24"
      >
        <NuxtLink
          :to="`/projects/${nextProject.slug}`"
          class="group grid md:grid-cols-12 gap-8 items-center"
        >
          <div class="md:col-span-5">
            <p
              class="text-xs uppercase tracking-[0.4em] text-gray-500 mb-4 font-sans"
            >
              Next project
            </p>
            <p
              class="text-4xl md:text-6xl tracking-tight font-serif font-light group-hover:text-[#D4AF37] transition-colors duration-300"
            >
              {{ nextProject.title }}
              <span aria-hidden="true">→</span>
            </p>
            <p class="mt-4 text-gray-400 text-sm font-sans font-light">
              {{ nextProject.category }}
            </p>
          </div>
          <div
            class="md:col-span-7 overflow-hidden border border-white/10 bg-gray-900"
          >
            <img
              :src="nextProject.cover.src"
              :alt="nextProject.cover.alt"
              :width="nextProject.cover.width"
              :height="nextProject.cover.height"
              loading="lazy"
              decoding="async"
              class="w-full h-auto block transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </NuxtLink>
      </nav>

      <!-- CTA -->
      <div class="text-center border-t border-white/10 pt-24">
        <h2 class="text-3xl md:text-4xl mb-8 font-serif">
          Want something like this for your brand?
        </h2>
        <NuxtLink
          to="/#contact"
          class="inline-block px-12 py-5 bg-white text-black text-xs uppercase tracking-[0.3em] hover:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95 font-sans font-medium"
        >
          Start a Project
        </NuxtLink>
      </div>
    </div>
  </article>
</template>
