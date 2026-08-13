<script setup lang="ts">
import { site, featuredServices, gallery, news, getService, formatDate } from '~/data/content'

const featured = featuredServices
  .map((slug) => getService(slug))
  .filter((item): item is NonNullable<typeof item> => Boolean(item))

const homeGallery = gallery.filter((item) => item.album === 'kroje').slice(0, 8)
const latestNews = news.slice(0, 3)
</script>

<template>
  <div>
    <section class="relative min-h-[88vh] overflow-hidden bg-wine-dark text-cream">
      <img
        src="/images/home/ostrozska-chasa.jpg"
        alt="Ostrožská chasa v lidových krojích"
        class="absolute inset-0 h-full w-full object-cover"
      >
      <div class="absolute inset-0 bg-gradient-to-r from-wine-dark via-wine-dark/80 to-wine-dark/20" />
      <div class="relative mx-auto flex min-h-[88vh] max-w-6xl flex-col justify-end px-4 pb-16 pt-28 sm:px-6 sm:pb-24">
        <p class="text-xs uppercase tracking-[0.32em] text-gold">Lidové Tradice a Řemesla · od {{ site.founded }}</p>
        <h1 class="mt-4 max-w-3xl font-display text-5xl font-semibold leading-[0.95] sm:text-7xl">
          Šijeme lidové kroje
        </h1>
        <p class="mt-6 max-w-xl text-lg text-cream/85">
          Kosárek, fěrtúšek, rukávce, čepení, vonička. V Uherském Ostrohu u zámku šijeme, opravujeme a půjčujeme kroje, které patří k našemu kulturnímu dědictví.
        </p>
        <div class="mt-8 flex flex-wrap gap-3">
          <NuxtLink to="/sluzby/siti-kroju" class="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-wine-dark">
            Nechte si ušít kroj
          </NuxtLink>
          <NuxtLink to="/kontakty" class="rounded-full border border-cream/30 px-6 py-3 text-sm text-cream hover:border-gold hover:text-gold">
            Navštivte dílnu
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
      <div>
        <p class="text-xs uppercase tracking-[0.28em] text-gold">O dílně</p>
        <h2 class="mt-3 font-display text-4xl font-semibold text-wine sm:text-5xl">Lidové kroje jsou naše kulturní dědictví</h2>
        <p class="mt-6 leading-relaxed text-muted">
          Zájem o kroje stále roste a pořizuje si je i mladší generace. Dnes se už běžně nenosí, ale oblékají se k hodům, fašanku, Velikonocům, stavění máje, jízdě králů i k rodinným slavnostem.
        </p>
        <p class="mt-4 leading-relaxed text-muted">
          Lidový kroj vyjadřuje příslušnost k obci a uchovává tradici z generace na generaci. V malebných krojích vidíme nejen chasu, ale i děti.
        </p>
        <NuxtLink to="/o-nas" class="mt-8 inline-flex items-center gap-2 text-sm font-medium text-wine">
          Poznejte naši společnost <span aria-hidden="true">→</span>
        </NuxtLink>
      </div>
      <div class="grid grid-cols-2 gap-4">
        <img src="/images/home/ostrozsky-kroj.jpg" alt="Sváteční ostrožský kroj" class="h-full rounded-2xl object-cover">
        <div class="grid gap-4">
          <img src="/images/about/zkouska-kroje.jpg" alt="Dámský kroj při zkoušce" class="rounded-2xl object-cover">
          <img src="/images/about/kyjovsky-klobouk.jpg" alt="Výroba kyjovského klobouku" class="rounded-2xl object-cover">
        </div>
      </div>
    </section>

    <section class="bg-cream/60 ornament">
      <div class="mx-auto grid max-w-6xl gap-8 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p class="font-display text-5xl text-wine">{{ site.founded }}</p>
          <p class="mt-2 text-sm text-muted">vznik obecně prospěšné společnosti v Uherském Ostrohu</p>
        </div>
        <div>
          <p class="font-display text-5xl text-wine">2011</p>
          <p class="mt-2 text-sm text-muted">certifikát Tradiční výrobek Slovácka za krojovou výrobu</p>
        </div>
        <div>
          <p class="font-display text-5xl text-wine">12</p>
          <p class="mt-2 text-sm text-muted">míst ve školicím středisku pro kurzy lidových technik</p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div class="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-[0.28em] text-gold">Co umíme</p>
          <h2 class="mt-3 font-display text-4xl font-semibold text-wine">Služby dílny</h2>
        </div>
        <NuxtLink to="/sluzby" class="text-sm font-medium text-wine">Všechny služby →</NuxtLink>
      </div>
      <div class="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <ServiceCard
          v-for="item in featured"
          :key="item.slug"
          :to="`/sluzby/${item.slug}`"
          :title="item.title"
          :excerpt="item.excerpt"
          :image="item.image"
        />
      </div>
    </section>

    <section class="bg-wine text-cream">
      <div class="mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
        <div>
          <p class="text-xs uppercase tracking-[0.28em] text-gold">Zakázka</p>
          <h2 class="mt-3 font-display text-4xl font-semibold sm:text-5xl">Nechte si u nás ušít nový kroj</h2>
          <p class="mt-6 leading-relaxed text-cream/80">
            Doba se mění a na pracné šití, vyšívání a údržbu krojů je méně času. Scházejí i původní materiály. Přesto nemusí budoucí generace hledat kroje jen v muzeích.
          </p>
          <p class="mt-4 leading-relaxed text-cream/80">
            Jednou z cest je nechat si ušít kroj v Uherském Ostrohu — v Lidových Tradicích a Řemeslech.
          </p>
          <div class="mt-8 flex flex-wrap gap-3">
            <NuxtLink to="/sluzby/siti-kroju" class="rounded-full bg-cream px-5 py-3 text-sm font-medium text-wine">Šití krojů</NuxtLink>
            <NuxtLink to="/sluzby/pujcovani-kroju" class="rounded-full border border-cream/30 px-5 py-3 text-sm">Půjčování</NuxtLink>
          </div>
        </div>
        <img src="/images/home/krojovy-pruvod.jpg" alt="Krojový průvod na Slavnostech vína" class="rounded-2xl object-cover">
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div class="flex items-end justify-between gap-4">
        <div>
          <p class="text-xs uppercase tracking-[0.28em] text-gold">Fotogalerie</p>
          <h2 class="mt-3 font-display text-4xl font-semibold text-wine">Kroje v životě obcí</h2>
        </div>
        <NuxtLink to="/fotogalerie" class="text-sm font-medium text-wine">Celá galerie →</NuxtLink>
      </div>
      <div class="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        <NuxtLink
          v-for="item in homeGallery"
          :key="item.src"
          to="/fotogalerie"
          class="group overflow-hidden rounded-xl"
        >
          <img :src="item.src" :alt="item.alt" class="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-105">
        </NuxtLink>
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <FolkDivider />
      <div class="flex items-end justify-between gap-4">
        <h2 class="font-display text-4xl font-semibold text-wine">Novinky</h2>
        <NuxtLink to="/novinky" class="text-sm font-medium text-wine">Archiv →</NuxtLink>
      </div>
      <div class="mt-10 grid gap-6 md:grid-cols-3">
        <NuxtLink
          v-for="item in latestNews"
          :key="item.slug"
          :to="`/novinky/${item.slug}`"
          class="rounded-2xl bg-white p-6 ring-1 ring-line transition hover:-translate-y-1"
        >
          <p class="text-xs uppercase tracking-[0.18em] text-gold">{{ formatDate(item.date) }}</p>
          <h3 class="mt-3 font-display text-2xl text-wine">{{ item.title }}</h3>
          <p class="mt-3 text-sm leading-relaxed text-muted">{{ item.excerpt }}</p>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>
