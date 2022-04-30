<template>
  <div class="body">
    <Header class="header" />
    <Nuxt class="nuxtContent" />
    <Footer class="footer" />
  </div>
</template>

<script>
export default {
  name: 'DefaultLayout'
}
</script>

<style lang="scss" scoped>
.nuxtContent{
  flex-grow: 1;
}
.body{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
