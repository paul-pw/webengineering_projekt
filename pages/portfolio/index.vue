<template>
  <section class="portfolio">
    <div class="portfolioTitle">
      <h1>Boring Landscapes</h1>
      <p>The Story of a Programmer discovering the outside World</p>
    </div>
    <div class="wrapper">
      <div v-for="post of portfolio" :key="post.slug" class="post">
        <NuxtLink :to="{ name: 'portfolio-post', params: { post: post.slug } }">
          <div class="Image">
            <img :src="require(`~/assets/images/${post.img}`)" loading="lazy">
          </div>
          <h2 class="title">
            {{ post.title }}<span class="location"> - {{ post.location }}</span>
          </h2>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BlogOverview',
  async asyncData ({ $content, params }) {
    const portfolio = await $content('portfolio')
      .only(['title', 'img', 'location', 'slug', 'path'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      portfolio
    }
  }
}
</script>
