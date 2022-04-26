<template>
  <section class="blog">
    <div class="blogTitle">
      <h1>Coding and Photography</h1>
      <p>each is fascinating on it's own but combined they are even more fascinating  </p>
    </div>
    <div class="wrapper">
      <div v-for="article of articles" :key="article.slug" class="post">
        <div class="image">
          <div class="imgResize">
            <NuxtLink :to="{ name: 'blog-articles', params: { articles: article.slug } }">
              <img :src="require(`~/assets/images/${article.img}`)" loading="lazy">
            </NuxtLink>
          </div>
        </div>
        <div class="excerpt">
          <NuxtLink :to="{ name: 'blog-articles', params: { articles: article.slug } }">
            <h2 class="title">
              <span class="underline">{{ article.title }}</span>
            </h2>
          </NuxtLink>
          <p class="text">
            {{ article.description }}
          </p>
        </div>
        <div class="endInfo">
          <div v-for="(category, index) of article.categories" :key="index" class="category">
            {{ category }}
          </div>
          <div class="date">
            {{ formatDate(article.updatedAt) }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogOverview',
  async asyncData ({ $content, params }) {
    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author', 'path', 'updatedAt', 'categories'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
