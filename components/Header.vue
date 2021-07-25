<template>
  <header>
    <aside aria-label="Linkit">
      <a herf="https://www.linkedin.com/in/santtu-nykanen/">
        <font-awesome-icon :icon="['fab', 'linkedin']"/>
      </a>
      <span class="pipe"> | </span>
      <a href="https://github.com/cyanidesayonara">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
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
