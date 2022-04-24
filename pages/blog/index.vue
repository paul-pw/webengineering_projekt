<template>
  <section class="blog">
    <div class="blogTitle">
      <h1>Coding and Photography</h1>
      <p>each is fascinating on it's own but combined they are even more fascinating  </p>
    </div>
    <div v-for="article of articles" :key="article.slug" class="wrapper">
      <div class="post">
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
            {{ article.excerpt }}
          </p>
        </div>
        <!--        <div class="endInfo">
          {% for category in post.categories limit:3 %}
          {% if category != 'blog' and category != 'portfolio' %}
          <div class="category">
            {{ category }}
          </div>
          {%endif%}
          {% endfor %}
        <div class="date">
          {{ post.date | date: '%d. %B, %Y' }}
        </div>-->
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
      .only(['title', 'description', 'img', 'slug', 'author', 'path', 'updatedAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      articles
    }
  }
}
</script>
