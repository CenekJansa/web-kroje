<script setup lang="ts">
import { site, gallery } from '~/data/content'

useHead({ title: 'Vzdělávání | Lidové Tradice a Řemesla' })

const coursePhotos = gallery.filter((item) => item.album === 'kurzy')
</script>

<template>
  <div>
    <PageHero
      kicker="Vzdělávání"
      title="Kurzy lidových řemesel"
      text="Školicí středisko v areálu ostrožského zámku. Na všechny kurzy je třeba se přihlásit předem."
      image="/images/about/krojove-vysivani-kurz.jpg"
    />

    <section class="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p class="text-lg leading-relaxed text-muted">
        Usilujeme o to, aby se zachovaly tradiční řemeslné techniky. Proto je součástí našeho areálu školicí středisko
        se speciálními pracovišti. Školit lze až 12 účastníků. Prostory slouží i k seminářům, školením a besedám.
      </p>
      <ul class="mt-8 grid gap-3 sm:grid-cols-2">
        <li v-for="item in ['krosienka', 'pletení z proutí', 'ruční tkaní', 'paličkování', 'vyšívání', 'malba na hedvábí', 'patchwork', 'malování kraslic']" :key="item" class="rounded-xl bg-white px-4 py-3 ring-1 ring-line">
          {{ item }}
        </li>
      </ul>
      <p class="mt-8 leading-relaxed text-muted">
        Aktuální termíny kurzů zveřejňujeme na webu a na Facebooku. Počet míst je omezený, proto se hlaste předem.
      </p>
      <div class="mt-8 flex flex-wrap gap-3">
        <a :href="site.facebookUrl" target="_blank" rel="noreferrer" class="rounded-full bg-wine px-5 py-3 text-sm text-cream">Facebook</a>
        <NuxtLink to="/kontakty" class="rounded-full border border-line px-5 py-3 text-sm">Přihlásit se</NuxtLink>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
      <div class="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        <img
          v-for="item in coursePhotos"
          :key="item.src"
          :src="item.src"
          :alt="item.alt"
          class="aspect-[4/3] rounded-xl object-cover"
        >
      </div>
    </section>
  </div>
</template>
