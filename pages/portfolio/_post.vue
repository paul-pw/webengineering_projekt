
<template>
  <section class="portfoliopost">
    <h1 class="title">
      {{ post.title }}
      <div class="info">
        <span class="date">{{ formatDate(post.createdAt) }}</span>
        <span class="location"> - {{ post.location }}</span>
      </div>
    </h1>
    <div class="titleImg">
      <img :src="require(`~/assets/images/${post.img}`)" loading="eager">
    </div>
    <div class="content">
      <nuxt-content :document="post" />
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const post = await $content('portfolio', params.post).fetch()
    return { post }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    }
  }
}
</script>
