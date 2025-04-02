export default defineNuxtConfig({
  compatibilityDate: '2025-04-02',
  $development: {
    devtools: { enabled: true }
  },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-gtag', '@nuxtjs/sitemap']
})