export const site = {
  name: 'Lidové Tradice a Řemesla',
  shortName: 'Lidové kroje',
  legal: 'Lidové tradice a řemesla, o. p. s.',
  tagline: 'Šijeme lidové kroje a krojové doplňky',
  founded: 2006,
  address: {
    street: 'Zámecká 196',
    city: 'Uherský Ostroh',
    zip: '687 24',
    country: 'Česká republika',
  },
  phones: ['+420 572 503 697', '+420 732 558 971'],
  email: 'remesla@uhostroh.cz',
  ico: '28309146',
  dic: 'CZ28309146',
  hours: 'pondělí – pátek 7.00 – 15.30',
  map: {
    lat: 48.9859992,
    lng: 17.3894594,
  },
  shopUrl: 'https://www.siti-kroju.cz/',
  facebookUrl: 'https://www.facebook.com/pages/Lidov%C3%A9-Tradice-a-%C5%98emesla-ops/218865564810241',
}

export type Service = {
  slug: string
  title: string
  group: 'kroje' | 'remesla' | 'dalsi'
  excerpt: string
  image: string
  body: string[]
  extra?: string
}

export const serviceGroups = [
  { id: 'kroje', title: 'Krojová výroba' },
  { id: 'remesla', title: 'Řemesla' },
  { id: 'dalsi', title: 'Další šití' },
] as const

