<script setup>
const { targetRef, isInView } = useInView({ threshold: 0.3 })
</script>

<template>
  <section id="about" ref="targetRef" class="py-32 px-6 lg:px-12 bg-[#fafaf9]">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <div :class="['relative h-[600px] overflow-hidden scroll-reveal', { 'revealed animate-fade-in-left': isInView }]">
          <img
            src="https://images.unsplash.com/photo-1580656940647-8854a00547f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBmYXNoaW9uJTIwc3RvcmV8ZW58MXx8fHwxNzY3NjQ1ODE1fDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Luxury store interior"
            class="w-full h-full object-cover transition-transform duration-600 hover:scale-105"
          />
        </div>

        <div :class="['scroll-reveal', { 'revealed animate-fade-in-right': isInView }]" style="animation-delay: 0.2s">
          <p class="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-6" style="font-family: 'Inter', sans-serif">
            About Kylva
          </p>

          <h2
            class="text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight"
            style="font-family: 'Cormorant Garamond', serif; font-weight: 300; line-height: 1.1"
          >
            Where <span class="italic" style="font-weight: 400">Luxury</span>
            <br />
            Meets Technology
          </h2>

          <div class="space-y-6 text-gray-600 text-lg leading-relaxed" style="font-family: 'Inter', sans-serif; font-weight: 300">
            <p>
              Kylva was born from a singular vision: to create digital experiences that match the sophistication and elegance of the world's finest fashion and beauty brands.
            </p>

            <p>
              We understand that luxury isn't just about aesthetics—it's about feeling, experience, and attention to every minute detail. That's why we exclusively focus on fashion and beauty e-commerce, bringing unparalleled expertise to an industry that demands perfection.
            </p>

            <p>
              Our approach combines minimalist design principles with cutting-edge technology, creating platforms that are as functional as they are beautiful. Every line of code, every pixel, every interaction is crafted with the same care your brand puts into its products.
            </p>
          </div>

          <div
            class="mt-12 inline-flex items-center gap-3 text-sm uppercase tracking-[0.3em] cursor-pointer group transition-transform duration-200 hover:translate-x-1"
            style="font-family: 'Inter', sans-serif; font-weight: 500"
          >
            Learn More About Our Process
            <span class="transform group-hover:translate-x-1 transition-transform text-[#D4AF37]">→</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>