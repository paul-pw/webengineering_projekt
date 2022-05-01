<template>
  <section class="about">
    <img class="bioPhoto" :src="require(`~/assets/images/bio/bio1.jpg`)">
    <div class="content">
      <h1>Hi this is Paul Walker</h1>
      <p>I'm a Student interested in Computer science and Photography. I'm based in Germany.</p>
      <h2>Skills:</h2>
      <ul>
        <li>C++</li>
        <li>VueJs & Nuxt</li>
        <li>Java</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutPage'
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/sizes.scss";
@use "~/assets/scss/colors.scss";

.about {
  margin: sizes.$m_about;
  display: flex;
  align-items: flex-start;
  .bioPhoto {
    margin: 25px 35px 0 0;
    flex-basis: 15%;
    flex-shrink: 0;
    flex-grow: 1;
    border-radius: 50%;
    object-fit: cover;
    max-width: 150px;
  }
  @media only screen and (max-width: 700px) {
    flex-direction: column;
    .bioPhoto{
      margin: 0 auto 0 auto;
    }
  }
}

</style>