export const services: Service[] = [
  {
    slug: 'krojova-vyroba',
    title: 'Krojová výroba',
    group: 'kroje',
    excerpt: 'Kompletní kroje z Moravského Slovácka i z jiných regionů. Šijeme podle tradice a ve spolupráci s muzei.',
    image: '/images/home/ostrozsky-kroj.jpg',
    body: [
      'Uchováváme odkaz našich předků. Naše služby využívají folklorní jednotlivci, soubory, sdružení i taneční skupiny.',
      'Ve spolupráci s odborníky z muzeí se snažíme věrně uchovávat tento národní oděv a předávat ho dalším generacím. Sídlo na Slovácku nám nebrání zhotovit kroje i z Hané, Valašska nebo Slezska.',
      'V roce 2011 jsme získali certifikát Tradiční výrobek Slovácka za krojovou výrobu. Na hodnocení se podíleli odborníci ze Slováckého muzea, NÚLK a města Uherské Hradiště.',
    ],
  },
  {
    slug: 'siti-kroju',
    title: 'Šití krojů',
    group: 'kroje',
    excerpt: 'Ušijeme téměř vše, co ke kroji patří. I podle poškozeného dílu nebo staré fotografie.',
    image: '/images/about/zkouska-kroje.jpg',
    body: [
      'Naše švadleny s láskou a v krátkém termínu ušijí téměř vše, co ke kroji patří.',
      'Obstaráváme šití podle přineseného, i poškozeného, dílu oblečení. Výjimkou není ani šití podle staré fotografie. Náhrady materiálů a vzorů konzultujeme s odborníky.',
      'Používáme staré střihy, které se osvědčily už v minulosti. Technika se neliší od postupů našich babiček. Najdete u nás ručně i strojově vyšívané součásti, cifrované i šňůrované díly.',
    ],
  },
  {
    slug: 'pujcovani-kroju',
    title: 'Půjčování krojů',
    group: 'kroje',
    excerpt: 'Kroje k hodům, poutím i svatému přijímání. Půjčujeme dětské i dospělé ostrožské a české kroje.',
    image: '/images/home/hodovy-pruvod-deti.jpg',
    extra: 'cenik',
    body: [
      'Hody, poutě nebo svaté přijímání — tam všude září pestrost krojů. Pořízení nového kroje je náročné, proto nabízíme i půjčování.',
      'U dětí, které rychle rostou, je tato služba zvlášť vítaná. V nabídce máme dětské kroje ostrožské a české. Je možné si vypůjčit celý kroj, nebo jen některou část. Velikost rádi přizpůsobíme.',
      'Dospělým nabízíme ostrožský a mařatický kroj. U dámského kroje si můžete vybrat z různých barev fěrtúšků. Zapůjčujeme i jednotlivé součásti. Krojovou obuv nepůjčujeme.',
      'Kauce se vrací při předání a kontrole kroje. Případná škoda se hradí na místě. Pokuta za pozdní vrácení je 20 %.',
    ],
  },
  {
    slug: 'prani-a-zehleni-kroju',
    title: 'Praní a žehlení krojů',
    group: 'kroje',
    excerpt: 'Šetrné praní a precizní žehlení krojů i krojových součástí.',
    image: '/images/about/zehleni.jpg',
    body: [
      'Kroj potřebuje péči. Nabízíme praní a žehlení krojů i jednotlivých součástí tak, aby látky, výšivky a plisé zůstaly v dobrém stavu.',
      'Práci děláme s ohledem na stáří materiálu a na tradiční úpravy. Po dohodě kroj připravíme i k nadcházející slavnosti.',
    ],
  },
  {
    slug: 'upravy-a-renovace-kroju',
    title: 'Úpravy a renovace krojů',
    group: 'kroje',
    excerpt: 'Opravy, úpravy velikosti a obnova poškozených krojových dílů.',
    image: '/images/about/oprava-rukavcu.jpg',
    body: [
      'Starší kroj často stačí upravit nebo obnovit, místo aby se šil celý znovu. Opravujeme poškozené díly, měníme velikost a renovujeme jednotlivé součásti.',
      'Při opravách vycházíme z původního střihu, vzoru výšivky a zdobení. Cílem je, aby kroj znovu sloužil a zachoval si svůj charakter.',
    ],
  },
  {
    slug: 'krojove-soucasti',
    title: 'Krojové součásti',
    group: 'kroje',
    excerpt: 'Rukávce, kordulky, fěrtúšky, čepení, voničky a další díly kroje.',
    image: '/images/about/cepeni-vyroba.jpg',
    body: [
      'Kroj není jen jeden oděv. Skládá se z mnoha součástí — kosárku, fěrtúšku, rukávců, čepení, třaslavic nebo voničky.',
      'Zhotovujeme jednotlivé díly i kompletní soupravy. Součásti ladíme k obci a k příležitosti, pro kterou kroj vzniká.',
    ],
  },
  {
    slug: 'vyroba-klobouku',
    title: 'Výroba klobouků',
    group: 'kroje',
    excerpt: 'Krojové klobouky včetně kyjovských a ostrožských s přízdobou.',
    image: '/images/about/kyjovsky-klobouk.jpg',
    body: [
      'Klobouk patří k výrazným znakům mužského kroje. Vyrábíme krojové klobouky tradičním způsobem, včetně přízdoby.',
      'Podobu klobouku přizpůsobujeme konkrétní oblasti. Mezi našimi pracemi najdete i kyjovský klobouk a ostrožský klobouk s přízdobou.',
    ],
  },
  {
    slug: 'krojove-panenky',
    title: 'Krojové panenky',
    group: 'kroje',
    excerpt: 'Autentické krojované panenky jako dárek i jako záznam místního kroje.',
    image: '/images/about/krojovana-panenka.jpg',
    body: [
      'Krojové panenky šijeme s důrazem na věrnost detailu. Hodí se jako dárek, suvenýr i jako drobný záznam kroje konkrétní obce.',
      'Panenku můžeme připravit na zakázku — například ostrožskou krojovou panenku jako slavnostní dárek.',
    ],
  },
  {
    slug: 'rucni-tkani',
    title: 'Ruční tkaní',
    group: 'remesla',
    excerpt: 'Vlastní tkané materiály na krojové díly, oděvy i bytové doplňky.',
    image: '/images/about/tkalcovsky-stav.jpg',
    body: [
      'Ručním tkaním vyrábíme vlastní tradiční materiály. Z nich šijeme součásti krojů, konfekci podle přání zákazníka i bytové doplňky.',
      'Tkalcovská dílna je součástí našeho areálu. Zájemci se s tkaním mohou seznámit i na kurzech a exkurzích.',
    ],
  },
  {
    slug: 'tkane-odevy',
    title: 'Tkané oděvy',
    group: 'remesla',
    excerpt: 'Oděvy z ručně tkaných látek, často podle individuálního návrhu.',
    image: '/images/about/klobucky-brunclek.jpg',
    body: [
      'Z vlastních tkanin šijeme oděvy pro každodenní i slavnostní nošení. Často vycházíme z požadavků zájemců.',
      'Tkaný oděv spojuje tradiční materiál s praktickým střihem. Hodí se jako originální kousek i jako dárek.',
    ],
  },
  {
    slug: 'uzitkove-a-darkove-predmety',
    title: 'Užitkové a dárkové předměty',
    group: 'remesla',
    excerpt: 'Bytové doplňky a dárky z ručně tkaných materiálů.',
    image: '/images/about/patchwork-kurz.jpg',
    body: [
      'Kromě oděvů tvoříme i užitkové a dárkové předměty z tkaných látek — bytové doplňky, menší textilie a reklamní předměty.',
      'Výrobky koupíte v naší prodejně u zámku, nebo si je objednáte podle vlastního návrhu.',
    ],
  },
  {
    slug: 'vysivani',
    title: 'Vyšívání',
    group: 'remesla',
    excerpt: 'Ruční i strojové vyšívání krojů, firemních a bytových doplňků.',
    image: '/images/about/krojove-vysivani-kurz.jpg',
    body: [
      'Vyšívání je srdcem krojové práce. Nabízíme ruční i strojové vyšívání v originálních vzorech, které odpovídají lidové tradici.',
      'Kromě krojů vyšíváme i reklamní, firemní a bytové doplňky.',
    ],
  },
  {
    slug: 'rucni-vysivani',
    title: 'Ruční vyšívání',
    group: 'remesla',
    excerpt: 'Ruční výšivka podle tradičních vzorů a střihů.',
    image: '/images/about/krojove-vysivani-kurz.jpg',
    body: [
      'Ruční vyšívání zachovává techniky, které se předávaly z generace na generaci. Používáme vzory odpovídající konkrétní obci a oblasti.',
      'Ruční výšivka je pomalejší, ale dává kroji jedinečný charakter. Proto ji volíme tam, kde záleží na autenticité.',
    ],
  },
  {
    slug: 'strojove-vysivani',
    title: 'Strojové vyšívání',
    group: 'remesla',
    excerpt: 'Strojová výšivka pro kroje, reklamu i interiér.',
    image: '/images/about/snurovani-priprava.jpg',
    body: [
      'Strojové vyšívání umožňuje přesnou a opakovatelnou práci. Hodí se na krojové díly, firemní textil i bytové doplňky.',
      'Vzory a barvy ladíme k účelu zakázky. U krojů konzultujeme podobu s odborníky na lidovou kulturu.',
    ],
  },
  {
    slug: 'krojova-galanterie',
    title: 'Krojová galanterie',
    group: 'remesla',
    excerpt: 'Krajky, stuhy, knoflíky a další doplňky potřebné ke kroji.',
    image: '/images/about/cepeni-vyroba.jpg',
    body: [
      'Ke kroji patří i drobnosti: krajky, stuhy, knoflíky, šňůry a další galanterie.',
      'V prodejně i v dílně vám pomůžeme vybrat doplňky, které sedí k danému kroji a oblasti.',
    ],
  },
  {
    slug: 'plisovani',
    title: 'Plisování',
    group: 'remesla',
    excerpt: 'Plisování sukní a dalších krojových dílů.',
    image: '/images/about/plisovani.jpg',
    body: [
      'Plisé dává sukni a dalším dílům jejich charakteristický tvar. Plisujeme zadní sukně i další krojové součásti.',
      'Práci děláme tak, aby se záhyby dobře držely a kroj se dobře nosil při tanci i v průvodu.',
    ],
  },
  {
    slug: 'darkove-predmety',
    title: 'Dárkové předměty',
    group: 'dalsi',
    excerpt: 'Rukodělné dárky z naší dílny a prodejny u ostrožského zámku.',
    image: '/images/home/hodova-vyzdoba.jpg',
    body: [
      'V prodejně u zámku najdete rukodělné výrobky z naší dílny. Hodí se jako dárek, suvenýr i jako drobná připomínka slovácké tradice.',
      'Na přání zhotovíme i předmět podle individuálního návrhu.',
    ],
  },
  {
    slug: 'krtici-perinky-a-rousky',
    title: 'Křtící peřinky a roušky',
    group: 'dalsi',
    excerpt: 'Šití a kulmování křtících peřinek a roušek.',
    image: '/images/about/zehleni.jpg',
    body: [
      'Pro rodinné slavnosti šijeme a kulmujeme křtící peřinky a roušky.',
      'Výrobek může být jemný a slavnostní, s výšivkou nebo bez ní. Rádi ho připravíme k konkrétnímu datu křtu.',
    ],
  },
  {
    slug: 'liturgicke-obleceni',
    title: 'Liturgické oblečení',
    group: 'dalsi',
    excerpt: 'Šití liturgického oblečení na zakázku.',
    image: '/images/about/oprava-rukavcu.jpg',
    body: [
      'Kromě krojů šijeme i liturgické oblečení. Zakázku připravujeme podle potřeby farnosti nebo jednotlivce.',
      'Dbáme na střih, materiál i důstojný vzhled oděvu.',
    ],
  },
  {
    slug: 'profesni-obleceni',
    title: 'Profesní oblečení',
    group: 'dalsi',
    excerpt: 'Profesní a firemní oděvy včetně výšivky.',
    image: '/images/about/exkurze.jpg',
    body: [
      'Šijeme profesní oblečení a doplňujeme ho strojovou výšivkou — například logem nebo jménem.',
      'Zakázku ladíme k provozu, ve kterém se oděv bude nosit.',
    ],
  },
  {
    slug: 'zakazkove-siti',
    title: 'Zakázkové šití',
    group: 'dalsi',
    excerpt: 'Šití a úpravy oděvů na míru, nejen krojů.',
    image: '/images/about/valasske-kroje-chlapecke.jpg',
    body: [
      'Zakázkové šití u nás nekončí u kroje. Ušijeme a upravíme i další oděvy podle míry a přání.',
      'Pokud hledáte dílnu, která spojuje řemeslo s pečlivostí, ozvěte se. Rádi se domluvíme na postupu i termínu.',
    ],
  },
]

