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
