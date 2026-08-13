<script setup lang="ts">
defineProps<{
  to: string
  title: string
  excerpt: string
  image: string
}>()
</script>

<template>
  <NuxtLink :to="to" class="group overflow-hidden rounded-2xl bg-white shadow-[0_12px_40px_rgba(28,20,18,0.06)] ring-1 ring-line transition hover:-translate-y-1 hover:shadow-[0_18px_50px_rgba(122,26,26,0.12)]">
    <div class="aspect-[4/3] overflow-hidden">
      <img :src="image" :alt="title" class="h-full w-full object-cover transition duration-700 group-hover:scale-105">
    </div>
    <div class="p-5">
      <h3 class="font-display text-2xl font-semibold text-wine">{{ title }}</h3>
      <p class="mt-2 text-sm leading-relaxed text-muted">{{ excerpt }}</p>
      <span class="mt-4 inline-flex items-center gap-2 text-sm font-medium text-wine">
        Více
        <span aria-hidden="true" class="transition group-hover:translate-x-1">→</span>
      </span>
    </div>
  </NuxtLink>
</template>
