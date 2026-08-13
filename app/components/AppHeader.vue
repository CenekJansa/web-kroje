<script setup lang="ts">
import { site, serviceGroups, servicesByGroup } from '~/data/content'

const open = ref(false)
const servicesOpen = ref(false)
const route = useRoute()

watch(() => route.fullPath, () => {
  open.value = false
  servicesOpen.value = false
})

const links = [
  { to: '/', label: 'Úvod' },
  { to: '/o-nas', label: 'O nás' },
  { to: '/fotogalerie', label: 'Galerie' },
  { to: '/vzdelavani', label: 'Vzdělávání' },
  { to: '/novinky', label: 'Novinky' },
  { to: '/kontakty', label: 'Kontakty' },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-line/80 bg-paper/90 backdrop-blur-md">
    <div class="hidden items-center justify-between bg-wine-dark px-4 py-2 text-[11px] uppercase tracking-[0.16em] text-cream/80 sm:flex sm:px-6">
      <p>{{ site.address.city }} · {{ site.hours }}</p>
      <a :href="`tel:${site.phones[0].replace(/\s/g, '')}`" class="hover:text-gold">{{ site.phones[0] }}</a>
    </div>

    <div class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
      <AppLogo />

      <nav class="hidden items-center gap-6 lg:flex">
        <NuxtLink
          v-for="link in links.slice(0, 2)"
          :key="link.to"
          :to="link.to"
          class="text-sm text-ink/80 transition hover:text-wine"
          active-class="text-wine font-medium"
        >
          {{ link.label }}
        </NuxtLink>

        <div class="relative" @mouseenter="servicesOpen = true" @mouseleave="servicesOpen = false">
          <NuxtLink
            to="/sluzby"
            class="text-sm text-ink/80 transition hover:text-wine"
            active-class="text-wine font-medium"
          >
            Služby
          </NuxtLink>
          <div
            v-show="servicesOpen"
            class="absolute left-1/2 top-full z-40 mt-3 w-[720px] -translate-x-1/3 rounded-2xl bg-white p-6 shadow-2xl ring-1 ring-line"
          >
            <div class="grid grid-cols-3 gap-6">
              <div v-for="group in serviceGroups" :key="group.id">
                <p class="text-xs uppercase tracking-[0.2em] text-gold">{{ group.title }}</p>
                <ul class="mt-3 space-y-2">
                  <li v-for="item in servicesByGroup(group.id)" :key="item.slug">
                    <NuxtLink :to="`/sluzby/${item.slug}`" class="text-sm text-ink/80 hover:text-wine">
                      {{ item.title }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <NuxtLink
          v-for="link in links.slice(2)"
          :key="link.to"
          :to="link.to"
          class="text-sm text-ink/80 transition hover:text-wine"
          active-class="text-wine font-medium"
        >
          {{ link.label }}
        </NuxtLink>
      </nav>

      <div class="flex items-center gap-3">
        <a
          :href="site.shopUrl"
          target="_blank"
          rel="noreferrer"
          class="hidden rounded-full bg-wine px-4 py-2 text-sm font-medium text-cream transition hover:bg-wine-soft sm:inline-flex"
        >
          E-shop
        </a>
        <button
          type="button"
          class="grid h-10 w-10 place-items-center rounded-full border border-line lg:hidden"
          :aria-expanded="open"
          aria-label="Otevřít menu"
          @click="open = !open"
        >
          <span class="sr-only">Menu</span>
          <span class="flex flex-col gap-1.5">
            <span class="block h-0.5 w-5 bg-ink" />
            <span class="block h-0.5 w-5 bg-ink" />
            <span class="block h-0.5 w-4 bg-ink" />
          </span>
        </button>
      </div>
    </div>

    <div v-if="open" class="max-h-[80vh] overflow-y-auto border-t border-line bg-paper px-4 py-6 lg:hidden">
      <nav class="space-y-4">
        <NuxtLink v-for="link in links" :key="link.to" :to="link.to" class="block text-lg">
          {{ link.label }}
        </NuxtLink>
        <NuxtLink to="/sluzby" class="block text-lg">Služby</NuxtLink>
        <div class="grid gap-2 border-t border-line pt-4">
          <NuxtLink
            v-for="item in servicesByGroup('kroje').slice(0, 6)"
            :key="item.slug"
            :to="`/sluzby/${item.slug}`"
            class="text-sm text-muted"
          >
            {{ item.title }}
          </NuxtLink>
        </div>
        <a :href="site.shopUrl" class="inline-flex rounded-full bg-wine px-4 py-2 text-cream">E-shop</a>
      </nav>
    </div>
  </header>
</template>
