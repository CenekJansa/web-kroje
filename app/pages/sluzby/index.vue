<script setup lang="ts">
import { serviceGroups, servicesByGroup } from '~/data/content'

useHead({ title: 'Služby | Lidové Tradice a Řemesla' })
</script>

<template>
  <div>
    <PageHero
      kicker="Služby"
      title="Od šití kroje po ruční tkaní"
      text="Kompletní péče o lidový kroj i další řemeslná práce. Vyberte si, s čím vám můžeme pomoct."
      image="/images/about/zkouska-kroje.jpg"
    />

    <section v-for="group in serviceGroups" :key="group.id" class="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 class="font-display text-4xl text-wine">{{ group.title }}</h2>
      <div class="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          v-for="item in servicesByGroup(group.id)"
          :key="item.slug"
          :to="`/sluzby/${item.slug}`"
          :title="item.title"
          :excerpt="item.excerpt"
          :image="item.image"
        />
      </div>
    </section>
  </div>
</template>
