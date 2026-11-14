<!-- Path: /app/pages/projects/index.vue -->
<script setup>
const { getAllProjects } = useProjects();
const projects = getAllProjects();

const siteUrl = "https://kylva.com";
const projectsDescription =
  "Selected e-commerce work by Kylva: online stores for fragrance, skincare and fashion brands, designed and built to look premium and sell.";

useSeoMeta({
  title: "Projects",
  description: projectsDescription,
  ogTitle: "Projects | Kylva",
  ogDescription: projectsDescription,
  ogUrl: `${siteUrl}/projects`,
  ogImage: `${siteUrl}${projects[0].ogImage}`,
  twitterTitle: "Projects | Kylva",
  twitterDescription: projectsDescription,
  twitterImage: `${siteUrl}${projects[0].ogImage}`,
});

useSchemaOrg([
  {
    "@type": "CollectionPage",
    "@id": `${siteUrl}/projects/#webpage`,
    name: "Projects | Kylva",
    description: projectsDescription,
    url: `${siteUrl}/projects`,
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
    mainEntity: { "@id": `${siteUrl}/projects/#list` },
  },
  {
    "@type": "ItemList",
    "@id": `${siteUrl}/projects/#list`,
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.title,
      url: `${siteUrl}/projects/${project.slug}`,
    })),
  },
]);
</script>

<template>
  <div class="bg-black text-white min-h-screen pt-32 pb-24">
    <div class="max-w-7xl mx-auto px-6 lg:px-12">
      <!-- Header -->
      <div class="mb-24 text-center" data-aos="fade-up">
        <p
          class="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4 font-sans"
        >
          Our Portfolio
        </p>
        <h1
          class="text-6xl md:text-7xl lg:text-8xl tracking-tight mb-8 font-serif font-light leading-[1.1]"
        >
          Selected <span class="italic" style="font-weight: 400">Works</span>
        </h1>
        <p
          class="text-xs md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto font-sans font-light"
        >
          Online stores for fragrance, beauty and fashion brands. Open any
          project to see how it was designed and built.
        </p>
      </div>

      <!-- Projects Grid -->
      <ul class="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
        <li
          v-for="(project, index) in projects"
          :key="project.slug"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <NuxtLink :to="`/projects/${project.slug}`" class="group block">
            <div
              class="relative aspect-16/10 overflow-hidden mb-8 bg-gray-900 border border-white/10"
            >
              <img
                :src="project.cover.src"
                :alt="project.cover.alt"
                :width="project.cover.width"
                :height="project.cover.height"
                :loading="index < 2 ? 'eager' : 'lazy'"
                decoding="async"
                class="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              <div
                class="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"
              />
            </div>

            <span
              class="block text-xs uppercase tracking-[0.2em] text-[#D4AF37] mb-3 font-sans"
            >
              {{ project.category }}
            </span>
            <h2
              class="text-3xl md:text-4xl mb-4 tracking-tight group-hover:text-gray-300 transition-colors duration-300 font-serif font-normal"
            >
              {{ project.title }}
            </h2>
            <p
              class="text-gray-400 text-sm leading-relaxed line-clamp-3 font-sans font-light mb-6"
            >
              {{ project.summary }}
            </p>
            <span
              class="text-xs uppercase tracking-[0.3em] text-white font-sans inline-flex items-center gap-2"
            >
              View case study
              <span
                aria-hidden="true"
                class="transition-transform group-hover:translate-x-1"
                >→</span
              >
            </span>
          </NuxtLink>
        </li>
      </ul>

      <!-- CTA -->
      <div
        class="mt-32 text-center border-t border-white/10 pt-24"
        data-aos="fade-up"
      >
        <h2 class="text-3xl md:text-4xl mb-8 font-serif">
          Ready to create your legacy?
        </h2>
        <NuxtLink
          to="/#contact"
          class="inline-block px-12 py-5 bg-white text-black text-xs uppercase tracking-[0.3em] hover:bg-gray-200 transition-all duration-300 hover:scale-105 active:scale-95 font-sans font-medium"
        >
          Start a Project
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
