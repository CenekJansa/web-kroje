<script setup lang="ts">
import { site, servicesByGroup } from '~/data/content'
</script>

<template>
  <footer class="mt-20 bg-wine-dark text-cream">
    <div class="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-4">
      <div class="md:col-span-1">
        <p class="font-display text-3xl">{{ site.shortName }}</p>
        <p class="mt-3 text-sm leading-relaxed text-cream/70">
          {{ site.legal }}<br>
          {{ site.address.street }}<br>
          {{ site.address.zip }} {{ site.address.city }}
        </p>
      </div>

      <div>
        <p class="text-xs uppercase tracking-[0.22em] text-gold">Navigace</p>
        <ul class="mt-4 space-y-2 text-sm text-cream/80">
          <li><NuxtLink to="/o-nas" class="hover:text-gold">O nás</NuxtLink></li>
          <li><NuxtLink to="/sluzby" class="hover:text-gold">Služby</NuxtLink></li>
          <li><NuxtLink to="/fotogalerie" class="hover:text-gold">Fotogalerie</NuxtLink></li>
          <li><NuxtLink to="/vzdelavani" class="hover:text-gold">Vzdělávání</NuxtLink></li>
          <li><NuxtLink to="/novinky" class="hover:text-gold">Novinky</NuxtLink></li>
          <li><NuxtLink to="/kontakty" class="hover:text-gold">Kontakty</NuxtLink></li>
        </ul>
      </div>

      <div>
        <p class="text-xs uppercase tracking-[0.22em] text-gold">Služby</p>
        <ul class="mt-4 space-y-2 text-sm text-cream/80">
          <li v-for="item in servicesByGroup('kroje').slice(0, 6)" :key="item.slug">
            <NuxtLink :to="`/sluzby/${item.slug}`" class="hover:text-gold">{{ item.title }}</NuxtLink>
          </li>
        </ul>
      </div>

      <div>
        <p class="text-xs uppercase tracking-[0.22em] text-gold">Kontakt</p>
        <ul class="mt-4 space-y-2 text-sm text-cream/80">
          <li v-for="phone in site.phones" :key="phone">
            <a :href="`tel:${phone.replace(/\s/g, '')}`" class="hover:text-gold">{{ phone }}</a>
          </li>
          <li>
            <a :href="`mailto:${site.email}`" class="hover:text-gold">{{ site.email }}</a>
          </li>
          <li>{{ site.hours }}</li>
          <li>IČO {{ site.ico }}</li>
        </ul>
        <div class="mt-5 flex gap-3">
          <a :href="site.shopUrl" target="_blank" rel="noreferrer" class="rounded-full border border-cream/20 px-3 py-1 text-xs uppercase tracking-wider hover:border-gold hover:text-gold">E-shop</a>
          <a :href="site.facebookUrl" target="_blank" rel="noreferrer" class="rounded-full border border-cream/20 px-3 py-1 text-xs uppercase tracking-wider hover:border-gold hover:text-gold">Facebook</a>
        </div>
      </div>
    </div>
    <div class="border-t border-white/10 px-4 py-6 text-center text-xs text-cream/50">
      {{ site.name }} · obecně prospěšná společnost od {{ site.founded }}
    </div>
  </footer>
</template>
