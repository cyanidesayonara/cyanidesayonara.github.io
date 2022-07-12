<template>
  <div>
    <aside>
      <a rel="noreferrer" href="https://www.linkedin.com/company/solidabis/" target="_blank">
        <FontAwesomeIcon :icon="['fab', 'linkedin']"/>
      </a>
    </aside>
    <h3>{{ $t('portfolio.work_experience.solidabis.title') }}</h3>
    <p>{{ $t('portfolio.work_experience.solidabis.line1') }}</p>
    <p>{{ $t('portfolio.duration', {
      duration: '03/2019 - 04/2022'
    }) }}</p>
    <p>
      {{ $t('portfolio.keywords') }}
      <em>Java, JavaScript, Python, PostgreSQL, Docker, Node, React, Spring, Azure, AWS, GraphQL, Robot Framework</em>
    </p>
  </div>
</template>
