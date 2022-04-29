<template>
  <div class="header">
    <nuxt-link to="/">
      <h1 class="title glitchOnce" data-text="PW">
        PW
      </h1>
    </nuxt-link>
    <nav>
      <ul>
        <li class="nav-item">
          <nuxt-link class="glitchOnce" to="/blog" data-text="Blog">
            Blog
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="glitchOnce" to="/portfolio" data-text="Portfolio">
            Portfolio
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="glitchOnce" to="/about" data-text="About">
            About
          </nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/sizes.scss";
@use "~/assets/scss/animations.scss";
@use "~/assets/scss/colors.scss";

.header {
  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
  font-size: 17px;

  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: sizes.$m_header;

  --GlitchOffset: 10;
  --GlitchTime: 550;
  .title {
    color: colors.$text1;
    font-family: "Times New Roman", Times, serif;
    font-size: 45px;
    line-height: 1;
    letter-spacing: 0em;
    font-weight: 400;
    font-style: normal;
    text-decoration: none;
    transition: animations.$transition;
    &:hover {
      text-shadow: -5px -5px 0 red, 5px 5px 0 blue;
    }
  }

  nav {
    margin-left: auto;
    ul {
      li {
        color: colors.$text2;
        display: inline;
        margin: 0 0 0 10px;
        transition: animations.$transition;
        &:hover {
          text-shadow: -5px -5px 0 #ff0000dd, 5px 5px 0 #0000ffdd;
        }
        a {
          --GlitchTime: 250;
          --GlitchOffset: 5;
          font-size: 20px;
        }
      }

      .nuxt-link-active,
      .active {
        text-shadow: -5px -5px 0 #ff0000dd, 5px 5px 0 #0000ffdd;
        position: relative;
      }
    }

    a {
      color: unset;
      text-decoration: unset;
      background: unset;
    }
  }
}
</style>
