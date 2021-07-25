<template>
  <article id="portfolio">
    <nuxt-content :document="post" />
  </article>
</template>

<script>
export default {
  async asyncData({ $content, params, error }) {
    const defaultLanguage = 'en'
    const language = params.slug ?? defaultLanguage
    const dir = `/portfolio/${language}`
    const [post] = await $content('portfolio', { deep: true })
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
      title: "Portfolio",
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: "Portfolio",
          name: "Portfolio",
          content: "Portfolio",
        },
      ],
    }
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
