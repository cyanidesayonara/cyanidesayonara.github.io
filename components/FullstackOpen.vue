<template>
  <div>
    <aside>
      <a rel="noreferrer" href="https://fullstackopen.com/" target="_blank">
        <font-awesome-icon :icon="['fas', 'external-link-alt']"/>
      </a>
      <span class="pipe"> | </span>
      <a href="https://github.com/cyanidesayonara/fullstack-mooc-2019" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
    </aside>
    <h3>Fullstack Open</h3>
    <p>{{ $t('portfolio.education.fullstack_open.line1') }}</p>
    <p>{{ $t('portfolio.completed', {
      completed: '2019'
    }) }}</p>
    <p>
      {{ $t('portfolio.keywords') }}
      <em>React, Redux, Node, MongoDB, GraphQL, TypeScript, Express, Jest, Cypress, React Native</em>
    </p>
  </div>
</template>
