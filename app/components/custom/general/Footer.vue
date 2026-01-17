<script setup>
import Logo from "@/components/custom/general/Logo.vue";

const currentYear = new Date().getFullYear();

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
</script>

<template>
  <footer class="bg-black text-white py-16 px-6 lg:px-12">
    <div class="max-w-7xl mx-auto">
      <div class="grid md:grid-cols-3 gap-12 mb-16">
        <div>
          <Logo variant="white" class="mb-6" />
          <p
            class="text-gray-400 text-sm leading-relaxed"
            style="font-family: 'Inter', sans-serif; font-weight: 300"
          >
            Crafting exceptional e-commerce experiences for luxury fashion and
            beauty brands.
          </p>
        </div>

        <div>
          <h3
            class="text-xs uppercase tracking-[0.3em] mb-6"
            style="font-family: 'Inter', sans-serif; font-weight: 500"
          >
            Quick Links
          </h3>
          <ul class="space-y-3">
            <li
              v-for="link in [
                'Services',
                'About',
                'Work',
                'Testimonials',
                'Contact',
              ]"
              :key="link"
            >
              <button
                @click="scrollToSection(link.toLowerCase())"
                class="text-gray-400 hover:text-white transition-all duration-200 text-sm hover:translate-x-1"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 300;
                "
              >
                {{ link }}
              </button>
            </li>
          </ul>
        </div>

        <div>
          <h3
            class="text-xs uppercase tracking-[0.3em] mb-6"
            style="font-family: 'Inter', sans-serif; font-weight: 500"
          >
            Connect
          </h3>
          <ul class="space-y-3">
            <li>
              <a
                href="mailto:okuruchristian@gmail.com"
                class="text-gray-400 hover:text-white transition-colors text-sm"
                style="
                  font-family: 'Inter', sans-serif;
                  font-weight: 300;
                "
              >
                okuruchristian@gmail.com
              </a>
            </li>
          </ul>

          <div class="flex gap-4 mt-6">
            <a
              v-for="social in ['Instagram', 'LinkedIn', 'Behance']"
              :key="social"
              href="#"
              class="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-[#D4AF37] transition-all duration-200 hover:-translate-y-1"
              style="
                font-family: 'Inter', sans-serif;
                font-weight: 400;
              "
            >
              {{ social }}
            </a>
          </div>
        </div>
      </div>

      <div
        class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4"
      >
        <p
          class="text-xs text-gray-500"
          style="font-family: 'Inter', sans-serif; font-weight: 300"
        >
          © {{ currentYear }} Kylva. All rights reserved.
        </p>
        <div class="flex gap-8">
          <a
            href="#"
            class="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em]"
            style="font-family: 'Inter', sans-serif; font-weight: 300"
          >
            Privacy Policy
          </a>
          <a
            href="#"
            class="text-xs text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em]"
            style="font-family: 'Inter', sans-serif; font-weight: 300"
          >
            Terms of Service
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
