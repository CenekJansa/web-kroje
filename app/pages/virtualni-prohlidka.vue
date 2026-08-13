<script setup lang="ts">
import { site } from '~/data/content'

useHead({ title: 'Virtuální prohlídka | Lidové Tradice a Řemesla' })

const mapSrc = `https://www.google.com/maps?q=${site.map.lat},${site.map.lng}&z=18&output=embed`
</script>

<template>
  <div>
    <PageHero
      kicker="Provozovna"
      title="Virtuální prohlídka"
      text="Dílna a prodejna stojí vedle zámku v Uherském Ostrohu, na adrese Zámecká 196."
      image="/images/contact/provozovna-vchod.jpg"
    />
    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <p class="max-w-2xl text-lg leading-relaxed text-muted">
        Šicí dílnu a prodejnu najdete v budově Přízámčí. Kroj si u nás můžete koupit, nechat ušít i vypůjčit.
        GPS: {{ site.map.lat }}N, {{ site.map.lng }}E.
      </p>
      <div class="mt-8 overflow-hidden rounded-2xl ring-1 ring-line">
        <iframe
          :src="mapSrc"
          title="Mapa provozovny v Uherském Ostrohu"
          class="h-[520px] w-full border-0"
          loading="lazy"
        />
      </div>
    </section>
  </div>
</template>
