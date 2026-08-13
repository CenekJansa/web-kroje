<script setup lang="ts">
import { albums, gallery } from '~/data/content'

useHead({ title: 'Fotogalerie | Lidové Tradice a Řemesla' })

const active = ref<'all' | string>('all')
const filtered = computed(() =>
  active.value === 'all' ? gallery : gallery.filter((item) => item.album === active.value),
)

const opened = ref<(typeof gallery)[number] | null>(null)
</script>

<template>
  <div>
    <PageHero
      kicker="Fotogalerie"
      title="Kroje, dílna a slavnosti"
      text="Snímky z hodů, dílny u zámku a kurzů lidových řemesel."
      image="/images/home/hodovy-pruvod.jpg"
    />

    <section class="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div class="flex flex-wrap gap-2">
        <button
          type="button"
          class="rounded-full px-4 py-2 text-sm"
          :class="active === 'all' ? 'bg-wine text-cream' : 'bg-white ring-1 ring-line'"
          @click="active = 'all'"
        >
          Vše
        </button>
        <button
          v-for="album in albums"
          :key="album.id"
          type="button"
          class="rounded-full px-4 py-2 text-sm"
          :class="active === album.id ? 'bg-wine text-cream' : 'bg-white ring-1 ring-line'"
          @click="active = album.id"
        >
          {{ album.title }}
        </button>
      </div>

      <div class="mt-8 columns-1 gap-3 sm:columns-2 lg:columns-3">
        <button
          v-for="item in filtered"
          :key="item.src"
          type="button"
          class="mb-3 block w-full overflow-hidden rounded-xl"
          @click="opened = item"
        >
          <img :src="item.src" :alt="item.alt" class="w-full object-cover">
        </button>
      </div>
    </section>

    <div
      v-if="opened"
      class="fixed inset-0 z-[60] grid place-items-center bg-ink/80 p-4"
      @click="opened = null"
    >
      <figure class="max-h-[90vh] max-w-4xl" @click.stop>
        <img :src="opened.src" :alt="opened.alt" class="max-h-[80vh] rounded-xl object-contain">
        <figcaption class="mt-3 text-center text-sm text-cream">{{ opened.alt }}</figcaption>
      </figure>
    </div>
  </div>
</template>
