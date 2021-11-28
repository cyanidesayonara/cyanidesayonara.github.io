<template>
  <aside>
    <button v-if="$i18n.locale === 'en'" class="language-button nuxt-link-active pointer-events-none" disabled>EN</button>
    <button v-if="$i18n.locale === 'fi'" class="language-button" @click.prevent.stop="$i18n.setLocale('en')">EN</button>
    <span class="pipe"> | </span>
    <button v-if="$i18n.locale === 'en'" class="language-button" @click.prevent.stop="$i18n.setLocale('fi')">FI</button>
    <button v-if="$i18n.locale === 'fi'" class="language-button nuxt-link-active pointer-events-none" disabled>FI</button>
  </aside>
</template>
