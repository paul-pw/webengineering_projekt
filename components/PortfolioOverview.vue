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

<style lang="scss" scoped>
@use "~/assets/scss/sizes.scss";
@use "~/assets/scss/animations.scss";
@use "~/assets/scss/colors.scss";

@keyframes portfolio {
  0% {
    transform: translateY(10%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}

.wrapper {
  margin: sizes.$m_portfolio;
  text-align: center;
  .post {
    animation: 1.8s ease-out 1 portfolio;
    position: relative;
    display: inline-block;
    overflow: hidden;
    padding: 0 0 25px 0;
    margin: 2px 2px;
    img {
      position: relative;
      max-height: 40vh;
      max-width: 100%;
      width: auto;
      box-shadow: 10px 12px 70px -53px rgba(colors.$accent, 0.5);
    }
    .title {
      transition: animations.$transition;
      opacity: 0;
      position: absolute;
      text-align: left;
      left: 0;
      font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
        "Lucida Sans", Arial, sans-serif;
      font-size: 18px;
      font-weight: 400;
      font-style: normal;
      text-decoration: none;
      color: colors.$text1_1;
      .location {
        font-family: inherit;
        font-size: inherit;
        font-weight: 400;
        font-style: inherit;
        text-decoration: inherit;
        color: colors.$text4;
      }
    }
    &:hover .title {
      opacity: 1;
    }
  }
  .post:nth-child(0) {
    animation-duration: 0.4s;
  }
  .post:nth-child(1) {
    animation-duration: 0.6s;
  }
  .post:nth-child(2) {
    animation-duration: 0.8s;
  }
  .post:nth-child(3) {
    animation-duration: 1s;
  }
  .post:nth-child(4) {
    animation-duration: 1.2s;
  }
  .post:nth-child(5) {
    animation-duration: 1.4s;
  }
  .post:nth-child(6) {
    animation-duration: 1.6s;
  }
  .post:nth-child(7) {
    animation-duration: 1.8s;
  }
}
</style>
