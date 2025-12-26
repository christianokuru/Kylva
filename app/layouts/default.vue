<!-- Path: /app/layouts/default.vue -->
<!-- Minimalist Default Layout -->

<script setup>
import Navigation from '../components/custom/general/Navigation.vue'
import Footer from '../components/custom/general/Footer.vue'
</script>

<template>
  <div class="min-h-screen bg-background text-foreground">
    <!-- Skip to content link for accessibility -->
    <a href="#main-content" class="skip-to-content">
      Skip to main content
    </a>

    <Navigation />

    <main id="main-content">
      <slot />
    </main>

    <Footer />
  </div>
</template>

