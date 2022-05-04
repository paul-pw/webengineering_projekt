
<template>
  <section class="portfoliopost">
    <h1 class="title">
      {{ post.title }}
      <div class="info">
        <span class="date">{{ formatDate(post.createdAt) }}</span>
        <span class="location"> - {{ post.location }}</span>
      </div>
      <!--TODO: position this better-->
      <ReaderControlls :text-array="plaintextArr" />
    </h1>
    <div class="titleImg">
      <img :src="require(`~/assets/images/${post.img}`)" loading="eager">
    </div>
    <div class="content">
      <nuxt-content :document="post" />
    </div>
    <NextPrev :prev="prev" :next="next" />
  </section>
</template>

<script>
import { formatDate } from '~/js/formatDate'
import { articleToPlaintextArr } from '~/js/articleToPlaintext'
export default {
  async asyncData ({ $content, params }) {
    const post = await $content('portfolio', params.post).fetch()

    // get the previous and the next portfolio post
    const [prev, next] = await $content('portfolio')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.post)
      .fetch()

    const plaintextArr = articleToPlaintextArr(post)

    return { post, next, prev, plaintextArr }
  },
  methods: {
    formatDate
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/sizes.scss";
@use "~/assets/scss/colors.scss";

.portfoliopost {
  .title {
    margin: sizes.$m_portfoliopost-title;
    line-height: 1.3;
    color: colors.$text1;
    font-size: 45px;
    .info {
      color: colors.$text4;
      margin-top: 25px;
    }
  }
  .titleImg {
    position: relative;
    margin: sizes.$m_portfoliopost-titleImg;
    animation: 0.7s ease-out 0s 1 smoothSlideIn;
    img {
      margin: 0 auto;
      position: relative;
      max-height: 80vh;
      max-width: 100%;
      width: auto;
    }
  }

  .content {
    position: relative;
    margin: sizes.$m_content;
  }
}
</style>
