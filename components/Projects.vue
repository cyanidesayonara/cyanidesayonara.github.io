<template>
  <article id="projects">
    <h2>{{ $t('portfolio.projects.title') }}</h2>
    <ul>
      <li>
        <aside :aria-label="$t('portfolio.common.links')">
          <a href="https://varastolista.herokuapp.com/">
            <font-awesome-icon :icon="['fas', 'external-link-alt']"/>
          </a>
          <span class="pipe"> | </span>
          <a href="https://github.com/cyanidesayonara/varastolista">
            <font-awesome-icon :icon="['fab', 'github']"/>
          </a>
        </aside>
        <h3>{{ $t('portfolio.projects.varastolista.title') }}</h3>
        <p>
          {{ $t('portfolio.projects.varastolista.description') }}
        </p>
        <p>
          {{ $t('portfolio.common.keywords') }}
          <em
            >Python, Django, JavaScript, jQuery, PostgreSQL, Instascan, Heroku
          </em>
        </p>
      </li>
      <li>
        <aside :aria-label="$t('portfolio.common.links')">
          <a href="https://github.com/cyanidesayonara/monitorimittari">
            <font-awesome-icon :icon="['fab', 'github']"/>
          </a>
        </aside>
        <h3>{{ $t('portfolio.projects.monitorimittari.title') }}</h3>
        <p>
          {{ $t('portfolio.projects.monitorimittari.description') }}
        </p>
        <p>
          {{ $t('portfolio.common.keywords') }}
          <em>Python, PyQt5, PyInstaller</em>
        </p>
      </li>
      <li>
        <aside :aria-label="$t('portfolio.common.links')">
          <a href="https://github.com/cyanidesayonara/dopepod">
            <font-awesome-icon :icon="['fab', 'github']"/>
          </a>
        </aside>
        <h3>{{ $t('portfolio.projects.dopepod.title') }}</h3>
        <p>
          {{ $t('portfolio.projects.dopepod.description') }}
        </p>
        <p>
          {{ $t('portfolio.common.keywords') }}
          <em>
            Python, Django, JavaScript, jQuery, Bootstrap, PostgreSQL, Scrapy,
            DigitalOcean, Haystack, Elasticsearch
          </em>
        </p>
      </li>
      <li>
        <aside :aria-label="$t('portfolio.common.links')">
          <a href="https://dop3pod.herokuapp.com/">
            <font-awesome-icon :icon="['fas', 'external-link-alt']"/>
          </a>
          <span class="pipe"> | </span>
          <a href="https://github.com/cyanidesayonara/dop3pod">
            <font-awesome-icon :icon="['fab', 'github']"/>
          </a>
        </aside>
        <h3>{{ $t('portfolio.projects.dop3pod.title') }}</h3>
        <p>
          {{ $t('portfolio.projects.dop3pod.description') }}
        </p>
        <p>
          {{ $t('portfolio.common.keywords') }}
          <em>
            Python, Django Rest Framework, Celery, Redis, Go, Flutter, Docker,
            PostgreSQL, Scrapy, DigitalOcean
          </em>
        </p>
      </li>
      <li>
        <aside :aria-label="$t('portfolio.common.links')">
          <a href="https://noteowl.herokuapp.com/">
            <font-awesome-icon :icon="['fas', 'external-link-alt']"/>
          </a>
          <span class="pipe"> | </span>
          <a href="https://github.com/cyanidesayonara/noteowl">
            <font-awesome-icon :icon="['fab', 'github']"/>
          </a>
        </aside>
        <h3>{{ $t('portfolio.projects.noteowl.title') }}</h3>
        <p>
          {{ $t('portfolio.projects.noteowl.description') }}
        </p>
        <p>
          {{ $t('portfolio.common.keywords') }}
          <em>JavaScript, Node, React, MongoDB, Heroku</em>
        </p>
      </li>
    </ul>
    <hr />
  </article>
</template>