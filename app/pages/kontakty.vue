<script setup lang="ts">
import { site } from '~/data/content'

useHead({ title: 'Kontakty | Lidové Tradice a Řemesla' })

const name = ref('')
const email = ref('')
const message = ref('')
const sent = ref(false)

function submit() {
  const subject = encodeURIComponent(`Zpráva z webu: ${name.value || 'zájemce'}`)
  const body = encodeURIComponent(`${message.value}\n\n${name.value}\n${email.value}`)
  window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  sent.value = true
}

const mapSrc = `https://www.google.com/maps?q=${site.map.lat},${site.map.lng}&z=17&output=embed`
</script>

<template>
  <div>
    <PageHero
      kicker="Kontakty"
      title="Najdete nás u ostrožského zámku"
      text="Dílna a prodejna v budově Přízámčí, Zámecká 196, Uherský Ostroh."
      image="/images/contact/provozovna.jpg"
    />

    <section class="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
      <div class="space-y-8">
        <div>
          <h2 class="font-display text-3xl text-wine">Korespondenční adresa</h2>
          <p class="mt-3 leading-relaxed text-muted">
            {{ site.legal }}<br>
            {{ site.address.street }}<br>
            {{ site.address.zip }} {{ site.address.city }}
          </p>
        </div>
        <div>
          <h2 class="font-display text-3xl text-wine">Telefony a e-mail</h2>
          <p class="mt-3 leading-relaxed text-muted">
            <a v-for="phone in site.phones" :key="phone" :href="`tel:${phone.replace(/\s/g, '')}`" class="block hover:text-wine">{{ phone }}</a>
            <a :href="`mailto:${site.email}`" class="mt-2 block hover:text-wine">{{ site.email }}</a>
          </p>
        </div>
        <div>
          <h2 class="font-display text-3xl text-wine">Provozní doba</h2>
          <p class="mt-3 text-muted">{{ site.hours }}</p>
          <p class="mt-2 text-sm text-muted">Po telefonické domluvě i mimo pracovní dobu.</p>
        </div>
        <p class="text-sm text-muted">IČO {{ site.ico }} · DIČ {{ site.dic }}</p>
        <div class="grid grid-cols-2 gap-3">
          <img src="/images/contact/provozovna.jpg" alt="Provozovna u zámku" class="rounded-xl object-cover">
          <img src="/images/contact/provozovna-vchod.jpg" alt="Vchod do provozovny" class="rounded-xl object-cover">
        </div>
      </div>

      <form class="rounded-2xl bg-white p-6 ring-1 ring-line sm:p-8" @submit.prevent="submit">
        <h2 class="font-display text-3xl text-wine">Napište nám</h2>
        <p class="mt-2 text-sm text-muted">Formulář otevře váš e-mail. Zprávu můžete poslat i přímo na {{ site.email }}.</p>
        <label class="mt-6 block text-sm">
          Jméno
          <input v-model="name" type="text" class="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-2" required>
        </label>
        <label class="mt-4 block text-sm">
          E-mail
          <input v-model="email" type="email" class="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-2" required>
        </label>
        <label class="mt-4 block text-sm">
          Zpráva
          <textarea v-model="message" rows="5" class="mt-1 w-full rounded-xl border border-line bg-paper px-3 py-2" required />
        </label>
        <button type="submit" class="mt-6 rounded-full bg-wine px-6 py-3 text-sm text-cream">Odeslat</button>
        <p v-if="sent" class="mt-3 text-sm text-muted">Otevírá se e-mailová schránka.</p>
      </form>
    </section>

    <section class="px-4 pb-16 sm:px-6">
      <div class="mx-auto max-w-6xl overflow-hidden rounded-2xl ring-1 ring-line">
        <iframe
          :src="mapSrc"
          title="Mapa — Lidové Tradice a Řemesla, Uherský Ostroh"
          class="h-[420px] w-full border-0"
          loading="lazy"
        />
      </div>
      <p class="mx-auto mt-4 max-w-6xl text-sm">
        <NuxtLink to="/virtualni-prohlidka" class="text-wine">Virtuální prohlídka a mapa →</NuxtLink>
      </p>
    </section>
  </div>
</template>
