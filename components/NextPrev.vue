<template>
  <div class="nextPrev">
    <NuxtLink
      v-if="next"
      :to="next.slug"
      class="next"
    >
      <font-awesome-icon icon="fa-solid fa-arrow-left" /> next
    </NuxtLink>
    <NuxtLink
      v-if="prev"
      :to="prev.slug"
      class="prev"
    >
      previous <font-awesome-icon icon="fa-solid fa-arrow-right" />
    </NuxtLink>
  </div>
</template>

<script>
export default {
  name: 'NextPrev',
  props: {
    prev: {
      type: Object,
      default: null
    },
    next: {
      type: Object,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/colors.scss";
@use "~/assets/scss/animations.scss";

.nextPrev {
  color: colors.$text2;
  margin: 0 10% 0 10%;
  display: flex;
  .next,
  .prev {
    transition: animations.$transition;
    border-bottom: 2px solid transparent;
    &:hover {
      border-bottom: 2px solid colors.$accent;
    }
  }
  .prev{
    margin-left: auto;
  }
}
</style>
