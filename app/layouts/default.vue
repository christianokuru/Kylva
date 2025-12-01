<script setup>
import Navbar from '~/components/custom/general/Navbar.vue';
</script>
<template>
  <div>
    <Navbar />
    <main>
      <slot />
    </main>
  </div>
</template>