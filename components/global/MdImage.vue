<!--
this component is in the global directory, because it is used by the markdown files and thus needs to be globally accessible by them.
this component is nescesary to load local image because of this issue in nuxtjs: https://github.com/nuxt/content/issues/106
see also: https://content.nuxtjs.org/writing#vue-components
-->

<template>
  <img :src="imgSrc()" :alt="alt" loading="lazy">
</template>

<script>
export default {
  name: 'MdImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  methods: {
    imgSrc () {
      return require(`~/assets/images/${this.src}`)
    }
  }
}
</script>
