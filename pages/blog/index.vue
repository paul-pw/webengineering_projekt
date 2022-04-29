<template>
  <section class="blog">
    <div class="blogTitle">
      <h1>Just a regular Programmer</h1>
      <p>Just a regular Programmer writing about boring things</p>
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

<style lang="scss" scoped>
@use "~/assets/scss/sizes.scss";
@use "~/assets/scss/colors.scss";

.blog {
  white-space: wrap;
  margin: sizes.$m_blog;
  text-align: left;

  .blogTitle {
    margin: sizes.$m_blog-title;
    line-height: 1.7;
    h1 {
      color: colors.$text1;
    }
    p {
      color: colors.$text4;
    }
  }
}
</style>
