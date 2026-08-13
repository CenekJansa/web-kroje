<script setup lang="ts">
import { site, gallery } from '~/data/content'

useHead({ title: 'O nás | Lidové Tradice a Řemesla' })

const workshop = gallery.filter((item) => item.album === 'dilna').slice(0, 8)
</script>

<template>
  <div>
    <PageHero
      kicker="O nás"
      title="Lidové Tradice a Řemesla"
      text="Obecně prospěšná společnost v areálu ostrožského zámku. Od roku 2006 uchováváme a předáváme tradici tvorby lidového kroje."
      image="/images/contact/provozovna.jpg"
    />

    <section class="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <p class="text-lg leading-relaxed text-muted">
        Jsme obecně prospěšná společnost, která vznikla v roce {{ site.founded }} díky projektu
        Středisko školy lidové tvořivosti a řemesel za podpory Strukturálních fondů EU.
        Cílem je udržet, zachovat a předat tradice tvorby lidového kroje dalším generacím.
      </p>
    </section>

    <section class="bg-cream/70">
      <div class="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2">
        <div>
          <h2 class="font-display text-4xl text-wine">Čím se zabýváme</h2>
          <p class="mt-6 leading-relaxed text-muted">
            Jako jedni z mála vyrábíme kroje a jejich součásti — klobouky, čepení, voničky a další — tradičním způsobem.
            Zručné švadleny a vyšívačky dokážou zhotovit kompletní kroj nejen z Moravského Slovácka, ale i z jiných regionů.
          </p>
          <p class="mt-4 leading-relaxed text-muted">
            Spolupracujeme s institucemi, které se odborně zabývají lidovou kulturou. Ušité kroje proto odpovídají
            originálním vzorům výšivek, zdobení a střihu.
          </p>
          <p class="mt-4 leading-relaxed text-muted">
            Kromě výroby nabízíme opravy, praní a žehlení. Kroje si u nás můžete nechat ušít, opravit, vyprat i vypůjčit.
            Další činností je ruční tkaní, kterým vyrábíme vlastní tradiční materiály.
          </p>
        </div>
        <img src="/images/about/tkalcovsky-stav.jpg" alt="Tkalcovská dílna" class="rounded-2xl object-cover">
      </div>
    </section>

    <section class="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <h2 class="font-display text-4xl text-wine">Provozovna u zámku</h2>
      <p class="mt-6 max-w-3xl leading-relaxed text-muted">
        V objektu provozovny je i prodejna, kde si můžete koupit rukodělné výrobky, nebo si je objednat podle vlastního návrhu.
        Kroje a další výrobky zhotovujeme pro děti i dospělé, jednotlivce, skupiny, obce a folklorní soubory.
      </p>
      <p class="mt-4 max-w-3xl leading-relaxed text-muted">
        Součástí areálu je školicí středisko se pracovišti pro výuku tradičních technik — krosienka, pletení z proutí,
        ruční tkaní, paličkování, vyšívání nebo malba na hedvábí. Školit lze až 12 účastníků.
      </p>
      <p class="mt-4 max-w-3xl leading-relaxed text-muted">
        Jsme podporováni městem Uherský Ostroh a Mikroregionem Ostrožsko. Sídlíme v zrekonstruované části zámku,
        kulturní památky v Uherském Ostrohu. Návštěvníky rádi seznámíme s historií, symbolikou a výrobou lidových krojů.
      </p>
      <div class="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">
        <img
          v-for="item in workshop"
          :key="item.src"
          :src="item.src"
          :alt="item.alt"
          class="aspect-[4/3] rounded-xl object-cover"
        >
      </div>
    </section>
  </div>
</template>
