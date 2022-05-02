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
      { hid: 'og:title', property: 'og:title', content: 'Portfolio | Blog | Santtu Nykänen' },
      { hid: 'description', name: 'description', content: 'The Online Portfolio and Blog of Santtu Nykänen' },
      { hid: 'image', property: 'image', content: '/photo.png' },
      { hid: 'og:description', property: 'og:description', content: 'The Online Portfolio and Blog of Santtu Nykänen' },
      { hid: 'og:image', property: 'og:image', content: '/photo.png' },
      { hid: 'og:type', property: 'og:type', content: 'Website' },
      { hid: 'author', property: 'author', name: 'author', content: 'Santtu Nykänen' },
      { hid: "publish_date", name: "publish_date", property: "og:publish_date", content: "2022-05-03T00:00:00+0300" }
     ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    { src: '~/plugins/ga.js', mode: 'client' },
    '~/plugins/fontawesome.js'
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
    '@nuxtjs/i18n'
  ],

  css: ['@fortawesome/fontawesome-svg-core/styles.css'],

  i18n,

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {
    markdown: {
      prism: {
        theme: false
      }
    }
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    babel: {
      plugins: [
        ['@babel/plugin-proposal-private-property-in-object', { loose: true }]
      ]
    },
    extend(config) {
      config.module.rules.push({
        test: /\.md$/,
        loader: "frontmatter-markdown-loader"
      });
    }
  },

  // Sitemap
  sitemap: {
    hostname: 'https://santtu.info',
    routes() {
      return getRoutes();
    }
  }
}
