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
