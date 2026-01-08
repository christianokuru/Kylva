<script setup>
const { targetRef, isInView } = useInView({ threshold: 0.2 })

const testimonials = [
  {
    quote: "Kylva transformed our vision into a digital masterpiece. The attention to detail and understanding of luxury e-commerce is unparalleled.",
    author: "Sophie Laurent",
    position: "Creative Director",
    brand: "Maison Noir",
  },
  {
    quote: "Working with Kylva felt like partnering with artisans who truly understand the beauty industry. Our online presence now matches our product quality.",
    author: "Isabella Chen",
    position: "Founder & CEO",
    brand: "Lumière Beauty",
  },
  {
    quote: "The sophistication and elegance they brought to our e-commerce platform exceeded all expectations. Our customers notice the difference.",
    author: "Alexandre Dubois",
    position: "Brand Director",
    brand: "Essence Parfums",
  },
]
</script>

<template>
  <section id="testimonials" ref="targetRef" class="py-32 px-6 lg:px-12 bg-white">
    <div class="max-w-7xl mx-auto">
      <div :class="['mb-24 text-center scroll-reveal', { 'revealed': isInView }]">
        <p class="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-4" style="font-family: 'Inter', sans-serif">
          Client Testimonials
        </p>
        <h2
          class="text-6xl md:text-7xl lg:text-8xl tracking-tight"
          style="font-family: 'Cormorant Garamond', serif; font-weight: 300; line-height: 1.1"
        >
          <span class="italic" style="font-weight: 400">Trusted</span> by the Best
        </h2>
      </div>

      <div class="grid lg:grid-cols-3 gap-12">
        <div
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.author"
          :class="['border-t border-gray-200 pt-8 scroll-reveal', { 'revealed': isInView }]"
          :style="{ animationDelay: `${index * 0.2}s` }"
        >
          <p
            class="text-2xl md:text-3xl mb-12 leading-relaxed"
            style="font-family: 'Cormorant Garamond', serif; font-weight: 300; font-style: italic"
          >
            "{{ testimonial.quote }}"
          </p>

          <div>
            <p
              class="text-lg mb-1"
              style="font-family: 'Cormorant Garamond', serif; font-weight: 500"
            >
              {{ testimonial.author }}
            </p>
            <p
              class="text-sm text-gray-500 mb-1"
              style="font-family: 'Inter', sans-serif; font-weight: 300"
            >
              {{ testimonial.position }}
            </p>
            <p
              class="text-xs uppercase tracking-[0.2em] text-[#D4AF37]"
              style="font-family: 'Inter', sans-serif; font-weight: 500"
            >
              {{ testimonial.brand }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>