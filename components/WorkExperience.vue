<template>
  <div>
    <h2 :id="$t('index.links.work_experience.id')">{{ $t('portfolio.work_experience.title') }}</h2>
    <aside>
      <a rel="noreferrer" href="https://www.linkedin.com/company/solidabis/">
        <font-awesome-icon :icon="['fab', 'linkedin']"/>
      </a>
    </aside>
    <h3>{{ $t('portfolio.work_experience.solidabis.title') }}</h3>
    <p>{{ $t('portfolio.work_experience.solidabis.line1') }}</p>
    <p>
      {{ $t('portfolio.keywords') }}
      <em>Java, JavaScript, Python, PostgreSQL, Docker, Node, React, Spring, Azure, AWS, GraphQL, Robot Framework</em>
    </p>
  </div>
</template>
