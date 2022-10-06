// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      apiBase: "/api",
    },
  },
  head: {
    link: [{ rel: "icon", type: "image/png", href: "/favicon.ico" }],
  },
});