export const rentalPrices = [
  {
    kind: 'pánský',
    rows: [
      ['kordula + nohavice', '1 100 Kč', '2 500 Kč'],
      ['lajbl + nohavice', '1 100 Kč', '2 500 Kč'],
      ['kordula', '600 Kč', '1 500 Kč'],
      ['nohavice', '600 Kč', '1 500 Kč'],
      ['lajbl', '600 Kč', '1 000 Kč'],
      ['dudovica (košile) — nutné vyčištění', '1 000 Kč', '2 000 Kč'],
      ['řemen', '250 Kč', '500 Kč'],
      ['klobouk ostrožský s přízdobou', '300 Kč', '700 Kč'],
      ['komplet: kordula, dudovica, nohavice, opasek, klobouk', '2 200 Kč', '3 500 Kč'],
    ],
  },
  {
    kind: 'dámský',
    rows: [['kacabaja', '300 Kč', '500 Kč']],
  },
  {
    kind: 'chlapecký',
    rows: [['třaslavice, dudovica, kordula, zástěrka', '1 700 Kč', '2 500 Kč']],
  },
  {
    kind: 'dívčí český',
    rows: [['spodnička, fěrtůšek, zástěrka, rukávce, kordulka, věneček', '1 600 Kč', '2 500 Kč']],
  },
  {
    kind: 'dívčí ostrožský',
    rows: [['spodničky, fěrtoch, fěrtůšek, rukávce, kordulka, obojek, věneček', '2 500 Kč', '3 000 Kč']],
  },
  {
    kind: 'dámský ostrožský',
    rows: [['spodničky, šorec, fěrtůšek, rukávce, kordulka, obojek, šátek, stuha do pasu', '3 300 Kč', '4 000 Kč']],
  },
]

