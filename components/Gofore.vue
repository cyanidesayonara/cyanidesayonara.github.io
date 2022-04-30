<template>
  <div>
    <aside>
      <a rel='noreferrer' href='https://www.linkedin.com/company/gofore/' target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>
    </aside>
    <h3>{{ $t('portfolio.work_experience.gofore.title') }}</h3>
    <p>{{ $t('portfolio.work_experience.gofore.line1') }}</p>
    <p>{{ $t('portfolio.duration', {
      duration: '05/2022 - ?'
    }) }}</p>
    <p>
      {{ $t('portfolio.keywords') }}
      <em>Java, JavaScript, PostgreSQL, Docker, Node, React, Spring, AWS</em>
    </p>
  </div>
</template>
