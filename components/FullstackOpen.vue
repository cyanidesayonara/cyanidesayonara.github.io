<template>
  <div>
    <aside>
      <a rel="noreferrer" href="https://fullstackopen.com/">
        <font-awesome-icon :icon="['fas', 'external-link-alt']"/>
      </a>
      <span class="pipe"> | </span>
      <a href="https://github.com/cyanidesayonara/fullstack-mooc-2021">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
    </aside>
    <h3>Fullstack Open 2021</h3>
    <p>{{ $t('portfolio.education.fullstack_open.line1') }}</p>
    <p>
      {{ $t('portfolio.keywords') }}
      <em>React, Redux, Node, MongoDB, GraphQL, TypeScript, Express, Jest, Cypress, React Native</em>
    </p>
  </div>
</template>
