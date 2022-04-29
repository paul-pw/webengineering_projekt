<template>
  <div class="footer">
    <section class="wrapper">
      <h1>PW</h1>
      <p>&copy; 2022 by paul walker</p>
      <div class="socials">
        <a href="/blog/feed.xml">
          <font-awesome-icon icon="fa-solid fa-rss" class="social fa" />
        </a>
        <a href="https://www.instagram.com/instagram/">
          <font-awesome-icon icon="fa-brands fa-instagram" class="social fa" />
        </a>
        <a href="https://github.com/paulw-edu/">
          <font-awesome-icon icon="fa-brands fa-github" class="social fa" />
        </a>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent'
}
</script>

<style lang="scss" scoped>
@use "~/assets/scss/sizes.scss";
@use "~/assets/scss/colors.scss";
@use "~/assets/scss/animations.scss";

.footer {
  $socialIcon_size: 20px;
  margin: sizes.$m_footer;
  padding: sizes.$p_footer;
  background: colors.$bg3;
  .wrapper {
    position: relative;
    div.socials {
      position: absolute;
      right: 0;
      top: 0;
      .social {
        margin: 0 5px;
        float: right;
        padding: 10px;
        font-size: $socialIcon_size;
        width: $socialIcon_size;
        text-align: center;
        text-decoration: none;
        border-radius: 50%;
        background: colors.$text5;
        color: colors.$text6;
        transition: animations.$transition;
        &:hover {
          background: colors.$accent;
        }
      }
    }
    h1 {
      color: colors.$text2;
    }
    p {
      color: colors.$text3;
    }
    a {
      text-decoration: underline;
    }
  }
}
</style>
