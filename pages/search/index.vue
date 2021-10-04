<template>
  <section id="blogs">
    <div>
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
      <p>Published: {{ formatDate(post.date) }}</p>
      <p>{{ post.description }}</p>
      <hr />
    </article>
    <div>
      <button class="see-more" @click="getMorePosts">
        See more posts
      </button>
    </div>
    <search class="search" :search="search" />
  </section>
</template>

<script>
import moment from 'moment'

export default {
  key: (to) => to.fullPath,
  async asyncData({ $content, route }) {
    const query = route.query.q
    const posts = query
      ? await $content('blog', { deep: true })
        .only(['title', 'createdAt', 'description', 'image', 'path', 'date'])
        .sortBy('date', 'desc')
        .search('title', query)
        .limit(5)
        .fetch()
      : await $content('blog', { deep: true })
        .only(['title', 'createdAt', 'description', 'image', 'path', 'date'])
        .sortBy('date', 'desc')
        .limit(5)
        .fetch()
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
      const query = this.$route.query.q
      const posts = query
        ? await this.$content('blog', { deep: true })
          .only(['title', 'createdAt', 'description', 'image', 'path'])
          .sortBy('createdAt', 'desc')
          .search('title', query)
          .skip(5 * this.page)
          .limit(5)
          .fetch()
        : await this.$content('blog', { deep: true })
          .only(['title', 'createdAt', 'description', 'image', 'path'])
          .sortBy('createdAt', 'desc')
          .skip(5 * this.page)
          .limit(5)
          .fetch()
      // if (!posts.length) console.log("no more posts")
      posts.forEach((post) => {
        this.posts.push(post)
      })
      this.page++
    },
    formatDate(date) {
      return moment(date).format('MMMM Do YYYY');
    },
  },
}
</script>
