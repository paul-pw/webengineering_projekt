<template>
  <section class="blog">
    <div class="blogTitle">
      <h1>Coding and Photography</h1>
      <p>each is fascinating on it's own but combined they are even more fascinating  </p>
    </div>
    <ArticleOverview :articles="articles" />
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
  }
}
</script>
