export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  //mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "static",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: "Criação de Marcas Profissionais - Criaçãodemarcas.com",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: "Somos uma equipe de especialistas apaixonados em criação de marcas. Criamos sua marca 100% exclusiva em até 72 horas úteis com ajustes e versões ilimitadas."
      }
    ],
    script: [
      {
        src: "https://code.iconify.design/1/1.0.7/iconify.min.js"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.png" }]
  },
  /*
   ** Global CSS
   */
  css: [
    // CSS file in the project
    "@/assets/css/main.css",
    // SCSS file in the project
    "@/assets/css/main.scss"
  ],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
  router: {
    linkActiveClass: 'active-link'
  }
};
