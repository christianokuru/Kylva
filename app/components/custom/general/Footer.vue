<script setup>
import Logo from "@/components/custom/general/Logo.vue";

const currentYear = new Date().getFullYear();
const { goToSection } = useSectionNav();
const { getAllProjects } = useProjects();
const projects = getAllProjects();

const { email, whatsappUrl } = useContact();
import { solutions } from "~/data/solutions";
const sections = ["services", "about", "work", "process", "faq", "contact"];
</script>

<template>
  <footer class="bg-black text-white py-16 px-6 lg:px-12">
    <div class="max-w-7xl mx-auto">
      <div class="grid sm:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
        <div>
          <NuxtLink to="/" aria-label="Kylva home" class="inline-block mb-6">
            <Logo variant="white" size="lg" />
          </NuxtLink>
          <p class="text-gray-400 text-sm leading-relaxed font-sans font-light">
            Custom online stores for fashion and beauty brands. No templates, no
            monthly platform fees.
          </p>
        </div>

        <nav aria-label="Footer">
          <h3
            class="text-xs uppercase tracking-[0.3em] mb-6 font-sans font-medium"
          >
            Quick Links
          </h3>
          <ul class="space-y-1">
            <li v-for="section in sections" :key="section">
              <a
                :href="`/#${section}`"
                @click.prevent="goToSection(section)"
                class="inline-block py-1.5 capitalize text-gray-400 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 font-sans font-light"
              >
                {{ section === "faq" ? "FAQ" : section }}
              </a>
            </li>
          </ul>
        </nav>

        <nav aria-label="Solutions">
          <h3 class="text-xs uppercase tracking-[0.3em] mb-6 font-sans font-medium">
            Solutions
          </h3>
          <ul class="space-y-1">
            <li v-for="s in solutions" :key="s.slug">
              <NuxtLink
                :to="`/solutions/${s.slug}`"
                class="inline-block py-1.5 text-gray-400 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 font-sans font-light"
                >{{ s.label }}</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/shopify-cost-calculator"
                class="inline-block py-1.5 text-gray-400 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 font-sans font-light"
                >Shopify cost calculator</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/blog"
                class="inline-block py-1.5 text-gray-400 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 font-sans font-light"
                >Guides</NuxtLink
              >
            </li>
          </ul>
        </nav>

        <nav aria-label="Projects">
          <h3
            class="text-xs uppercase tracking-[0.3em] mb-6 font-sans font-medium"
          >
            Projects
          </h3>
          <ul class="space-y-1">
            <li v-for="project in projects" :key="project.slug">
              <NuxtLink
                :to="`/projects/${project.slug}`"
                class="inline-block py-1.5 text-gray-400 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 font-sans font-light"
              >
                {{ project.title }}
              </NuxtLink>
            </li>
            <li>
              <NuxtLink
                to="/projects"
                class="inline-block py-1.5 text-gray-400 hover:text-white transition-all duration-200 text-sm hover:translate-x-1 font-sans font-light"
              >
                All projects →
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <div>
          <h3
            class="text-xs uppercase tracking-[0.3em] mb-6 font-sans font-medium"
          >
            Connect
          </h3>
          <ul class="space-y-1">
            <li>
              <a
                href="/#contact"
                @click.prevent="goToSection('contact')"
                class="inline-block py-1.5 text-gray-400 hover:text-white transition-colors text-sm font-sans font-light"
                >Get a free quote</a
              >
            </li>
            <li v-if="whatsappUrl()">
              <a
                :href="whatsappUrl()"
                target="_blank"
                rel="noopener"
                class="inline-block py-1.5 text-gray-400 hover:text-white transition-colors text-sm font-sans font-light"
                >WhatsApp</a
              >
            </li>
            <li v-if="email">
              <a
                :href="`mailto:${email}`"
                class="inline-block py-1.5 text-gray-400 hover:text-white transition-colors text-sm font-sans font-light break-all"
                >{{ email }}</a
              >
            </li>
          </ul>
        </div>
      </div>

      <div
        class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-sans font-light"
      >
        <p>© {{ currentYear }} Kylva. All rights reserved.</p>
        <p>
          Made with love by
          <a
            href="https://okuru-christian.vercel.app"
            target="_blank"
            rel="noopener"
            class="inline-block py-1.5 text-gray-300 underline underline-offset-4 decoration-gray-600 hover:text-[#D4AF37] hover:decoration-[#D4AF37] transition-colors"
            >Okuru Christian</a
          >
        </p>
      </div>
    </div>
  </footer>
</template>
