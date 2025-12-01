<script setup>
const scrollY = ref(0)

const problems = [
  {
    icon: "🚨",
    title: "Highway Insecurity",
    description: "Kidnapping, armed robbery, and attacks leave travelers vulnerable on Nigerian roads"
  },
  {
    icon: "⏱️",
    title: "Delayed Response",
    description: "Hours of waiting when minutes matter most. Help is too far away"
  },
  {
    icon: "🤝",
    title: "No Community Coordination",
    description: "Nigerians willing to help, but no way to connect during emergencies"
  }
]

const steps = [
  {
    number: "01",
    title: "Alert",
    description: "Press panic button → Broadcasts to 50km radius + your emergency contacts instantly"
  },
  {
    number: "02",
    title: "Respond",
    description: "Nearby SafeRoute members see your alert and choose to help"
  },
  {
    number: "03",
    title: "Connect",
    description: "Real-time tracking, chat, and coordination until you're safe"
  }
]

const stats = [
  { value: "0+", label: "Active Members" },
  { value: "0+", label: "Communities Protected" },
  { value: "0min", label: "Average Response Time" }
]

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollY.value = window.scrollY
  })
})
</script>

<template>
  <div class="min-h-screen bg-[#FAFAFA] dark:bg-[#0A0A0A] text-[#0A0A0A] dark:text-[#FAFAFA]">
    <!-- Navigation -->
    

    <!-- Hero Section -->
    <section class="pt-16 pb-24 px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <div class="inline-flex items-center space-x-2 px-4 py-2 bg-[#F3F4F6] dark:bg-[#1F2937] rounded-full mb-8">
          <span class="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></span>
          <span class="text-sm text-[#4B5563] dark:text-[#9CA3AF]">Community-Driven Emergency Response</span>
        </div>
        
        <h1 class="text-5xl lg:text-6xl font-bold tracking-tight mb-6 leading-tight">
          See Something.<br />
          Say Something.<br />
          <span class="text-[#002455] dark:text-[#3B82F6]">Save Someone.</span>
        </h1>
        
        <p class="text-xl text-[#4B5563] dark:text-[#9CA3AF] mb-12 max-w-2xl mx-auto leading-relaxed">
          Nigeria's community-driven emergency response network. When you travel, you're never alone.
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
          <NuxtLink
            to="/auth/register"
            class="w-full sm:w-auto"
          >
            <button class="w-full px-8 py-4 text-base font-semibold text-white bg-[#FF3838] rounded-lg hover:bg-[#dc2626] transition-all shadow-sm hover:shadow-md">
              Join SafeRoute Network
            </button>
          </NuxtLink>
          <NuxtLink
            to="/auth/register"
            class="w-full sm:w-auto"
          >
            <button class="w-full px-8 py-4 text-base font-semibold text-[#002455] dark:text-[#3B82F6] border-2 border-[#002455] dark:border-[#3B82F6] rounded-lg hover:bg-[#002455] dark:hover:bg-[#3B82F6] hover:text-white transition-all">
              Get Started
            </button>
          </NuxtLink>
        </div>

        <div class="mt-16 text-sm text-[#4B5563] dark:text-[#9CA3AF]">
          Free to join • Available on all devices
        </div>
      </div>

      <!-- Hero Visual - Abstract Network -->
      <div class="max-w-5xl mx-auto mt-20">
        <div class="relative h-64 bg-linear-to-b from-[#F9FAFB] dark:from-[#111827] to-transparent rounded-2xl border border-[#E5E7EB] dark:border-[#374151] overflow-hidden">
          <div class="absolute inset-0 flex items-center justify-center">
            <svg class="w-full h-full" viewBox="0 0 800 300">
              <!-- Connection nodes representing community network -->
              <circle cx="400" cy="150" r="8" fill="#FF3838" class="animate-pulse" />
              <circle cx="300" cy="100" r="6" fill="#002455" dark:fill="#3B82F6" opacity="0.6" />
              <circle cx="500" cy="120" r="6" fill="#002455" dark:fill="#3B82F6" opacity="0.6" />
              <circle cx="350" cy="200" r="6" fill="#002455" dark:fill="#3B82F6" opacity="0.6" />
              <circle cx="450" cy="180" r="6" fill="#002455" dark:fill="#3B82F6" opacity="0.6" />
              <circle cx="250" cy="150" r="5" fill="#10B981" opacity="0.4" />
              <circle cx="550" cy="160" r="5" fill="#10B981" opacity="0.4" />
              
              <!-- Connection lines -->
              <line x1="400" y1="150" x2="300" y2="100" stroke="#E5E7EB" dark:stroke="#374151" stroke-width="2" />
              <line x1="400" y1="150" x2="500" y2="120" stroke="#E5E7EB" dark:stroke="#374151" stroke-width="2" />
              <line x1="400" y1="150" x2="350" y2="200" stroke="#E5E7EB" dark:stroke="#374151" stroke-width="2" />
              <line x1="400" y1="150" x2="450" y2="180" stroke="#E5E7EB" dark:stroke="#374151" stroke-width="2" />
              <line x1="300" y1="100" x2="250" y2="150" stroke="#E5E7EB" dark:stroke="#374151" stroke-width="1" />
              <line x1="500" y1="120" x2="550" y2="160" stroke="#E5E7EB" dark:stroke="#374151" stroke-width="1" />
            </svg>
          </div>
        </div>
      </div>
    </section>

    <!-- Problems Section -->
    <section class="py-24 px-6 lg:px-8 bg-white dark:bg-[#0A0A0A]">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">The Challenge We Face</h2>
          <p class="text-lg text-[#4B5563] dark:text-[#9CA3AF] max-w-2xl mx-auto">
            Nigerian travelers face unique security challenges that demand immediate solutions
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div
            v-for="(problem, index) in problems"
            :key="index"
            class="group p-8 bg-[#FAFAFA] dark:bg-[#1F2937] rounded-2xl border border-[#E5E7EB] dark:border-[#374151] hover:border-[#002455] dark:hover:border-[#3B82F6] transition-all"
          >
            <div class="text-5xl mb-6">{{ problem.icon }}</div>
            <h3 class="text-xl font-semibold mb-4">{{ problem.title }}</h3>
            <p class="text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed">{{ problem.description }}</p>
          </div>
        </div>

        <div class="mt-16 text-center">
          <div class="inline-block px-6 py-3 bg-[#10B981]/10 dark:bg-[#10B981]/20 rounded-full">
            <p class="text-sm font-medium text-[#10B981]">
              ✓ SafeRoute connects Nigerians to help each other during emergencies
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works Section -->
    <section class="py-24 px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-4">How It Works</h2>
          <p class="text-lg text-[#4B5563] dark:text-[#9CA3AF] max-w-2xl mx-auto">
            Simple, fast, and effective emergency response in three steps
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-12">
          <div
            v-for="(step, index) in steps"
            :key="index"
            class="relative"
          >
            <div class="flex items-start space-x-4">
              <div class="flex-shrink-0">
                <div class="w-16 h-16 bg-[#002455] dark:bg-[#3B82F6] text-white rounded-2xl flex items-center justify-center font-bold text-xl">
                  {{ step.number }}
                </div>
              </div>
              <div class="flex-1 pt-2">
                <h3 class="text-2xl font-semibold mb-4">{{ step.title }}</h3>
                <p class="text-[#4B5563] dark:text-[#9CA3AF] leading-relaxed">{{ step.description }}</p>
              </div>
            </div>
            <div
              v-if="index < steps.length - 1"
              class="hidden lg:block absolute top-8 right-0 w-full h-0.5 bg-gradient-to-r from-[#E5E7EB] dark:from-[#374151] to-transparent transform translate-x-1/2"
            ></div>
          </div>
        </div>

        <!-- Responder Flow -->
        <div class="mt-20 p-10 bg-gradient-to-br from-[#F9FAFB] dark:from-[#111827] to-white dark:to-[#0A0A0A] rounded-3xl border border-[#E5E7EB] dark:border-[#374151]">
          <div class="max-w-3xl mx-auto text-center">
            <div class="w-12 h-12 bg-[#10B981] rounded-xl flex items-center justify-center mx-auto mb-6">
              <span class="text-white text-2xl">🤝</span>
            </div>
            <h3 class="text-2xl font-semibold mb-4">Be a Responder</h3>
            <p class="text-[#4B5563] dark:text-[#9CA3AF] text-lg leading-relaxed mb-6">
              Every Nigerian can help. See alerts near you → Choose to respond → Help someone reach safety
            </p>
            <button class="px-6 py-3 text-sm font-medium text-[#10B981] border-2 border-[#10B981] rounded-lg hover:bg-[#10B981] hover:text-white transition-all">
              Learn About Becoming a Responder
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Community Impact Section -->
    <section class="py-24 px-6 lg:px-8 bg-[#002455] dark:bg-[#1E3A8A] text-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl font-bold mb-6">Every Nigerian Can Be a Responder</h2>
          <p class="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Every alert makes our roads safer. Together, we're building a safer Nigeria.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 mb-16">
          <div
            v-for="(stat, index) in stats"
            :key="index"
            class="text-center p-8 bg-white/5 rounded-2xl border border-white/10"
          >
            <div class="text-5xl font-bold mb-2">{{ stat.value }}</div>
            <div class="text-white/70">{{ stat.label }}</div>
          </div>
        </div>

        <div class="text-center">
          <p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            "Your phone is now your lifeline. Safety is a community responsibility. Don't just witness—respond."
          </p>
        </div>
      </div>
    </section>

    <!-- Final CTA Section -->
    <section class="py-24 px-6 lg:px-8">
      <div class="max-w-4xl mx-auto text-center">
        <h2 class="text-5xl font-bold mb-6">
          Make Nigerian Roads<br />Safer Together
        </h2>
        <p class="text-xl text-[#4B5563] dark:text-[#9CA3AF] mb-12 max-w-2xl mx-auto">
          Join thousands of Nigerians committed to protecting each other. Your presence makes every journey safer.
        </p>
        
        <NuxtLink to="/auth/register">
        <button class="px-10 py-5 text-lg font-semibold text-white bg-[#FF3838] rounded-lg hover:bg-[#dc2626] transition-all shadow-lg hover:shadow-xl">
          Join SafeRoute Network
        </button>
      </NuxtLink>
        
        <div class="mt-6 text-sm text-[#4B5563] dark:text-[#9CA3AF]">
          Free to join • Available on all devices
        </div>

        <div class="mt-16 pt-12 border-t border-[#E5E7EB] dark:border-[#374151]">
          <div class="flex flex-wrap justify-center items-center gap-8 text-sm text-[#4B5563] dark:text-[#9CA3AF]">
            <span>🇳🇬 Made for Nigeria</span>
            <span>🔒 Secure & Private</span>
            <span>📱 Works Offline</span>
            <span>⚡ Real-time Alerts</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="py-12 px-6 lg:px-8 bg-white dark:bg-[#0A0A0A] border-t border-[#E5E7EB] dark:border-[#374151]">
      <div class="max-w-7xl mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex items-center space-x-2 mb-4 md:mb-0">
            <div class="w-8 h-8 bg-[#002455] rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">SR</span>
            </div>
            <span class="font-semibold">SafeRoute</span>
          </div>
          <div class="flex items-center space-x-6 text-sm text-[#4B5563] dark:text-[#9CA3AF]">
            <a href="#" class="hover:text-[#0A0A0A] dark:hover:text-[#FAFAFA] transition-colors">Privacy Policy</a>
            <a href="#" class="hover:text-[#0A0A0A] dark:hover:text-[#FAFAFA] transition-colors">Terms of Service</a>
            <a href="#" class="hover:text-[#0A0A0A] dark:hover:text-[#FAFAFA] transition-colors">Contact</a>
          </div>
        </div>
        <div class="mt-8 text-center text-sm text-[#4B5563] dark:text-[#9CA3AF]">
          © 2024 SafeRoute. Building a safer Nigeria, together.
        </div>
      </div>
    </footer>
  </div>
</template>