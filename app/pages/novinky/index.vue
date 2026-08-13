<script setup lang="ts">
import { news, formatDate } from '~/data/content'

useHead({ title: 'Novinky | Lidové Tradice a Řemesla' })
</script>

<template>
  <div>
    <PageHero
      kicker="Novinky"
      title="Novinky a aktuality"
      text="Zprávy z dílny, slavností a e-shopu. Aktuální dění sledujte také na Facebooku."
      image="/images/home/vinari.jpg"
    />

    <section class="mx-auto max-w-4xl space-y-6 px-4 py-16 sm:px-6">
      <NuxtLink
        v-for="item in news"
        :key="item.slug"
        :to="`/novinky/${item.slug}`"
        class="flex flex-col gap-6 overflow-hidden rounded-2xl bg-white ring-1 ring-line sm:flex-row"
      >
        <img :src="item.image" :alt="item.title" class="h-48 w-full object-cover sm:h-auto sm:w-56">
        <div class="p-6">
          <p class="text-xs uppercase tracking-[0.18em] text-gold">{{ formatDate(item.date) }}</p>
          <h2 class="mt-2 font-display text-3xl text-wine">{{ item.title }}</h2>
          <p class="mt-3 text-muted">{{ item.excerpt }}</p>
        </div>
      </NuxtLink>
    </section>
  </div>
</template>
