import { createFeed } from './js/feed'

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'server', // TODO change back to static after Project is handed in.

  server: {
    host: '0.0.0.0', // use 0.0.0.0 instead of localhost for docker to work
    port: 3000
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'klausurprojekt',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg', sizes: 'any' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Custom css
    '@/assets/scss/main.scss',
    // Fontawesome css
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // Fontawesome integration.
    '~/plugins/fontawesome.js'
  ],

  // server Middleware that also runs in static site generation mode
  serverMiddleware: [
    // Proxy for Wikipedia
    { path: '/proxy', handler: '~/server-middleware/proxy.js' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // TODO potentially use image.nuxtjs.org
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/feed'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      // the markdown code colorscheme
      prism: {
        theme: 'prism-themes/themes/prism-one-dark.css'
      }
    }
  },

  // feed module configuration
  feed: [
    {
      path: '/blog/feed.xml',
      create: createFeed,
      cacheTime: 1000 * 60 * 15,
      type: 'rss2',
      data: {
        title: 'Blog Title',
        description: 'Blog description',
        feedPath: 'blog', // path on the website
        contentPath: 'articles', // local directory structure
        extension: 'xml'
      }
    }
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
