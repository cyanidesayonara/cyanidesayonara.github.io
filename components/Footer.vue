<template>
  <footer>
    <p class="text-sm">{{ $t('footer.updated', {
      "date": "2022-05-03"}
    ) }}</p>
    <p v-if="commitSha.length" class="text-sm">
      Commit:
      <a :href="`https://github.com/cyanidesayonara/cyanidesayonara.github.io/commit/${commitSha}`" target="_blank">
        {{ commitSha }}
      </a>
    </p>
    <div class="whitespace-nowrap">
      <a href="https://www.linkedin.com/in/santtu-nykanen/" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']"/>
      </a>
      <span class="pipe"> | </span>
      <a href="https://github.com/cyanidesayonara" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      commitSha: process.env.NUXT_ENV_CURRENT_GIT_SHA ? process.env.NUXT_ENV_CURRENT_GIT_SHA.substring(0,7) : ''
    };
  }
}
</script>
