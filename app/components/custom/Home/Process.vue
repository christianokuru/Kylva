<!-- Path: /app/components/custom/Home/Process.vue -->
<script setup>
const { goToSection } = useSectionNav();

// Pre-select the package in the contact form, then scroll there.
const chosenService = useState("contact-service", () => "");
const choose = (name) => {
  chosenService.value = name;
  goToSection("contact");
};

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your brand, your products and your customers, then agree on the features, budget and timeline together.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We design the look and feel of your store, page by page, and refine it with you until it feels unmistakably yours.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We build your store from scratch, connect your payments, and test every page on phones, tablets and desktops.",
  },
  {
    number: "04",
    title: "Launch & Handover",
    description:
      "Your store goes live, we hand over the full codebase, and you get 3 months of support. The code belongs to you.",
  },
];

const stack = [
  { name: "Next.js", role: "Fast store pages" },
  { name: "Nuxt", role: "Fast store pages" },
  { name: "Postgres", role: "Products, orders & accounts" },
  { name: "Stripe", role: "Global payments" },
  { name: "Paystack", role: "Payments in Africa" },
  { name: "Flutterwave", role: "Payments in Africa" },
];

const packages = [
  {
    name: "Launch",
    price: "$500",
    for: "New brands with a small range",
    features: [
      "Up to 30 products",
      "Mobile-first custom design",
      "Card + one payment provider",
      "Order emails",
      "Simple admin to add products and see orders",
    ],
  },
  {
    name: "Growth",
    price: "$1,200",
    for: "Brands ready to sell every day",
    featured: true,
    features: [
      "Everything in Launch",
      "Unlimited products, sizes and shades",
      "Customer accounts and order tracking",
      "Discount codes and bundles",
      "Sales dashboard and stock alerts",
      "Search engine setup",
    ],
  },
  {
    name: "Flagship",
    price: "$2,500+",
    for: "Established brands",
    features: [
      "Everything in Growth",
      "Several currencies and payment providers",
      "Quizzes, lookbooks and editorial pages",
      "Referral and loyalty rewards",
      "Installable app (PWA) and phone alerts",
      "Priority support",
    ],
  },
];
</script>

