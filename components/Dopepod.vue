<template>
  <div>
    <aside>
      <a href="https://github.com/cyanidesayonara/dopepod" target="_blank">
        <FontAwesomeIcon :icon="['fab', 'github']"/>
      </a>
    </aside>
    <h3>dopepod</h3>
    <v-img src="dopepod.png" :alt="$t('portfolio.personal_projects.dopepod.img_alt')"/>
    <p>{{ $t('portfolio.personal_projects.dopepod.line1') }}</p>
    <p>{{ $t('portfolio.personal_projects.dopepod.line2') }}</p>
    <p>{{ $t('portfolio.personal_projects.dopepod.line3') }}</p>
    <p>{{ $t('portfolio.completed', {
      completed: '2018'
    }) }}</p>
    <p>
      {{ $t('portfolio.keywords') }}
      <em>Python, Django, JavaScript, jQuery, Bootstrap, PostgreSQL, Scrapy, DigitalOcean, Haystack, Elasticsearch</em>
    </p>
  </div>
</template>
