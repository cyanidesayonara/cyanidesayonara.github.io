<template>
  <section id="blogs">
    <div>
      <h1>Latest posts</h1>
    </div>
    <article v-for="post in posts" :key="post.title">
      <nuxt-link :to="'/blog/' + post.path.split('/')[2]">
        <img
          v-if="post.image"
          :src="
            require('~/content/' +
              post.path.split('/')[2] +
              '/images/' +
              post.image)
          "
          :alt="post.title"
        />
        <h3>{{ post.title }}</h3>
      </nuxt-link>
      <p>Published: {{ formatDate(post.createdAt) }}</p>
      <p>{{ post.description }}</p>
      <hr />
    </article>
    <div>
      <button @click="getMorePosts">
        See more posts
      </button>
    </div>
    <search :search="search" />
  </section>
</template>

<script>
import moment from 'moment'

export default {
  key: (to) => to.fullPath,
  async asyncData({ $content, route }) {
    const posts = await $content('blog', { deep: true })
      .only(['title', 'createdAt', 'description', 'image', 'path'])
      .where({ dir: { $ne: route.path } })
      .sortBy('createdAt', 'desc')
      .limit(5)
      .fetch()
    return { posts }
  },
  data () {
    return {
      page: 1,
      search: '',
    }
  },
  head() {
    return {
      title: 'Blog - Latest posts',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: 'Blog - latest posts',
          name: 'Blog - latest posts',
          content: 'latest blog posts',
        },
      ],
    }
  },
  methods: {
    async getMorePosts() {
      const blogPosts = await this.$content('blog', { deep: true })
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
      return moment(date).format('MMMM Do YYYY, HH:mm:ss');
    },
    execSearch() {
      if (this.search === '') return '/blog/'
      return '/search/?q=' + this.search.toLowerCase()
    },
  },
}
</script>
