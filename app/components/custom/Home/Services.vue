<script setup>
const { targetRef, isInView } = useInView({ threshold: 0.2 })

const services = [
  {
    number: "01",
    title: "Fashion E-Commerce",
    description: "Bespoke online stores that embody the essence of luxury fashion. From haute couture to contemporary brands, we create digital experiences that mirror the sophistication of your collections.",
    features: ["Custom Design Systems", "Product Showcases", "Seamless Checkout"],
  },
  {
    number: "02",
    title: "Beauty Platforms",
    description: "Elegant e-commerce solutions for beauty and cosmetics brands. We craft immersive experiences that highlight your products' luxury and effectiveness with refined detail.",
    features: ["Interactive Product Views", "Shade Matching", "Subscription Systems"],
  },
  {
    number: "03",
    title: "Brand Experience",
    description: "More than just a store—a complete digital identity. We develop cohesive experiences that tell your brand's story and connect with discerning customers on a deeper level.",
    features: ["Brand Storytelling", "Editorial Layouts", "Luxury UI/UX"],
  },
]
</script>

<template>
  <section id="services" ref="targetRef" class="py-32 px-6 lg:px-12 bg-white">
    <div class="max-w-7xl mx-auto">
      <div :class="['mb-24 scroll-reveal', { 'revealed': isInView }]">
        <p class="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4" style="font-family: 'Inter', sans-serif">
          What We Do
        </p>
        <h2
          class="text-6xl md:text-7xl lg:text-8xl tracking-tight"
          style="font-family: 'Cormorant Garamond', serif; font-weight: 300; line-height: 1.1"
        >
          Specialized in
          <br />
          <span class="italic" style="font-weight: 400">Luxury Digital</span>
        </h2>
      </div>

      <div class="space-y-24">
        <div
          v-for="(service, index) in services"
          :key="service.number"
          :class="['grid md:grid-cols-12 gap-8 md:gap-12 border-t border-gray-200 pt-12 scroll-reveal', { 'revealed': isInView }]"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <div class="md:col-span-2">
            <span
              class="text-6xl text-gray-200"
              style="font-family: 'Cormorant Garamond', serif; font-weight: 300"
            >
              {{ service.number }}
            </span>
          </div>

          <div class="md:col-span-6">
            <h3
              class="text-4xl md:text-5xl mb-6 tracking-tight"
              style="font-family: 'Cormorant Garamond', serif; font-weight: 400"
            >
              {{ service.title }}
            </h3>
            <p
              class="text-gray-600 leading-relaxed text-lg"
              style="font-family: 'Inter', sans-serif; font-weight: 300"
            >
              {{ service.description }}
            </p>
          </div>

          <div class="md:col-span-4">
            <ul class="space-y-4">
              <li
                v-for="feature in service.features"
                :key="feature"
                class="flex items-center gap-3 text-sm uppercase tracking-[0.2em]"
                style="font-family: 'Inter', sans-serif; font-weight: 400"
              >
                <span class="w-8 h-px bg-[#D4AF37]" />
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>