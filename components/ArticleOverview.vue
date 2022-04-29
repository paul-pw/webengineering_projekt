<template>
  <div class="wrapper">
    <div v-for="article of articles" :key="article.slug" class="post">
      <div class="image">
        <div class="imgResize">
          <NuxtLink
            :to="{
              name: 'blog-articles',
              params: { articles: article.slug },
            }"
          >
            <img
              :src="require(`~/assets/images/${article.img}`)"
              loading="lazy"
            >
          </NuxtLink>
        </div>
      </div>
      <div class="excerpt">
        <NuxtLink
          :to="{
            name: 'blog-articles',
            params: { articles: article.slug },
          }"
        >
          <h2 class="title">
            <span class="underline">{{ article.title }}</span>
          </h2>
        </NuxtLink>
        <p class="text">
          {{ article.description }}
        </p>
      </div>
      <div class="endInfo">
        <div
          v-for="(category, index) of article.categories"
          :key="index"
          class="category"
        >
          {{ category }}
        </div>
        <div class="date">
          {{ formatDate(article.updatedAt) }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArticleOverview',
  props: {
    articles: {
      type: Array,
      required: true
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

<style lang="scss" scoped>
@use "~/assets/scss/sizes.scss";
@use "~/assets/scss/colors.scss";
@use "~/assets/scss/animations.scss";
@use "~/assets/scss/aspectRatio.scss";

.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 30px;
  :first-child.post {
    grid-column: 1/3;
    grid-row: 1/3;
    .excerpt .title {
      margin: 0 0 12px 0;
      font-family: Verdana, Geneva, Tahoma, sans-serif;
      line-height: 1, 56;
      font-size: 25px;
      font-weight: 600;
      color: colors.$text2;
      .underline {
        transition: background-size 600ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
      }
    }
    .image {
      @include aspectRatio.setAspectRatio(aspectRatio.Aspect_Ratio(16, 9));
    }
  }
  :nth-child(n + 2):nth-child(-n + 3) {
    .excerpt .text {
      // only show excerpt for first post
      display: none;
    }
    .endInfo {
      margin-top: auto;
      padding: 20px 16px;
      display: flex;
      flex-wrap: wrap-reverse;
      :last-child {
        width: 100%;
        padding: 5px 0 5px 5px;
        flex-grow: 0;
        flex-shrink: 0;
      }
    }
    .image {
      @include aspectRatio.setAspectRatio(aspectRatio.Aspect_Ratio(2, 1));
    }
  }
  .post {
    animation: 0.7s ease-out 0s 1 smoothSlideIn;
    background: colors.$bg;
    line-height: 1.7;
    vertical-align: top;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    overflow-wrap: normal;
    position: relative;
    min-height: 300px;
    box-shadow: 10px 12px 70px -53px rgba(colors.$accent, 0.3);
    .image {
      @include aspectRatio.setAspectRatio(aspectRatio.Aspect_Ratio(3, 2));
      width: 100%;
      position: relative;
      overflow: hidden;
      .imgResize {
        position: absolute;
        left: 0;
        bottom: 0;
        height: 100%;
        a img {
          width: 100%;
          object-fit: cover;
        }
      }
    }
    .excerpt {
      padding: 20px;
      .title {
        margin: 0 0 12px 0;
        color: colors.$text2;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        font-size: 18px;
        line-height: 1.5;
        font-weight: 600;
        .underline {
          color: inherit;
          font-family: inherit;
          font-size: inherit;
          line-height: inherit;
          font-weight: inherit;
          //width: calc(100%);
          background-image: linear-gradient(
            180deg,
            transparent 87%,
            colors.$accent 0
          );
          background-repeat: no-repeat;
          background-size: 0% 100%;
          transition: background-size 300ms cubic-bezier(0.46, 0.03, 0.52, 0.96);
          position: relative;
        }
      }
      .text {
        margin: 15px 0 0 0;
        line-height: 1.6;
        font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
          "Lucida Sans", Arial, sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19px;
        text-decoration: none;
        color: colors.$text3;
      }
    }
    .endInfo {
      margin-top: auto;
      padding: 20px 16px;
      display: flex;
      .category {
        font-size: 17px;
        background: colors.$accent;
        color: colors.$text6;
        line-height: 1;
        padding: 5px 10px;
        margin: auto 10px auto 0;
        opacity: 0.9;
        transition: animations.$transition;
        &:hover {
          opacity: 1;
        }
      }
      .date {
        font-size: 15px;
        bottom: 5px;
        color: colors.$text5;
        margin: auto 0 auto auto;
        align-self: flex-end;
      }
    }
    &:hover .title .underline {
      background-size: 100% 100%;
    }
  }
}
</style>
