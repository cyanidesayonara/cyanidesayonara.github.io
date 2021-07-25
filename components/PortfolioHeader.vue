<template>
  <div>
    <aside>
      <LanguageInput />
      <!-- TODO: Add print pdf functionality -->
      <!-- <span class="pipe"> | </span>
      <a href='#'>{{ $t('portfolio.print_pdf') }}</a> -->
    </aside>
    <h1>{{ $t('portfolio.greeting') }}</h1>
  </div>
</template>

<style scoped>
aside {
  font-size: 18px;
}
#lang-dropdown {
  border: none;
  background: inherit;
  font-weight: bold;
  color: #2cb3ac;
  font-size: 18px;
}
@supports (-moz-appearance:none) {
  select {
    -moz-appearance:none !important;
    background: transparent url('data:image/gif;base64,R0lGODlhBgAGAKEDAFVVVX9/f9TU1CgmNyH5BAEKAAMALAAAAAAGAAYAAAIODA4hCDKWxlhNvmCnGwUAOw==') right center no-repeat !important;
    padding-right: 10px;
  }
}
</style>