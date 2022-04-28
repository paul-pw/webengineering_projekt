<template>
  <div>
    <section class="homeInfo">
      <div class="content" data-text="Paul Walker">
        <!--TODO title anpassen-->
        <div class="glitch title" data-text="Page Title">
          Page Title
        </div>
        <div class="glitch text" data-text="Page Content">
          Page Content
        </div>
      </div>
      <a class="downArrow" href="#blog" />
    </section>
    <section id="blog" class="blogWrapper">
      <div class="blog">
        <ArticleOverview :articles="articles" />
      </div>
      <a class="more glitchOnce" data-text="Read more..." href="/blog/">Read more...</a>
    </section>

    <section class="line" />

    <section class="portfolioWrapper">
      <h1 class="home title">
        Portfolio:
      </h1>
      <div class="portfolio">
        <PortfolioOverview :portfolio="portfolio" />
      </div>
      <a class="more glitchOnce" data-text="more..." href="/portfolio/">more...</a>
    </section>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  async asyncData ({ $content, params }) {
    const portfolio = await $content('portfolio')
      .only(['title', 'img', 'location', 'slug', 'path'])
      .sortBy('createdAt', 'asc')
      .limit(4)
      .fetch()

    const articles = await $content('articles')
      .only(['title', 'description', 'img', 'slug', 'author', 'path', 'updatedAt', 'categories'])
      .sortBy('createdAt', 'asc')
      .limit(3)
      .fetch()

    return {
      portfolio,
      articles
    }
  }

}
</script>
