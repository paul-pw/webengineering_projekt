<template>
  <div class="error">
    <h1 v-if="error.statusCode === 404" class="title glitch" data-text="Page not found">
      Page not found
    </h1>
    <h1 v-else class="title glitch" data-text="An error occured">
      An error occurred
    </h1>
    <NuxtLink class="text" to="/">
      Home page
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'ErrorPage',
  layout: 'empty',
  props: { error: { type: Object, required: true } } // you can set a custom layout for the error page
}
</script>
