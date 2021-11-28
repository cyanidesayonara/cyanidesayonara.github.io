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
    <ImgModal v-show="showModal" @close-modal="closeModal" />
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
  data() {
    return {
      showModal: false,
    }
  },
  head() {
    return {
      title: "Blog - " + this.post.title,
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: "Blog - " + this.post.title,
          name: "Blog - " + this.post.title,
          content: this.post.title,
        },
      ],
    }
  },
  mounted() {
    Prism.highlightAll()
    document.querySelectorAll(".nuxt-content img").forEach((el) => {
      el.addEventListener("click", (e) => {
        const element = e.target.cloneNode(true)
        element.className = "w-full"
        const imgModal = document.getElementById("img-modal")
        imgModal.innerHTML = ""
        imgModal.appendChild(element)
        const imgModalText = document.getElementById("img-modal-text")
        imgModalText.innerHTML = element.alt
        document.body.className = "overflow-hidden"
        this.showModal = true
      })
    })
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" }
      return new Date(date).toLocaleDateString("en", options)
    },
    closeModal() {
      const imgModal = document.getElementById("img-modal")
      imgModal.innerHTML = ""
      document.body.className = ""
      this.showModal = false
    }
  },
}
</script>
