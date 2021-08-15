<template>
  <div>
    <form>
      <input
        v-model="search"
        type="search"
        placeholder="Search posts"
        aria-label="Search Input"
      />
      <nuxt-link :to="execSearch()">
        <button aria-label="Search">
          Search
        </button>
      </nuxt-link>
    </form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      search: '',
    }
  },
  methods: {
    execSearch() {
      if (this.search === '') return '/blog/'
      return '/search/?q=' + this.search.toLowerCase()
    },
  },
}
</script>
