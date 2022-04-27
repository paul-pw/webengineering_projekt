let posts = []

const constructFeedItem = (post, dir, hostname) => {
  const url = `${hostname}/${dir}/${post.slug}`
  return {
    title: post.title,
    id: url,
    link: url,
    description: post.description
  }
}

const createFeed = async (feed, args) => {
  const contentPath = args.contentPath
  const hostname = process.NODE_ENV === 'production' ? 'https://paulw-edu.github.com' : 'http://localhost:3000'
  feed.options = {
    title: args.title,
    description: args.description,
    link: `${hostname}/${args.feedPath}/feed.${args.extension}`
  }
  const { $content } = require('@nuxt/content')
  if (posts === null || posts.length === 0) {
    posts = await $content(contentPath).fetch()
  }

  for (const post of posts) {
    const feedItem = constructFeedItem(post, args.feedPath, hostname)
    feed.addItem(feedItem)
  }
  return feed
}

export default {
  createFeed
}

export {
  createFeed
}
