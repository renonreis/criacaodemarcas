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
  plugins: [{ src: '~plugins/ga.js', mode: 'client' }],
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
  modules: [
    '@nuxtjs/gtm',
    ['nuxt-cookie-control', {
      css: true,

      //enable or disable css variables polyfill
      cssPolyfill: true,

      //if you want to tree-shake locales set locales you want to use
      locales: ['pt'],

      //modal opener (cookie control)
      controlButton: false,

      //block iframes to prevent them from adding additional cookies
      blockIframe: false,

      //position of cookie bar:
      //'top-left', 'top-right', 'top-full',
      //'bottom-left', 'bottom-right', 'bottom-full'
      barPosition: 'bottom-left',

      //default colors
      //if you want to disable colors set colors property to false
      colors: {
        barTextColor: '#000',
        barBackground: '#eee',
        barButtonColor: '#fff',
        barButtonHoverColor: '#43237a',
        barButtonBackground: '#43237a',
        barButtonHoverBackground: '#55ffc5',
        modalButtonHoverBackground: '#55ffc5',
      },

      //default texts
      text: {
        barDescription: 'Ao navegar no site, você aceita os cookies que usamos para melhorar sua experiência. ',
        acceptAll: 'Entendi',
      }
    }]
  ],
  gtm: {
    id: 'GTM-N4XQMH8',
    enabled: true
  },
  publicRuntimeConfig: {
    gtm: {
      id: process.env.GOOGLE_TAG_MANAGER_ID
    }
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {

  },
  router: {
    linkActiveClass: 'active-link',
    target: 'static',
    router: {
      base: '/dist/'
    }
  }
};
