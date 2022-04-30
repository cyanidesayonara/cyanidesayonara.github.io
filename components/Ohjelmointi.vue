<template>
  <div>
    <aside>
      <a rel="noreferrer" href="https://2017-ohjelmointi.github.io/" target="_blank">
        <font-awesome-icon :icon="['fas', 'external-link-alt']"/>
      </a>
      <span class="pipe"> | </span>
      <a href="https://github.com/cyanidesayonara/java-mooc" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
    </aside>
    <h3>Ohjelmoinnin perusteet ja jatkokurssi</h3>
    <p>{{ $t('portfolio.education.ohjelmointi.line1') }}</p>
    <p>{{ $t('portfolio.completed', {
      completed: '2017'
    }) }}</p>
    <p>
      {{ $t('portfolio.keywords') }}
      <em>Java</em>
    </p>
  </div>
</template>
