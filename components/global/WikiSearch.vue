<template>
  <div>
    <button class="wikiSearch" type="button" @click="show = !show">
      Wikipedia Search
      <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
    </button>
    <div v-if="show">
      <input v-model="searchText" placeholder="Search Wikipedia">
      <button class="wikiSearch" type="button" @click="fetchArticles(searchText)">
        Go
      </button>
      <table>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Extract</th>
          <th>Link</th>
        </tr>
        <tr v-for="article in articles" :key="article.pageid">
          <td>{{ article.title }}</td>
          <td>{{ article.description }}</td>
          <td>{{ article.extract }}</td>
          <td>
            <a
              :href="`https://de.wikipedia.org/?curid=${article.pageid}`"
            > https://de.wikipedia.org/?curid={{ article.pageid }} </a>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>>

<script>
export default {
  name: 'WikiSearch',
  data () {
    return {
      show: false,
      searchText: '',
      articles: []
    }
  },
  methods: {
    async fetchArticles (query) {
      const res = await fetch(
        `/proxy/?https://de.wikipedia.org/w/api.php?action=query&generator=prefixsearch&format=json&gpslimit=4&prop=extracts%7Cdescription&exintro=1&explaintext=1&exsentences=3&redirects=1&gpssearch=${query}`
      ).then(res => res.json())

      if (res.error == null) {
        this.articles = Object.values(res.response.query.pages)
      } else {
        this.articles = []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/colors.scss";

.wikiSearch{
  background-color: colors.$accent;
  color: colors.$text1;
  padding: 10px;
  border-radius: 5px;
  border: none;
}

table{
  height: 100px;
  background-color: blue;
}
</style>
