<template>
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
</template>

<script>
export default {
  name: 'PortfolioOverview',
  props: {
    portfolio: {
      type: Array,
      required: true
    }
  }
}
</script>
