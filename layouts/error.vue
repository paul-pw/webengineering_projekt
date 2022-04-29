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
  props: { error: { type: Object, required: true } }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/colors.scss";

.error {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100vw;
  height: 100vh;

  --GlitchOffset: 10;
  --GlitchTime: 550;
  .title {
    color: colors.$text1;
    font-family: "Times New Roman", Times, serif;
    font-size: 45px;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    display: block;
    max-width: max-content;
    border: none;
  }
  .text {
    display: block;
    color: colors.$text2;
    text-decoration: underline;
  }
}

</style>
