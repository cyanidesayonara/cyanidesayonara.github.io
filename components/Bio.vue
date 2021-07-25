<template>
  <article id="bio">
    <img src='~/assets/photo.png' :alt="$t('portfolio.img_alt')" />
    <p>{{ $t('portfolio.bio.line1') }}</p>
    <p>{{ $t('portfolio.bio.line2') }}</p>
    <p>{{ $t('portfolio.bio.line3') }}</p>
    <!-- eslint-disable-next-line vue/no-v-html -->
    <p v-html="$t('portfolio.bio.line4')"></p>
    <hr />
  </article>
</template>