<script setup lang="ts">
import { getService, services, rentalPrices } from '~/data/content'

const route = useRoute()
const service = computed(() => getService(String(route.params.slug)))

if (!service.value) {
  throw createError({ statusCode: 404, statusMessage: 'Služba nebyla nalezena' })
}

useHead({
  title: () => `${service.value?.title ?? 'Služba'} | Lidové Tradice a Řemesla`,
})

const related = computed(() =>
  services.filter((item) => item.group === service.value?.group && item.slug !== service.value?.slug).slice(0, 3),
)
</script>

<template>
  <div v-if="service">
    <PageHero :title="service.title" :text="service.excerpt" :image="service.image" kicker="Služby" />

    <section class="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
      <article class="space-y-5 text-lg leading-relaxed text-muted">
        <p v-for="(paragraph, index) in service.body" :key="index">{{ paragraph }}</p>
      </article>
      <img :src="service.image" :alt="service.title" class="rounded-2xl object-cover">
    </section>

    <section v-if="service.extra === 'cenik'" class="bg-cream/70">
      <div class="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 class="font-display text-4xl text-wine">Ceník půjčování</h2>
        <p class="mt-3 text-sm text-muted">Ceny jsou orientační podle původního ceníku. Aktuální nabídku rádi ověříme telefonicky.</p>
        <div v-for="group in rentalPrices" :key="group.kind" class="mt-8 overflow-hidden rounded-2xl bg-white ring-1 ring-line">
          <div class="bg-wine px-4 py-3 font-display text-xl text-cream">{{ group.kind }}</div>
          <table class="w-full text-left text-sm">
            <thead class="text-muted">
              <tr>
                <th class="px-4 py-3 font-medium">Součásti</th>
                <th class="px-4 py-3 font-medium">Cena</th>
                <th class="px-4 py-3 font-medium">Kauce</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="row in group.rows" :key="row[0]" class="border-t border-line">
                <td class="px-4 py-3">{{ row[0] }}</td>
                <td class="px-4 py-3">{{ row[1] }}</td>
                <td class="px-4 py-3">{{ row[2] }}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 class="font-display text-3xl text-wine">Další služby</h2>
      <div class="mt-8 grid gap-6 md:grid-cols-3">
        <ServiceCard
          v-for="item in related"
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
