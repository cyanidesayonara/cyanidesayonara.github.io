<template>
  <section id="portfolio">
    <PortfolioHeader />
    <Bio />
    <Experience />
    <Projects />
    <Education />
  </section>
</template>

<script>
  export default {
    head() {
      return {
        title: this.$t('portfolio.title'),
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          {
            hid: 'portfolio',
            name: 'portfolio',
            content: 'portfolio',
          },
        ],
      }
    }
  }
</script>
