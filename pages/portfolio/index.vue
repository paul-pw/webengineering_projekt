<template>
  <section class="portfolio">
    <div class="portfolioTitle">
      <h1>Boring Landscapes</h1>
      <p>The Story of a Programmer discovering the outside World</p>
    </div>
    <PortfolioOverview :portfolio="portfolio" />
  </section>
</template>

<script>
export default {
  name: 'PortfolioView',
  async asyncData ({ $content, params }) {
    const portfolio = await $content('portfolio')
      .only(['title', 'img', 'location', 'slug', 'path'])
      .sortBy('createdAt', 'desc')
      .fetch()

    return {
      portfolio
    }
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/sizes.scss";
@use "~/assets/scss/colors.scss";

.portfolio .portfolioTitle {
  margin: sizes.$m_portfolio-title;
  line-height: 1.7;
  color: colors.$text3_1;
  h1 {
    color: colors.$text1;
  }
  p {
    color: colors.$text4;
  }
}
</style>
