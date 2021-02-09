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
 
    //in case you have subdomains (shop.yourdomain.com)
    domain: 'yourdomain.com',
 
    //if you want to tree-shake locales set locales you want to use
    locales: ['pt'],
 
    //modal opener (cookie control)
    controlButton: true,
 
    //block iframes to prevent them from adding additional cookies
    blockIframe: true,
 
    //or if you want to set initialState to false (default value for initialState is true)
    blockIframe: {
      initialState: false
    },
 
    //position of cookie bar:
    //'top-left', 'top-right', 'top-full',
    //'bottom-left', 'bottom-right', 'bottom-full'
    barPosition: 'bottom-full',
 
    //default colors
    //if you want to disable colors set colors property to false
    colors: {
      barTextColor: '#fff',
      modalOverlay: '#000',
      barBackground: '#000',
      barButtonColor: '#000',
      modalTextColor: '#000',
      modalBackground: '#fff',
      modalOverlayOpacity: 0.8,
      modalButtonColor: '#fff',
      modalUnsavedColor: '#fff',
      barButtonHoverColor: '#fff',
      barButtonBackground: '#fff',
      modalButtonHoverColor: '#fff',
      modalButtonBackground: '#000',
      controlButtonIconColor: '#000',
      controlButtonBackground: '#fff',
      barButtonHoverBackground: '#333',
      checkboxActiveBackground: '#000',
      checkboxInactiveBackground: '#000',
      modalButtonHoverBackground: '#333',
      checkboxDisabledBackground: '#ddd',
      controlButtonIconHoverColor: '#fff',
      controlButtonHoverBackground: '#000',
      checkboxActiveCircleBackground: '#fff',
      checkboxInactiveCircleBackground: '#fff',
      checkboxDisabledCircleBackground: '#fff',
    },
 
    //default texts
    text: {
      barTitle: 'Cookies',
      barDescription: 'We use our own cookies and third-party cookies so that we can show you this website and better understand how you use it, with a view to improving the services we offer. If you continue browsing, we consider that you have accepted the cookies.',
      acceptAll: 'Accept all',
      declineAll: 'Delete all',
      manageCookies: 'Manage cookies',
      unsaved: 'You have unsaved settings',
      close: 'Close',
      save: 'Save',
      necessary: 'Necessary cookies',
      optional: 'Optional cookies',
      functional: 'Functional cookies',
      blockedIframe: 'To see this, please enable functional cookies',
      here: 'here'
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
    linkActiveClass: 'active-link'
  }
};
