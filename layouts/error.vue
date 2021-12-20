<template>
  <section id="error">
    <h1 v-if="error.statusCode === 404">{{ $t('page_not_found') }}</h1>
    <h1 v-else>{{ $t('an_error_occurred') }}</h1>
  </section>
</template>

<script>
  export default {
    layout: 'error',
    // eslint-disable-next-line vue/require-prop-types
    props: ['error'],
    head() {
      return {
        title: "Error",
        htmlAttrs: {
          lang: this.$i18n.locale,
        },
        meta: [
          {
            hid: "Error",
            name: "Error",
            content: "Error",
          },
        ],
      }
    },
  }
</script>
