<template>
  <section id="blogs">
    <div>
      <aside>
        <div>
          <form>
            <input
              v-model="search"
              type="search"
              placeholder="Search Articles"
              aria-label="Search Input"
            />
            <nuxt-link :to="execSearch()">
              <button aria-label="Search">
                Search
              </button>
            </nuxt-link>
          </form>
        </div>
      </aside>
      <h1 v-if="!query">Latest posts</h1>
      <h1 v-if="query">Search results for: {{ query }}</h1>
    </div>
    <article
      v-for="post in posts"
      :key="post.title"
    >
      <nuxt-link :to="'/blog/' + post.path.split('/')[1]">
        <img
          v-if="post.image"
          :src="
            require('~/content/' +
              post.path.split('/')[1] +
              '/images/' +
              post.image)
          "
          :alt="post.title"
        />
        <h3>
          {{ post.title }}
        </h3>
      </nuxt-link>
      <p>Published: {{ formatDate(post.createdAt) }}</p>
      <p>{{ post.description }}</p>
      <hr />
    </article>
    <div>
      <button v-if="!query" @click="getMorePosts">
        See more posts
      </button>
    </div>
  </section>
</template>

<script>
import moment from 'moment'

export default {
  key: (to) => to.fullPath,
  async asyncData({ $content, route }) {
    const query = route.query.q
    let posts
    if (!query) {
      posts = await $content({ deep: true })
        .only(['title', 'createdAt', 'description', 'image', 'path'])
        .sortBy('createdAt', 'desc')
        .limit(5)
        .fetch()
    } else {
      posts = await $content({ deep: true })
        .only(['title', 'createdAt', 'description', 'image', 'path'])
        .sortBy('createdAt', 'desc')
        .search('title', query)
        .fetch()
    }
    return {
      posts,
      query,
    }
  },
  data () {
    return {
      page: 1,
      search: '',
      title: this.$route.query.q
       ? "Search results for: " + this.$route.query.q 
       : "Latest posts",
    }
  },
  head() {
    return {
      title: this.title,
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: this.title,
          name: this.title,
          content: this.title,
        },
      ],
    }
  },
  watchQuery: ['q'],
  methods: {
    async getMorePosts() {
      const blogPosts = await this.$content({ deep: true })
        .only(['title', 'createdAt', 'description', 'image', 'path'])
        .sortBy('createdAt', 'desc')
        .skip(5 * this.page)
        .limit(5)
        .fetch()
      blogPosts.forEach((post) => {
        this.posts.push(post)
      })
      this.page++
    },
    formatDate(date) {
      return moment(date).format('MMMM Do YYYY, hh:mm:ss');
    },
    execSearch() {
      if (this.search === '') return '/search/'
      return '/search/?q=' + this.search.toLowerCase()
    },
  },
}
</script>