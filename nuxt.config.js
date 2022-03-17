import getRoutes from "./utils/getRoutes";
import i18n from './plugins/i18n'

export default {
  target: 'static',
  router: {
    base: '/'
  },
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'portfolio-blog',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/ga.js', mode: 'client' },
    '~/plugins/fontawesome.js',
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: ['@nuxtjs/tailwindcss'],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    "@nuxtjs/sitemap",
    '@nuxtjs/i18n',
  ],

  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  i18n,

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: false,
      },
    },
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ],
    },
  },

  // Sitemap
  sitemap: {
    hostname: 'https://santtu.info',
    routes() {
      return getRoutes();
    },
  },
}
