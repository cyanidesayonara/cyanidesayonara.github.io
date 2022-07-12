<template>
  <div>
    <aside>
      <a href="https://github.com/cyanidesayonara/monitorimittari" target="_blank">
        <FontAwesomeIcon :icon="['fab', 'github']"/>
      </a>
    </aside>
    <h3>Monitorimittari</h3>
    <v-img src="monitorimittari.png" :alt="$t('portfolio.personal_projects.monitorimittari.img_alt')"/>
    <p>{{ $t('portfolio.personal_projects.monitorimittari.line1') }}</p>
    <p>{{ $t('portfolio.personal_projects.monitorimittari.line2') }}</p>
    <p>{{ $t('portfolio.personal_projects.monitorimittari.line3') }}</p>
    <p>{{ $t('portfolio.completed', {
      completed: '2019'
    }) }}</p>
    <p>
      {{ $t('portfolio.keywords') }}
      <em>Python, PyQt5, PyInstaller</em>
    </p>
  </div>
</template>
