<template>
  <article id="portfolio">
    <LanguageInput />
    <h1>Portfolio</h1>
    <Introduction />
    <hr />
    <WorkExperience />
    <hr />
    <PersonalProjects />
    <hr />
    <Education />
    <hr />
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: "Portfolio | Santtu Nykänen",
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    }
  },
  methods: {
    closeModal() {
      const overlay = document.getElementById("modal-overlay")
      overlay.style.display = "none"
      const imgModal = document.getElementById("img-modal")
      imgModal.innerHTML = ""
      document.body.className = ""
    }
  },
}
</script>
