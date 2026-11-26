<script setup>
// Gold Kylva wordmark. Works on light and dark backgrounds.
// `variant` is kept for existing callers; `size="lg"` is used in the footer.
defineProps({
  variant: { type: String, default: "white" },
  size: { type: String, default: "md" },
});
</script>

<template>
  <img
    src="/kylva-wordmark.webp"
    alt="Kylva"
    width="480"
    height="154"
    :class="size === 'lg' ? 'h-14 w-auto' : 'h-10 md:h-11 w-auto'"
    decoding="async"
  />
</template>
