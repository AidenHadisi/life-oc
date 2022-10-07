import eslintPlug from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true
  },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  },
  head: {
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }]
  },
  vite: {
    plugins: [eslintPlug()]
  }
})
