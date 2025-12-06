<!-- app/app.vue -->
<script setup>
import 'vue-sonner/style.css'
import { Toaster } from '@/components/ui/sonner'
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
    <Toaster :position="'bottom-right'" :rich-colors="true" :expand="true"/>
  </div>
</template>