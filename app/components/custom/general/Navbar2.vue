<script setup>
import DarkMode from './DarkMode.vue';
</script>

<template>
    <nav class="fixed top-0 left-0 right-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-[#E5E7EB]">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-[#002455] rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-sm">SR</span>
            </div>
            <span class="font-semibold text-lg">SafeRoute</span>
          </div>
          <div class="flex items-center space-x-4">
            <button class="text-sm text-[#4B5563] hover:text-[#0A0A0A] transition-colors">
              How It Works
            </button>
            <button class="text-sm text-[#4B5563] hover:text-[#0A0A0A] transition-colors">
              About
            </button>
            <button class="px-4 py-2 text-sm font-medium text-white bg-[#FF3838] rounded-lg hover:bg-[#dc2626] transition-all">
              Get Started
            </button>
            <DarkMode />
          </div>
        </div>
      </div>
    </nav>
</template>