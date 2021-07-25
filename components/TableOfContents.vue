<template>
  <div class="tableofcontents">
    <h3>Table of Contents</h3>
    <div id="toc">
      <ul>
        <li
          v-for="link of toc"
          :key="link.id"
          :class="{ toc2: link.depth === 2, toc3: link.depth === 3 }"
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