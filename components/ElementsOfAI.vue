<template>
  <div>
    <aside>
      <a rel="noreferrer" href="https://www.elementsofai.com/fi" target="_blank">
        <FontAwesomeIcon :icon="['fas', 'external-link-alt']"/>
      </a>
    </aside>
    <h3>Elements of AI</h3>
    <p>{{ $t('portfolio.education.elements_of_ai.line1') }}</p>
    <p>{{ $t('portfolio.completed', {
      completed: '2019'
    }) }}</p>
    <p>
      {{ $t('portfolio.keywords') }}
      <em>{{ $t('portfolio.education.elements_of_ai.keywords') }}</em>
    </p>
  </div>
</template>
