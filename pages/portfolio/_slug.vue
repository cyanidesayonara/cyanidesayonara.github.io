<template>
    <article id="portfolio" class="post-content">
      <LanguageInput />
      <h1>Portfolio</h1>
      <table-of-contents :toc="post.toc" />
      <nuxt-content :document="post" />
      <hr />
      <ImgModal v-show="showModal" @close-modal="closeModal" />
    </article>
</template>

<script>
export default {
  async asyncData({ $content, i18n, error }) {
    try {
      const [post] = await $content({ deep: true })
        .where({ dir: '/portfolio', language: i18n.locale })
        .fetch()
      return { post }
    } catch (err) {
      error({
        statusCode: 404,
        message: 'Page could not be found',
      })
    }
  },
  data() {
    return {
      showModal: false
    }
  },
  head() {
    return {
      title: "Portfolio",
      htmlAttrs: {
        lang: this.$i18n.locale,
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
    document.querySelectorAll("#portfolio img").forEach((el) => {
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
    closeModal() {
      const imgModal = document.getElementById("img-modal")
      imgModal.innerHTML = ""
      document.body.className = ""
      this.showModal = false
    }
  },
}
</script>
