<template>
  <footer>
    <aside aria-label="Linkit">
      <a href="https://www.linkedin.com/in/santtu-nykanen/">
        <font-awesome-icon :icon="['fab', 'linkedin']"/>
      </a>
      <span class="pipe"> | </span>
      <a href="https://github.com/cyanidesayonara">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
    </aside>
    <small>{{ $t('footer.updated') }} 2021-07-25</small>
  </footer>
</template>
