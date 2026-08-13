<script setup lang="ts">
import { getNews, formatDate } from '~/data/content'

const route = useRoute()
const article = computed(() => getNews(String(route.params.slug)))

if (!article.value) {
  throw createError({ statusCode: 404, statusMessage: 'Článek nebyl nalezen' })
}

useHead({
  title: () => `${article.value?.title ?? 'Novinka'} | Lidové Tradice a Řemesla`,
})
</script>

<template>
  <article v-if="article">
    <PageHero :title="article.title" :text="formatDate(article.date)" :image="article.image" kicker="Novinky" />
    <div class="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p v-for="(paragraph, index) in article.body" :key="index" class="mb-5 text-lg leading-relaxed text-muted">
        {{ paragraph }}
      </p>
      <NuxtLink to="/novinky" class="text-sm font-medium text-wine">← Zpět na novinky</NuxtLink>
    </div>
  </article>
</template>
