<script setup>
const { targetRef, isInView } = useInView({ threshold: 0.3 })

const formData = ref({
  name: "",
  email: "",
  brand: "",
  message: "",
})

const handleSubmit = () => {
  console.log("Form submitted:", formData.value)
}
</script>

<template>
  <section id="contact" ref="targetRef" class="py-32 px-6 lg:px-12 bg-[#fafaf9]">
    <div class="max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div :class="['scroll-reveal', { 'revealed animate-fade-in-left': isInView }]">
          <p class="text-xs uppercase tracking-[0.4em] text-[#D4AF37] mb-6" style="font-family: 'Inter', sans-serif">
            Get In Touch
          </p>

          <h2
            class="text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight"
            style="font-family: 'Cormorant Garamond', serif; font-weight: 300; line-height: 1.1"
          >
            Let's Create
            <br />
            <span class="italic" style="font-weight: 400">Something Exceptional</span>
          </h2>

          <p
            class="text-lg text-gray-600 leading-relaxed mb-12"
            style="font-family: 'Inter', sans-serif; font-weight: 300"
          >
            Whether you're launching a new brand or reimagining an existing one, we're here to bring your vision to life with elegance and precision.
          </p>

          <div class="space-y-6">
            <div>
              <p
                class="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2"
                style="font-family: 'Inter', sans-serif"
              >
                Email
              </p>
              <a
                href="mailto:hello@kylva.studio"
                class="text-xl hover:text-[#D4AF37] transition-colors"
                style="font-family: 'Cormorant Garamond', serif; font-weight: 400"
              >
                hello@kylva.studio
              </a>
            </div>

            <div>
              <p
                class="text-xs uppercase tracking-[0.3em] text-gray-400 mb-2"
                style="font-family: 'Inter', sans-serif"
              >
                Phone
              </p>
              <a
                href="tel:+1234567890"
                class="text-xl hover:text-[#D4AF37] transition-colors"
                style="font-family: 'Cormorant Garamond', serif; font-weight: 400"
              >
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>

        <div :class="['scroll-reveal', { 'revealed animate-fade-in-right': isInView }]" style="animation-delay: 0.2s">
          <form @submit.prevent="handleSubmit" class="space-y-8">
            <div>
              <label
                for="name"
                class="block text-xs uppercase tracking-[0.3em] mb-3"
                style="font-family: 'Inter', sans-serif; font-weight: 500"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                required
                class="w-full border-b border-gray-300 bg-transparent py-3 focus:border-[#D4AF37] focus:outline-none transition-colors text-lg"
                style="font-family: 'Inter', sans-serif; font-weight: 300"
              />
            </div>

            <div>
              <label
                for="email"
                class="block text-xs uppercase tracking-[0.3em] mb-3"
                style="font-family: 'Inter', sans-serif; font-weight: 500"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                required
                class="w-full border-b border-gray-300 bg-transparent py-3 focus:border-[#D4AF37] focus:outline-none transition-colors text-lg"
                style="font-family: 'Inter', sans-serif; font-weight: 300"
              />
            </div>

            <div>
              <label
                for="brand"
                class="block text-xs uppercase tracking-[0.3em] mb-3"
                style="font-family: 'Inter', sans-serif; font-weight: 500"
              >
                Brand Name
              </label>
              <input
                type="text"
                id="brand"
                v-model="formData.brand"
                required
                class="w-full border-b border-gray-300 bg-transparent py-3 focus:border-[#D4AF37] focus:outline-none transition-colors text-lg"
                style="font-family: 'Inter', sans-serif; font-weight: 300"
              />
            </div>

            <div>
              <label
                for="message"
                class="block text-xs uppercase tracking-[0.3em] mb-3"
                style="font-family: 'Inter', sans-serif; font-weight: 500"
              >
                Tell Us About Your Project
              </label>
              <textarea
                id="message"
                v-model="formData.message"
                required
                rows="5"
                class="w-full border-b border-gray-300 bg-transparent py-3 focus:border-[#D4AF37] focus:outline-none transition-colors resize-none text-lg"
                style="font-family: 'Inter', sans-serif; font-weight: 300"
              />
            </div>

            <button
              type="submit"
              class="w-full py-5 bg-black text-white text-sm uppercase tracking-[0.3em] transition-all duration-200 hover:scale-105 active:scale-95"
              style="font-family: 'Inter', sans-serif; font-weight: 500"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>