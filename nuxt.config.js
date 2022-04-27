export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/scss/main.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    // Fontawesome integration.
    { src: '~/plugins/fontawesome.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  // TODO potentially use image.nuxtjs.org
  // TODO use nuxtjs/sitemap
  // TODO link to rss from footer
  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    '@nuxtjs/feed'
  ],

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-one-dark.css'
      }
    }
  },

  // feed module configuration // TODO rewrite this to work with npm run generate (see example here: https://content.nuxtjs.org/integrations/)
  feed () {
    // config for Feed here.
    const baseUrlArticles = 'http://localhost:3000/blog'
    const baseLinkFeedArticles = '/feed/blog'
    const feedFormats = {
      rss: { type: 'rss2', file: 'rss.xml' }
    }
    const { $content } = require('@nuxt/content')

    const createFeedArticles = async function (feed) {
      feed.options = {
        title: 'Coding and Photography',
        description: 'each is fascinating on it`s own but combined they are even more fascinating ',
        link: baseUrlArticles
      }
      const articles = await $content('articles').fetch()

      articles.forEach((article) => {
        const url = `${baseUrlArticles}/${article.slug}`

        feed.addItem({
          title: article.title,
          id: url,
          link: url,
          // TODO date:
          description: article.description,
          content: article.description,
          author: article.author
        })
      })
    }

    return Object.values(feedFormats).map(({ file, type }) => ({
      path: `${baseLinkFeedArticles}/${file}`,
      type,
      create: createFeedArticles
    }))
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
