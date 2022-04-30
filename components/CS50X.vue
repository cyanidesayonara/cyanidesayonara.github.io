<template>
  <div>
    <aside>
      <a
        rel="noreferrer"
        href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x"
        target="_blank"
      >
        <font-awesome-icon :icon="['fas', 'external-link-alt']"/>
      </a>
      <span class="pipe"> | </span>
      <a href="https://github.com/cyanidesayonara/cs50-mooc" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
    </aside>
    <h3>CS50X</h3>
    <p>{{ $t('portfolio.education.cs50x.line1') }}</p>
    <p>{{ $t('portfolio.completed', {
      completed: '2017'
    }) }}</p>
    <p>
      {{ $t('portfolio.keywords') }}
      <em>C, Python, JavaScript, SQL, HTML, CSS</em>
    </p>
  </div>
</template>
