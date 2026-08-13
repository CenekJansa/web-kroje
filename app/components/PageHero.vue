<script setup lang="ts">
defineProps<{
  kicker?: string
  title: string
  text?: string
  image?: string
}>()
</script>

<template>
  <section class="relative overflow-hidden bg-wine-dark text-cream">
    <div class="absolute inset-0">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="h-full w-full object-cover opacity-35"
      >
      <div class="absolute inset-0 bg-gradient-to-r from-wine-dark via-wine-dark/85 to-wine/40" />
    </div>
    <div class="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
      <p v-if="kicker" class="text-xs uppercase tracking-[0.28em] text-gold">{{ kicker }}</p>
      <h1 class="mt-3 max-w-3xl font-display text-4xl font-semibold leading-tight sm:text-6xl">{{ title }}</h1>
      <p v-if="text" class="mt-5 max-w-2xl text-base text-cream/80 sm:text-lg">{{ text }}</p>
    </div>
  </section>
</template>
