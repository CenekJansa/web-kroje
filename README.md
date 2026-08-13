# Lidové kroje

Public website for **Lidové Tradice a Řemesla** in Uherský Ostroh. It is a modern rebuild of [lidove-kroje.cz](http://www.lidove-kroje.cz).

The site presents folk costume sewing, rental, repairs, weaving, embroidery, courses, gallery, and contact details. The e-shop stays on [siti-kroju.cz](https://www.siti-kroju.cz/).

## Setup

You need Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local server |
| `npm run build` | Build for production |
| `npm run generate` | Build a static site |
| `npm run preview` | Preview the production build |

## Edit content

Texts, services, news, gallery items, and contact data live in one file:

```
app/data/content.ts
```

Change that file when you need to update copy, prices, or contact details. Pages read from this file. Do not put secrets in it.

## Project layout

```
app/
  assets/css/     styles
  components/     header, footer, cards
  data/           site content
  layouts/        default page shell
  pages/          routes
public/images/    photos from the original site
nuxt.config.ts    Nuxt and Tailwind setup
```

## Pages

- `/` home
- `/o-nas` about
- `/sluzby` services
- `/sluzby/[slug]` one service
- `/fotogalerie` gallery
- `/vzdelavani` courses
- `/novinky` news
- `/kontakty` contact
- `/virtualni-prohlidka` map

## Stack

- Nuxt 4
- Vue 3 Composition API
- Tailwind CSS
- TypeScript
