<template>
  <article id="index">
    <nuxt-content :document="post" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const defaultLanguage = 'en'
    const language = params.slug ?? defaultLanguage
    const dir = `/index/${language}`
    const [post] = await $content('index', { deep: true })
      .where({ dir })
      .fetch()
    if (!post) {
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
    return { post }
  },
  head() {
    return {
      title: "Portfolio | Blog",
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: "Portfolio | Blog",
          name: "Portfolio | Blog",
          content: "Portfolio | Blog",
        },
      ],
    }
  },
}
</script>
