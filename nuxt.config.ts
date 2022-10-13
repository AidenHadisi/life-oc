import eslintPlug from 'vite-plugin-eslint'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
    strict: true,
    typeCheck: true
  },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/robots', '@nuxtjs/google-fonts'],
  runtimeConfig: {
    public: {
      apiBase: '/api'
    }
  },
  head: {
    link: [{ rel: 'icon', type: 'image/png', href: '/favicon.ico' }],

    meta: [{ name: 'description', content: 'Life Church of Orange California' }]
  },
  vite: {
    plugins: [eslintPlug()]
  },
  googleFonts: {
    families: {
      Roboto: true,
      'Anek Latin': true
    }
  }
})
