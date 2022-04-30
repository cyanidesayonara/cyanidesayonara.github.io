<template>
  <div>
    <aside>
      <a
        rel="noreferrer"
        href="https://www.haaga-helia.fi/fi/tietojenkasittelyn-koulutus-tradenomi-amk"
        target="_blank"
      >
        <font-awesome-icon :icon="['fas', 'external-link-alt']"/>
      </a
      >
    </aside>
    <h3>{{ $t('portfolio.education.tradenomi.title') }}</h3>
    <p>{{ $t('portfolio.education.tradenomi.line1') }}</p>
    <p>{{ $t('portfolio.duration', {
      duration: '01/2018 - ?'
    }) }}</p>
    <p>
      {{ $t('portfolio.keywords') }}
      <em>Java, JavaScript, Python, SQL, HTML, CSS, React, Spring, Heroku</em>
    </p>
  </div>
</template>
