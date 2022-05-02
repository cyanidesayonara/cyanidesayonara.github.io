<template>
  <article>
    <h1>{{ post.title }}</h1>
    <p>Published: {{ formatDate(post.date) }}</p>
    <p>Last updated: {{ formatDate(post.updatedAt) }}</p>
    <hr />
    <table-of-contents :toc="post.toc" />
    <nuxt-content :document="post" />
    <hr />
    <author :author="post.author"></author>
  </article>
</template>

<script>
import Prism from '~/plugins/prism'

export default {
  async asyncData({ $content, params, error }) {
    try {
      const [post] = await $content({ deep: true })
        .where({ dir: `/blog/${params.slug}` })
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
      title: "Blog - " + this.post.title,
      htmlAttrs: {
        lang: 'en',
      },
    }
  },
  mounted() {
    Prism.highlightAll()
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(date).toLocaleDateString("en", options)
    },
  },
}
</script>