export type GalleryItem = {
  src: string
  alt: string
  album: string
}

export const gallery: GalleryItem[] = [
  { src: '/images/home/ostrozsky-kroj.jpg', alt: 'Sváteční ostrožský kroj', album: 'kroje' },
  { src: '/images/home/hodovy-pruvod-deti.jpg', alt: 'Řazení do hodového průvodu', album: 'kroje' },
  { src: '/images/home/jizda-kralu.jpg', alt: 'Lidové kroje doplňují Jízdu králů', album: 'kroje' },
  { src: '/images/home/bobkovnici.jpg', alt: 'Bobkovníci z Bystřice pod Lopeníkem', album: 'kroje' },
  { src: '/images/home/dolnemcan.jpg', alt: 'FS Dolněmčan ve Strážnici', album: 'kroje' },
  { src: '/images/home/hodova-vyzdoba.jpg', alt: 'Hodová výzdoba v Uherském Ostrohu', album: 'kroje' },
  { src: '/images/home/hodovy-pruvod.jpg', alt: 'Hodový průvod', album: 'kroje' },
  { src: '/images/home/strani-skanzen.jpg', alt: 'Tanečníci ze Strání ve skanzenu', album: 'kroje' },
  { src: '/images/home/ve-skanzenu.jpg', alt: 'Lidové kroje Ostrožska', album: 'kroje' },
  { src: '/images/home/verbiri.jpg', alt: 'Verbuňk v podání tanečníků z Uherského Hradiště', album: 'kroje' },
  { src: '/images/home/ostrozska-chasa.jpg', alt: 'Ostrožská chasa', album: 'kroje' },
  { src: '/images/home/velikonocni.jpg', alt: 'Ukázka velikonočních zvyků v Uherském Hradišti', album: 'kroje' },
  { src: '/images/home/pruvod-staveni-maje.jpg', alt: 'Průvod při stavění máje — Mistřice', album: 'kroje' },
  { src: '/images/home/valassky-kroj.jpg', alt: 'FS Kašava ve Velké nad Veličkou', album: 'kroje' },
  { src: '/images/home/krojovy-pruvod.jpg', alt: 'Krojový průvod na Slavnostech vína', album: 'kroje' },
  { src: '/images/home/vinari.jpg', alt: 'Vinohradnická tradice při Slavnostech vína', album: 'kroje' },
  { src: '/images/about/prodejna.jpg', alt: 'Vchod do naší provozovny', album: 'dilna' },
  { src: '/images/about/cepeni-vyroba.jpg', alt: 'Příprava na výrobu vonic', album: 'dilna' },
  { src: '/images/about/klobucky-brunclek.jpg', alt: 'Dokončování klobuckého bruncleku', album: 'dilna' },
  { src: '/images/about/krojovana-panenka.jpg', alt: 'Dokončování krojované panenky', album: 'dilna' },
  { src: '/images/about/kyjovsky-klobouk.jpg', alt: 'Výroba kyjovského klobouku', album: 'dilna' },
  { src: '/images/about/oprava-rukavcu.jpg', alt: 'Oprava dámských rukávců', album: 'dilna' },
  { src: '/images/about/plisovani.jpg', alt: 'Plisování zadní sukně', album: 'dilna' },
  { src: '/images/about/snurovani-priprava.jpg', alt: 'Příprava na šňůrování', album: 'dilna' },
  { src: '/images/about/zkouska-kroje.jpg', alt: 'Dámský kroj při zkoušce', album: 'dilna' },
  { src: '/images/about/zehleni.jpg', alt: 'Žehlení dívčí spodničky', album: 'dilna' },
  { src: '/images/about/valasske-kroje-chlapecke.jpg', alt: 'Dokončování chlapeckého bruncleku', album: 'dilna' },
  { src: '/images/about/krojove-vysivani-kurz.jpg', alt: 'Kurz krojového vyšívání', album: 'kurzy' },
  { src: '/images/about/exkurze.jpg', alt: 'Exkurze dětí ze ZŠ', album: 'kurzy' },
  { src: '/images/about/malovani-kraslic-kurz.jpg', alt: 'Kurz malování zelových kraslic', album: 'kurzy' },
  { src: '/images/about/patchwork-kurz.jpg', alt: 'Kurz patchworku', album: 'kurzy' },
  { src: '/images/about/tkalcovsky-stav.jpg', alt: 'Tkalcovská dílna', album: 'kurzy' },
  { src: '/images/contact/provozovna.jpg', alt: 'Provozovna u zámku v Uherském Ostrohu', album: 'dilna' },
  { src: '/images/contact/provozovna-vchod.jpg', alt: 'Provozovna vchod', album: 'dilna' },
]

