<template>
  <select id="lang-dropdown" v-model="$i18n.locale" @change="changeLanguage">
    <option
      v-for="lang in $i18n.locales"
      :key="lang.code"
      :value="lang.code"
    >{{ lang.name }}
    </option
    >
  </select>
</template>

<script>
import VueCookie from 'vue-cookie'

export default {
  methods: {
    changeLanguage(event) {
      if (process.browser) {
        if (VueCookie.get('i18n_redirected') !== event.target.value) {
          VueCookie.set('i18n_redirected', event.target.value)
        }
      }
    },
  },
}

</script>
