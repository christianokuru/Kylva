<!-- Path: /app/layouts/default.vue -->

<script setup>
import Navbar from "../components/custom/general/Navbar.vue";
import Footer from "../components/custom/general/Footer.vue";
import MobileCta from "../components/custom/general/MobileCta.vue";
import ExitOffer from "../components/custom/general/ExitOffer.vue";
</script>

<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
    <Footer />
    <MobileCta />
    <ClientOnly><ExitOffer /></ClientOnly>
  </div>
</template>
