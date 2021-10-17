<template>
  <header>
    <aside aria-label="Links">
      <a href="https://www.linkedin.com/in/santtu-nykanen/">
        <font-awesome-icon :icon="['fab', 'linkedin']"/>
      </a>
      <span class="pipe"> | </span>
      <a href="https://github.com/cyanidesayonara">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
    </aside>
    <nav>
      <nuxt-link id="home-button" to="/">SN</nuxt-link>
      <span class="pipe"> | </span>
      <nuxt-link to="/portfolio/">PORTFOLIO</nuxt-link>
      <span class="pipe"> | </span>
      <nuxt-link to="/blog/">BLOG</nuxt-link>
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
          this.$router.push('/search/')
        } else {
          this.$router.push('/search/?s=' + this.searchInHeader.toLowerCase())
          this.searchInHeader = ''
        }
      },
    },
  }
</script>

<style>
.nuxt-link-inactive {
  color: #2cb3ac;
}
#home-button {
  padding: 4px;
  border: 4px solid #2cb3ac;
  border-radius: 15%;
  text-decoration: none;
}
</style>
