<template>
  <section class="portfolio">
    <div class="portfolioTitle">
      <h1>Boring Landscapes</h1>
      <p>The Story of a Programmer discovering the outside World</p>
    </div>
    <PortfolioOverview :portfolio="portfolio" /></portfoliooverview>
  </section>
</template>

<script>
export default {
  name: 'PortfolioView',
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
