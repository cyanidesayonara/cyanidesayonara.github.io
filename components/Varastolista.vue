<template>
  <div>
    <aside>
      <a href="https://varastolista.herokuapp.com/" target="_blank">
        <FontAwesomeIcon :icon="['fas', 'external-link-alt']"/>
      </a>
      <span class="pipe"> | </span>
      <a href="https://github.com/cyanidesayonara/varastolista" target="_blank">
        <FontAwesomeIcon :icon="['fab', 'github']"/>
      </a>
    </aside>
    <h3>Varastolista</h3>
    <v-img src="varastolista.png" :alt="$t('portfolio.personal_projects.varastolista.img_alt')"/>
    <p>{{ $t('portfolio.personal_projects.varastolista.line1') }}</p>
    <p>{{ $t('portfolio.personal_projects.varastolista.line2') }}</p>
    <p>{{ $t('portfolio.personal_projects.varastolista.line3') }}</p>
    <p>{{ $t('portfolio.completed', {
      completed: '2018'
    }) }}</p>
    <p>
      {{ $t('portfolio.keywords') }}
      <em>Python, Django, JavaScript, jQuery, PostgreSQL, Instascan, Heroku</em>
    </p>
  </div>
</template>
