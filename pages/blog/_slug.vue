<template>
  <section>
    <article>
      <h1>{{ post.title }}</h1>
      <p>Published: {{ formatDate(post.createdAt) }}</p>
      <img
        v-if="post.image"
        id="header-image"
        :src="
          require('~/content/' +
            post.path.split('/')[1] +
            '/images/' +
            post.image)
        "
        :alt="post.title"
      />
      <hr />
      <table-of-contents :toc="post.toc" />
      <nuxt-content :document="post" />
      <hr />
    </article>
    <!-- <prev-next :prev="prev" :next="next" /> -->
    <author :author="post.author"></author>
    <!-- <more-posts :more="morePosts" /> -->
  </section>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  async asyncData({ $content, params, error }) {
    try {
      const [post] = await $content({ deep: true })
        .where({ dir: `/${params.slug}` })
        .fetch()
      const morePosts = await $content({ deep: true })
        .only(['title', 'path'])
        .where({ dir: { $ne: post.dir } })
        .sortBy('createdAt', 'desc')
        .limit(3)
        .fetch()
      const [prev, next] = await $content({ deep: true })
        .only(['title', 'slug', 'path'])
        .sortBy('createdAt', 'asc')
        .surround(post.path)
        .fetch()
      return { post, morePosts, prev, next }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
  },
  head() {
    return {
      title: this.post.title,
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: this.post.title,
          name: this.post.title,
          content: this.post.title,
        },
      ],
    }
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style scoped>
.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}
#header-image {
  width: 100%;
}
</style>
