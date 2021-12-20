<template>
  <aside>
    <button v-show="$i18n.locale === 'en'" class="language-button nuxt-link-active pointer-events-none" disabled>EN</button>
    <button v-show="$i18n.locale === 'fi'" class="language-button" @click="setNewLocale('en')">EN</button>
    <span class="pipe"> | </span>
    <button v-show="$i18n.locale === 'en'" class="language-button" @click="setNewLocale('fi')">FI</button>
    <button v-show="$i18n.locale === 'fi'" class="language-button nuxt-link-active pointer-events-none" disabled>FI</button>
  </aside>
</template>

<script>
export default {
  methods: {
    setNewLocale(locale) {
      this.$i18n.setLocale(locale)
      this.$nuxt.refresh()
    }
  }
}
</script>
