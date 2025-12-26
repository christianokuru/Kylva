<!-- Path: /app/components/custom/Services/ServiceCard.vue -->
<!-- Minimalist Service Card Component -->

<script setup>
const props = defineProps({
  service: {
    type: Object,
    required: true
  }
})

const router = useRouter()

const navigateToContact = () => {
  router.push('/contact')
}
</script>

<template>
  <div class="space-y-12">
    <div class="space-y-6">
      <div class="text-xs text-muted-foreground/30">
        {{ service.num }}
      </div>

      <h2 class="text-3xl font-light text-foreground">{{ service.title }}</h2>

      <p class="text-lg text-muted-foreground">
        {{ service.desc }}
      </p>
    </div>

    <div class="grid grid-cols-2 gap-6">
      <div
        v-for="(feature, i) in service.features"
        :key="i"
        class="text-sm text-muted-foreground/40"
      >
        — {{ feature }}
      </div>
    </div>
  </div>
</template>