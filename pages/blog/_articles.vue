<template>
  <div>
    <section class="blogpost">
      <h1 class="title">
        {{ article.title }} <div class="date">
          {{ formatDate(article.updatedAt) }}
        </div>
      </h1>
      <div class="titleImg">
        <div class="Img">
          <div class="imgResize">
            <img :src="require(`~/assets/images/${article.img}`)" loading="eager">
          </div>
        </div>
      </div>
      <div class="content">
        <nuxt-content :document="article" />
      </div>
      <div class="categories" />
    </section>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.articles).fetch()
    console.log(article)
    return { article }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>