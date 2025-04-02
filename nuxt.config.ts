export default defineNuxtConfig({
  compatibilityDate: '2025-04-02',
  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag', '@nuxtjs/sitemap'],
  ssr: false,
  target: 'static',
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'Устинов Тимофей — Портфолио Fullstack-разработчик',
      meta: [
        { name: 'description', content: 'Тимофей Устинов. Веб-разработка на Vue.js, Nuxt 3, Node.js и MongoDB.' },
        { name: 'keywords', content: 'портфолио, веб-разработчик, fullstack, vue, nuxt, nodejs, seo, mongodb' },

        // Open Graph (для соцсетей)
        { property: 'og:title', content: 'Устинов Тимофей — Портфолио' },
        { property: 'og:description', content: 'Создаю современные веб-приложения на Nuxt и Node.js.' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://xazada13.github.io/webcraft/' },
        { property: 'og:image', content: 'https://xazada13.github.io/webcraft//preview.jpg' },
      ],

      // Каноническая ссылка и иконка
      link: [
        { rel: 'canonical', href: 'https://xazada13.github.io/webcraft/' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    }
  },
  $production: {
    app: {
      baseURL: "/webcraft"
    },
    router: {
      base: "/webcraft"
    }
  },
  sitemap: {
  hostname: 'https://xazada13.github.io/webcraft/',
  }
})
