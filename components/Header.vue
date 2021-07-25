<template>
  <header>
    <aside aria-label="Linkit">
      <nuxt-link to="https://www.linkedin.com/in/santtu-nykanen/">
        <font-awesome-icon :icon="['fab', 'linkedin']"/>
      </nuxt-link>
      <span class="pipe"> | </span>
      <nuxt-link to="https://github.com/cyanidesayonara">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </nuxt-link>
    </aside>
    <nav>
      <nuxt-link to="/portfolio/">PORTFOLIO</nuxt-link>
        <span class="pipe"> | </span>
      <nuxt-link to="/blog">BLOG</nuxt-link>
    </nav>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        searchInHeader: '',
      }
    },
    methods: {
      search() {
        if (this.searchInHeader === '') {
          this.$router.push('/articles/')
        } else {
          this.$router.push('/articles/?s=' + this.searchInHeader.toLowerCase())
          this.searchInHeader = ''
        }
      },
    },
  }
</script>
