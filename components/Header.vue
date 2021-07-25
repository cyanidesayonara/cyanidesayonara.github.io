<template>
  <header>
    <aside aria-label="Linkit">
      <a href="https://www.linkedin.com/in/santtu-nykanen/">
        <font-awesome-icon :icon="['fab', 'linkedin']"/>
      </a>
      <span class="pipe"> | </span>
      <a href="https://github.com/cyanidesayonara">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
    </aside>
    <nav>
      <router-link to="/" exact>PORTFOLIO</router-link>
      <span class="pipe"> | </span>
      <router-link to="/blog">BLOG</router-link>
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
