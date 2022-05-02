<template>
  <section id="blogs">
    <div>
      <aside v-if="isDev()">
        <button class="add-new" @click="addNewPost">
          Add new post
        </button>
      </aside>
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
import moment from "moment"

export default {
  key: (to) => to.fullPath,
  async asyncData({ $content, route }) {
    const posts = await $content('blog', { deep: true })
      .only(['title', 'createdAt', 'description', 'image', 'path', 'date'])
      .where({ dir: { $ne: route.path } })
      .sortBy('date', 'desc')
      .limit(5)
      .fetch()
    return { posts }
  },
  data() {
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
    }
  },
  methods: {
    async getMorePosts() {
      const posts = await this.$content('blog', { deep: true })
        .only(['title', 'createdAt', 'description', 'image', 'path', 'date'])
        .sortBy('date', 'desc')
        .skip(5 * this.page)
        .limit(5)
        .fetch()
      // if (!posts.length) console.log("no more posts")
      posts.forEach((post) => {
        this.posts.push(post)
      })
      this.page++
    },
    addNewPost() {
      console.log("add new post")
    },
    formatDate(date) {
      return moment(date).format('MMMM Do YYYY')
    },
    isDev() {
      return process.env.NODE_ENV === 'development'
    }
  },
}
</script>
