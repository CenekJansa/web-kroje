import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  nitro: {
    preset: 'cloudflare-pages',
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
  },
  app: {
    head: {
      htmlAttrs: { lang: 'cs' },
      title: 'Lidové kroje | Lidové Tradice a Řemesla',
      meta: [
        {
          name: 'description',
          content:
            'Šijeme lidové kroje a krojové doplňky v Uherském Ostrohu. Výroba, opravy, praní, půjčování krojů, ruční tkaní a vyšívání.',
        },
        { name: 'theme-color', content: '#7A1A1A' },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,500;0,600;0,700;1,500;1,600&family=Outfit:wght@300;400;500;600;700&display=swap',
        },
      ],
    },
  },
})
