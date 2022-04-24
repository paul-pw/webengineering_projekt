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
          <nuxt-link class="glitchOnce" to="/blog">
            Blog
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="glitchOnce" to="/portfolio">
            Portfolio
          </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link class="glitchOnce" to="/about">
            About
          </nuxt-link>
        </li>
        <!--<li class="{% if link[1] == page.url %}active{% endif %}">
          <a class="glitchOnce" data-text="{{ link[0] }}" href="{{ link[1] }}">{{ link[0] }}</a>
        </li>-->
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent'
}
</script>
