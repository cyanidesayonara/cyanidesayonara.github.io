<template>
  <article id="index">
    <LanguageInput />
    <h1>{{ $t('index.greeting') }}</h1>
    <LandingPage />
    <hr />
  </article>
</template>

<script>
export default {
  head() {
    return {
      title: "Portfolio | Blog | Santtu Nykänen",
      htmlAttrs: {
        lang: this.$i18n.locale,
      },
    }
  },
}
</script>
