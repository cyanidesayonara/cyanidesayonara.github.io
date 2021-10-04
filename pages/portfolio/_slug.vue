<template>
  <article id="portfolio">
    <author :author="post.author"></author>
    <h1>{{ post.title }}</h1>
    <p>Published: {{ formatDate(post.date) }}</p>
    <p>Last updated: {{ formatDate(post.updatedAt) }}</p>
    <hr />
    <table-of-contents :toc="post.toc" />
    <nuxt-content :document="post" />
    <img-modal v-show="showModal" @close-modal="showModal = false" />
  </article>
</template>

<script>
import { slugify } from 'transliteration'

function fixIds(elements = []) {
  const slugifyOptions = {replace: {ä: 'a', ö: 'o',}}
  elements.forEach((el) => {
    if (el.props && el.props.id) {
      el.props.id = slugify(el.props.id, slugifyOptions)
    }
    if (el.id) {
      el.id = slugify(el.id, slugifyOptions)
    }
    if (el.children) {
      fixIds(el.children)
    }
  })
}

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
    fixIds(post.body.children)
    fixIds(post.toc)
    return { post }
  },
  data() {
    return {
      showModal: false,
    }
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
  mounted() {
    const elements = document.querySelectorAll(".nuxt-content img")
    elements.forEach((el) => {
      el.addEventListener('click', (e) => {
        this.showModal = true
        const element = e.target.cloneNode(true)
        element.className = ''
        element.style.float = null
        element.style.margin = "unset"
        element.style.width = "100%"
        const imgModal = document.getElementById("img-modal")
        imgModal.innerHTML = ''
        imgModal.appendChild(element)
      })
    })
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>