export const albums = [
  { id: 'kroje', title: 'Kroje a slavnosti' },
  { id: 'dilna', title: 'Dílna a provozovna' },
  { id: 'kurzy', title: 'Kurzy a vzdělávání' },
]

export type NewsItem = {
  slug: string
  title: string
  date: string
  excerpt: string
  body: string[]
  image: string
}

export const news: NewsItem[] = [
  {
    slug: 'zmena-mailove-adresy',
    title: 'Změna mailové adresy',
    date: '2018-01-15',
    excerpt: 'Pište nám na remesla@uhostroh.cz.',
    image: '/images/contact/provozovna.jpg',
    body: [
      'Změnila se e-mailová adresa, na kterou nám můžete psát: remesla@uhostroh.cz.',
      'Původní adresa je zatím stále funkční, ale nové zprávy posílejte prosím na nový e-mail.',
    ],
  },
  {
    slug: 'krojova-panenka',
    title: 'Krojová panenka',
    date: '2017-09-12',
    excerpt: 'Ostrožská krojová panenka odletěla jako narozeninový dárek do Anglie.',
    image: '/images/about/krojovana-panenka.jpg',
    body: [
      'Tuto ostrožskou krojovou panenku jsme vyráběli jako speciální dárek k narozeninám. Odletěla dělat radost do Anglie.',
    ],
  },
  {
    slug: 'kyjovske-slavnosti-2016',
    title: 'Kyjovské slavnosti 2016',
    date: '2016-08-14',
    excerpt: 'Vzpomínka na letní oslavy 890 let od založení města Kyjova.',
    image: '/images/home/krojovy-pruvod.jpg',
    body: [
      'O víkendu 13. a 14. srpna 2016 se konaly tradiční letní oslavy — tentokrát 890 let od založení města Kyjova.',
      'Sobota i neděle probíhaly v duchu krojů, hudby a setkání. Do fotogalerie se vracíme k této slavnosti i dnes.',
    ],
  },
  {
    slug: 'slovacko-ve-viru-barev',
    title: 'Slovácko ve víru barev a chutí',
    date: '2016-06-01',
    excerpt: 'Kniha plná fotografií Slovácka. Koupíte ji v e-shopu i v naší prodejně.',
    image: '/images/home/vinari.jpg',
    body: [
      'Slovácko ve víru barev a chutí je knížka plná fotografií Slovácka, kterou vydal Region Slovácko v Uherském Hradišti.',
      'Knihu je možné koupit přes náš e-shop nebo v naší prodejně u zámku.',
    ],
  },
]

export const featuredServices = [
  'siti-kroju',
  'pujcovani-kroju',
  'upravy-a-renovace-kroju',
  'prani-a-zehleni-kroju',
  'rucni-tkani',
  'vysivani',
]

export function getService(slug: string) {
  return services.find((item) => item.slug === slug)
}

export function getNews(slug: string) {
  return news.find((item) => item.slug === slug)
}

export function servicesByGroup(group: Service['group']) {
  return services.filter((item) => item.group === group)
}

export function formatDate(iso: string) {
  const [year, month, day] = iso.split('-')
  return `${Number(day)}. ${Number(month)}. ${year}`
}
