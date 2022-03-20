<template>
  <div>
    <aside>
      <a href="https://noteowl.herokuapp.com/">
        <font-awesome-icon :icon="['fas', 'external-link-alt']"/>
      </a>
      <span class="pipe"> | </span>
      <a href="https://github.com/cyanidesayonara/noteowl">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
    </aside>
    <h3>NoteOwl</h3>
    <v-img src="noteowl.png" :alt="$t('portfolio.personal_projects.noteowl.img_alt')"/>
    <p>{{ $t('portfolio.personal_projects.noteowl.line1') }}</p>
    <p>{{ $t('portfolio.personal_projects.noteowl.line2') }}</p>
    <p>
      {{ $t('portfolio.keywords') }}
      <em>JavaScript, Node, React, MongoDB, Heroku</em>
    </p>
  </div>
</template>
