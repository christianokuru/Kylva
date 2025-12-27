<!-- Path: /app/components/custom/Home/BenefitsSection.vue -->
<!-- Bento-grid Benefits/Features Component -->

<script setup>
const benefits = [
  {
    title: 'Premium images',
    description: 'Handpicked fine visuals for your brand.',
    type: 'split-horizontal',
    image: 'http://daarzy.com/wp-content/uploads/2024/04/Screenshot_20240409_143416-front.png'
  },
  {
    title: 'Clean code',
    description: 'Short, maintainable, and scalable.',
    type: 'code'
  },
  {
    title: 'Fast delivery',
    originalText: 'Months',
    newText: 'Weeks',
    type: 'comparison'
  },
  {
    title: 'Responsive design',
    description: 'Every device, every screen size.',
    type: 'split-vertical',
    position: 'left',
    image: '/images/image-1.jpg'
  },
  {
    title: 'Lightning-fast',
    description: 'Optimized performance and UX.',
    type: 'split-vertical',
    position: 'right',
    image: '/images/image-1.jpg'
  }
]
</script>

<template>
  <section class="py-32 px-6 relative overflow-hidden">
    <div class="absolute inset-0 pointer-events-none">
      <div class="absolute top-1/3 left-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
      <div class="absolute bottom-1/3 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-[100px]" />
    </div>

    <div class="max-w-5xl mx-auto relative">
      <h2 class="text-4xl md:text-6xl font-light tracking-tight mb-20">
        Websites that <span class="text-accent">work</span><br>
        and look good.
      </h2>

      <!-- Bento Grid -->
      <div class="grid max-sm:grid-cols-1 md:grid-cols-2 gap-6">
        <template v-for="(benefit, index) in benefits" :key="index">
          <!-- Split Horizontal -->
          <div v-if="benefit.type === 'split-horizontal'" class="md:col-span-2 p-8 bg-muted/30 rounded-lg border border-border">
            <div class="flex flex-col md:flex-row items-center gap-8">
              <div class="flex-1">
                <h3 class="text-xl md:text-2xl font-light mb-3">{{ benefit.title }}</h3>
                <p class="text-muted-foreground">{{ benefit.description }}</p>
              </div>
              <div class="w-full md:w-1/2 rounded overflow-hidden">
                <img :src="benefit.image" :alt="benefit.title" class="w-full h-auto object-contain" loading="lazy" />
              </div>
            </div>
          </div>

          <!-- Split Vertical Left -->
          <div v-else-if="benefit.type === 'split-vertical' && benefit.position === 'left'" class="p-8 pr-0 bg-muted/30 rounded-lg border border-l border-t border-b border-r-0 border-border flex flex-col md:flex-row items-center md:gap-4">
            <div class="flex-1 pr-4 pb-6">
              <h3 class="text-xl md:text-2xl font-light mb-3">{{ benefit.title }}</h3>
              <p class="text-muted-foreground">{{ benefit.description }}</p>
            </div>
            <div
              class="rounded-l-lg overflow-hidden h-72 w-full md:w-3/5"
              :style="{ background: `#1e1e1e url('${benefit.image}') no-repeat`, backgroundSize: '200% 100%', backgroundPosition: 'left center' }"
            />
          </div>

          <!-- Split Vertical Right -->
          <div v-else-if="benefit.type === 'split-vertical' && benefit.position === 'right'" class="p-8 pl-0 bg-muted/30 rounded-lg border border-border flex flex-col md:flex-row-reverse items-center md:gap-4">
            <div class="flex-1 pl-4 pb-6">
              <h3 class="text-xl md:text-2xl font-light mb-3 text-right">{{ benefit.title }}</h3>
              <p class="text-muted-foreground text-right">{{ benefit.description }}</p>
            </div>
            <div
              class="rounded-r-lg overflow-hidden h-72 w-full md:w-3/5"
              :style="{ background: `#1e1e1e url('${benefit.image}') no-repeat`, backgroundSize: '200% 100%', backgroundPosition: 'right center' }"
            />
          </div>

          <!-- Comparison -->
          <div v-else-if="benefit.type === 'comparison'" class="p-8 bg-muted/30 rounded-lg border border-border flex flex-col items-center justify-center text-center">
            <h3 class="text-xl md:text-2xl font-light mb-3">{{ benefit.title }}</h3>
            <div class="relative mt-4">
              <span class="text-5xl opacity-10 line-through">{{ benefit.originalText }}</span>
              <span class="absolute inset-0 flex items-center justify-center text-3xl text-accent font-medium">{{ benefit.newText }}</span>
            </div>
          </div>

          <!-- Default Code Snippet -->
          <div v-else class="p-8 bg-muted/30 rounded-lg border border-border">
            <h3 class="text-xl md:text-2xl font-light mb-3">{{ benefit.title }}</h3>
            <div class="rounded bg-[#f5f5f5] dark:bg-[#1e1e1e] p-4 overflow-x-auto">
              <pre class="text-xs md:text-sm font-mono leading-relaxed text-gray-800 dark:text-gray-300"><code><span class="text-purple-600 dark:text-purple-500">import</span> { <span class="text-cyan-600 dark:text-cyan-400">ref</span>, <span class="text-cyan-600 dark:text-cyan-400">computed</span> } <span class="text-purple-600 dark:text-purple-500">from</span> <span class="text-green-600 dark:text-green-400">'vue'</span>
<span class="text-purple-600 dark:text-purple-500">import</span> { <span class="text-cyan-600 dark:text-cyan-400">useFetch</span> } <span class="text-purple-600 dark:text-purple-500">from</span> <span class="text-green-600 dark:text-green-400">'#app'</span>

<span class="text-cyan-600 dark:text-cyan-400">const</span> count = <span class="text-blue-600 dark:text-blue-400">ref</span>(<span class="text-orange-600 dark:text-orange-400">0</span>)

<span class="text-cyan-600 dark:text-cyan-400">const</span> doubleCount = <span class="text-blue-600 dark:text-blue-400">computed</span>(() <span class="text-purple-600 dark:text-purple-500">=></span> count.<span class="text-cyan-600 dark:text-cyan-400">value</span> * <span class="text-orange-600 dark:text-orange-400">2</span>)

<span class="text-cyan-600 dark:text-cyan-400">const</span> { data } = <span class="text-blue-600 dark:text-blue-400">await</span> <span class="text-green-600 dark:text-green-400">useFetch</span>(<span class="text-green-600 dark:text-green-400">'/api/data'</span>)</code></pre>
            </div>
          </div>
        </template>
      </div>
    </div>
  </section>
</template>
