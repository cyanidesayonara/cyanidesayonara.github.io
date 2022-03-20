<template>
  <div>
    <aside>
      <a href="https://dop3pod.herokuapp.com/">
        <font-awesome-icon :icon="['fas', 'external-link-alt']"/>
      </a>
      <span class="pipe"> | </span>
      <a href="https://github.com/cyanidesayonara/dop3pod">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
    </aside>
    <h3>dop3pod</h3>
    <v-img src="dop3pod.png" :alt="$t('portfolio.personal_projects.dop3pod.img_alt')"/>
    <p>{{ $t('portfolio.personal_projects.dop3pod.line1') }}</p>
    <p>{{ $t('portfolio.personal_projects.dop3pod.line2') }}</p>
    <p>
      {{ $t('portfolio.keywords') }}
      <em>Python, Django Rest Framework, Celery, Redis, Go, Flutter, Docker, PostgreSQL, Scrapy, DigitalOcean</em>
    </p>
  </div>
</template>
