<template>
  <div>
    <section class="homeInfo">
      <Header />
      <div class="glitch title" data-text="Hello World">
        Hello World
      </div>

      <a class="downArrow" href="#blog" />
    </section>
    <section id="blog" class="blogWrapper">
      <h1 class="home title">
        Blog:
      </h1>

      <div class="blog">
        <ArticleOverview :articles="articles" />
      </div>
      <a
        class="more glitchOnce"
        data-text="Read more..."
        href="/blog/"
      >Read more...</a>
    </section>

    <section class="portfolioWrapper">
      <h1 class="home title">
        Portfolio:
      </h1>
      <div class="portfolio">
        <PortfolioOverview :portfolio="portfolio" />
      </div>
      <a
        class="more glitchOnce"
        data-text="more..."
        href="/portfolio/"
      >more...</a>
    </section>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  layout: 'empty',
  async asyncData ({ $content, params }) {
    const portfolio = await $content('portfolio')
      .only(['title', 'img', 'location', 'slug', 'path'])
      .sortBy('createdAt', 'desc')
      .limit(4)
      .fetch()

    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author', 'path', 'createdAt', 'categories'])
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()

    return {
      portfolio,
      articles
    }
  }

}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/sizes.scss";
@use "~/assets/scss/colors.scss";
@use "~/assets/scss/animations.scss";

.home.title {
  text-align: left;
  margin: sizes.$m_home-title;
  line-height: 1;
  color: colors.$text1;
}

.homeInfo {
  position: relative;
  height: 100vh;
  display: block;
  header {
    margin: 0;
    display: block;

    nav {
      ul {
        text-align: center;
        padding: 10px 0 0 0;

        li {
          margin: 0 10px 0 10px;
          display: inline-block;
        }
      }
    }
  }

  .title {
    position: absolute;
    text-align: center;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 15px;
    font-style: italic;
    text-transform: uppercase;
    color: colors.$text1;
    width: 90%;
    &.glitch {
      --GlitchOffset: 3;
    }

    font-family: Arial, Helvetica, sans-serif;
    font-style: italic;
    font-size: sizes.$titleFontSize;
  }

  .downArrow {
    position: absolute;
    bottom: 50px;
    right: 50%;
    transform: translateX(50%);
    width: 100px;
    height: 50px;

    &::after,
    &::before {
      content: " ";
      display: block;
      position: absolute;
      top: 50%;
      width: 50.1%;
      height: 2px;
      background: colors.$text1;
      white-space: nowrap;
      box-shadow: 0px 3px 0px 1px #ff0000, 0px -3px 0px 1px #0000ff;
    }
    &::before {
      left: 0;
      transform: skewY(30deg);
    }
    &::after {
      right: 0;
      transform: skewY(-30deg);
    }
  }
}

.blogWrapper {
  padding-top: 20px;
  text-align: center;

  .blog {
    white-space: wrap;
    margin: sizes.$m_blog;
    text-align: left;
  }
}

.portfolioWrapper {
  text-align: center;
  margin: sizes.$m_home-portfolioWrapper;
}

.more {
  display: block;
  margin: 50px auto 50px auto;
  font-size: 20px;
  background: colors.$accent;
  color: colors.$text6;
  opacity: 0.9;
  line-height: 1;
  padding: 15px 35px;
  transition: animations.$transition;
  width: fit-content;
  &:hover {
    opacity: 1;
  }

  &.glitchOnce {
    --GlitchTime: 350;
    --GlitchOffset: 5;
  }
}
</style>
