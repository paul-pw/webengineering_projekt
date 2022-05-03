<template>
  <section class="blogpost">
    <h1 class="title">
      {{ article.title }}
      <div class="date">
        {{ formatDate(article.updatedAt) }}
      </div>
      <button
        type="button"
        @click="readArticle(article)"
      >
        read Article
      </button>
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
    <NextPrev :prev="prev" :next="next" />
    <div class="categories">
      <div v-for="category_name of article.categories" :key="category_name" class="category">
        {{ category_name }}
      </div>
    </div>
  </section>
</template>

<script>
export default {
  async asyncData ({ $content, params }) {
    const article = await $content('articles', params.articles).fetch()

    // get the previous and the next post
    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.articles)
      .fetch()

    return { article, prev, next }
  },
  methods: {
    formatDate (date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
    readArticle (article) {
      const data = article.body.children
      const getText = function (test) {
        return test.map(function (input) {
          if (input.type === 'text') {
            return input.value
          }
          if (input.tag === 'p') {
            return getText(input.children).join('')
          }
          return getText(input.children)
        }).flat()
      }
      const text = getText(data)
      // console.log(text)
      const speech = text.map(line => new SpeechSynthesisUtterance(line))
      for (const i in speech) {
        speechSynthesis.speak(speech[i])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/sizes.scss";
@use "~/assets/scss/colors.scss";
@use "~/assets/scss/animations.scss";
@use "~/assets/scss/aspectRatio.scss";

.blogpost {
  .title {
    margin: sizes.$m_blogpost-title;
    line-height: 1.3;
    color: colors.$text1;
    font-size: 45px;
    .date {
      margin-top: 25px;
      color: colors.$text4;
    }
  }
  .titleImg {
    animation: 0.7s ease-out 0s 1 smoothSlideIn;
    margin: sizes.$m_blogpost-titleImg;
    width: auto;
    .Img {
      @include aspectRatio.setAspectRatio(aspectRatio.Aspect_Ratio(2, 1));
      position: relative;
      overflow: hidden;

      .imgResize {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;

        img {
          width: 100%;
          object-fit: cover;
        }
      }
    }
  }

  .content {
    margin: sizes.$m_content;
  }
  .categories {
    margin: sizes.$m_blogpost-categories;
    text-align: center;
    .category {
      display: inline-block;
      font-size: 17px;
      background: colors.$accent;
      color: colors.$text6;
      line-height: 1;
      padding: 5px 10px;
      margin: 5px;
      opacity: 0.9;
      transition: animations.$transition;

      &:hover {
        opacity: 1;
      }
    }
  }
}

</style>
