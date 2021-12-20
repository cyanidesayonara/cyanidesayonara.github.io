<template>
  <div class="tableofcontents">
    <h3>{{ $t('table_of_contents') }}</h3>
    <div id="toc">
      <ul>
        <li
          v-for="link of toc"
          :key="link.id"
          :class="{ 'ml-5': link.depth === 3 }"
        >
          <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
        </li>
      </ul>
    </div>
    <hr />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/require-prop-types
  props: ['toc'],
}
</script>
