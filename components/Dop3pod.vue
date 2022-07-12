<template>
  <div>
    <aside>
      <a href="https://play.google.com/store/apps/details?id=com.cyanidesayonara.dopepod" target="_blank">
        <FontAwesomeIcon :icon="['fab', 'google-play']"/>
      </a>
      <span class="pipe"> | </span>
      <a href="https://github.com/cyanidesayonara/dop3pod" target="_blank">
        <FontAwesomeIcon :icon="['fab', 'github']"/>
      </a>
    </aside>
    <h3>dop3pod</h3>
    <v-img src="dop3pod.png" :alt="$t('portfolio.personal_projects.dop3pod.img_alt')"/>
    <p>{{ $t('portfolio.personal_projects.dop3pod.line1') }}</p>
    <p>{{ $t('portfolio.personal_projects.dop3pod.line2') }}</p>
    <p>{{ $t('portfolio.completed', {
      completed: '2022'
    }) }}</p>
    <p>
      {{ $t('portfolio.keywords') }}
      <em>Python, Django Rest Framework, Celery, Redis, Scrapy, Flutter, Docker, PostgreSQL, Scrapy, DigitalOcean</em>
    </p>
  </div>
</template>
