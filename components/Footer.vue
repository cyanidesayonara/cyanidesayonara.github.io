<template>
  <footer>
    <p class="text-sm">{{ $t('footer.updated', {
      "date": "2021-11-28"}
    ) }}</p>
    <div>
      <a href="https://www.linkedin.com/in/santtu-nykanen/">
        <font-awesome-icon :icon="['fab', 'linkedin']"/>
      </a>
      <span class="pipe"> | </span>
      <a href="https://github.com/cyanidesayonara">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
    </div>
  </footer>
</template>