<template>
  <section id="process" class="py-32 px-6 lg:px-12 bg-white">
    <div class="max-w-7xl mx-auto">
      <!-- Heading -->
      <div class="mb-24" data-aos="fade-up">
        <p
          class="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4 font-sans"
        >
          How We Work
        </p>
        <h2
          class="text-6xl md:text-7xl lg:text-8xl tracking-tight mb-8 font-serif font-light leading-[1.1]"
        >
          From First Call to
          <span class="italic" style="font-weight: 400">Launch</span>
        </h2>
        <p
          class="text-xs md:text-xl text-gray-600 leading-relaxed max-w-3xl font-sans font-light"
        >
          Every store is custom-built, never a template. We work with brands
          anywhere in the world, and you always know what happens next.
        </p>
      </div>

      <!-- Steps -->
      <ol class="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16 mb-32">
        <li
          v-for="(step, index) in steps"
          :key="step.number"
          class="border-t border-gray-200 pt-8"
          data-aos="fade-up"
          :data-aos-delay="index * 100"
        >
          <span
            class="block text-5xl text-gray-300 mb-6 font-serif font-light"
            aria-hidden="true"
          >
            {{ step.number }}
          </span>
          <h3 class="text-3xl mb-4 tracking-tight font-serif font-normal">
            {{ step.title }}
          </h3>
          <p class="text-gray-600 text-sm leading-relaxed font-sans font-light">
            {{ step.description }}
          </p>
        </li>
      </ol>

      <!-- Tech stack -->
      <div class="mb-32" data-aos="fade-up">
        <h3
          class="text-xs uppercase tracking-[0.3em] text-gray-500 mb-10 font-sans font-medium"
        >
          Built with
        </h3>
        <ul
          class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 border-t border-l border-gray-200"
        >
          <li
            v-for="tool in stack"
            :key="tool.name"
            class="border-r border-b border-gray-200 px-6 py-8"
          >
            <span
              class="block text-2xl md:text-3xl tracking-tight mb-2 font-serif font-normal"
            >
              {{ tool.name }}
            </span>
            <span
              class="block text-[11px] uppercase tracking-[0.2em] text-gray-500 font-sans"
            >
              {{ tool.role }}
            </span>
          </li>
        </ul>
      </div>

      <!-- Packages -->
      <div id="pricing" data-aos="fade-up">
        <p
          class="text-xs uppercase tracking-[0.4em] text-[#8a6d12] mb-4 font-sans"
        >
          Packages
        </p>
        <h3
          class="text-4xl md:text-6xl tracking-tight mb-4 font-serif font-light leading-[1.1]"
        >
          Clear prices, <span class="italic" style="font-weight: 400">no monthly fees</span>
        </h3>
        <p
          class="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mb-12 font-sans font-light"
        >
          One payment for the build. Every package includes 3 months of support
          and the full codebase. You only pay for hosting and payment fees, not a
          platform subscription.
        </p>

        <ul class="grid md:grid-cols-3 gap-6">
          <li
            v-for="pkg in packages"
            :key="pkg.name"
            :class="[
              'flex flex-col p-8 md:p-10 border',
              pkg.featured
                ? 'bg-black text-white border-black'
                : 'bg-white text-black border-gray-200',
            ]"
          >
            <p
              :class="[
                'text-xs uppercase tracking-[0.3em] mb-2 font-sans font-medium',
                pkg.featured ? 'text-[#D4AF37]' : 'text-[#8a6d12]',
              ]"
            >
              {{ pkg.name }}<template v-if="pkg.featured"> · Most popular</template>
            </p>
            <p class="text-5xl tracking-tight mb-2 font-serif font-light">
              {{ pkg.price }}
            </p>
            <p
              :class="[
                'text-sm mb-8 font-sans font-light',
                pkg.featured ? 'text-gray-300' : 'text-gray-600',
              ]"
            >
              {{ pkg.for }}
            </p>
            <ul class="space-y-3 mb-10 flex-1">
              <li
                v-for="f in pkg.features"
                :key="f"
                class="flex gap-3 text-sm font-sans font-light"
              >
                <span aria-hidden="true" class="text-[#D4AF37]">✓</span>
                {{ f }}
              </li>
            </ul>
            <a
              href="/#contact"
              @click.prevent="choose(pkg.name)"
              :class="[
                'block text-center px-8 py-4 text-xs uppercase tracking-[0.3em] transition-colors duration-300 font-sans font-medium',
                pkg.featured
                  ? 'bg-white text-black hover:bg-gray-200'
                  : 'bg-black text-white hover:bg-gray-800',
              ]"
            >
              Get a quote
            </a>
          </li>
        </ul>

        <!-- Free review offer -->
        <div
          class="mt-6 border border-dashed border-gray-300 p-8 md:p-10 grid md:grid-cols-12 gap-6 items-center"
        >
          <div class="md:col-span-8">
            <p class="text-2xl md:text-3xl font-serif font-normal mb-2">
              Not ready yet? Get a free store review.
            </p>
            <p class="text-sm text-gray-600 font-sans font-light leading-relaxed">
              Send us your current store or Instagram shop. Within 48 hours you
              get a short video with 5 fixes to sell more, whether or not you
              work with us.
            </p>
          </div>
          <div class="md:col-span-4 md:text-right">
            <a
              href="/#contact"
              @click.prevent="choose('Free store review')"
              class="inline-block px-8 py-4 border border-black text-xs uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-colors duration-300 font-sans font-medium"
            >
              Get my free review
            </a>
          </div>
        </div>

        <p class="mt-8 text-center text-sm text-gray-600 font-sans">
          On Shopify now?
          <NuxtLink to="/shopify-cost-calculator" class="text-black underline underline-offset-4 decoration-[#D4AF37]">See how much you'd save with our free calculator →</NuxtLink>
        </p>
      </div>
    </div>
  </section>
</template>
