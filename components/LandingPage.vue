<template>
  <div>
    <img src="photo.png" class="float-right ml-3 mb-0 w-1/2 cursor-default" :alt="$t('index.img_alt')" />
    <p>{{ $t('index.line1') }}</p>
    <p>
      {{ $t('index.line2') }}
      <nuxt-link to="/portfolio">{{ $t('index.links.portfolio.text') }}</nuxt-link>
      {{ $t('index.line3') }}
      <nuxt-link :to="`/portfolio#` + $t('index.links.work_experience.id')">{{ $t('index.links.work_experience.text') }}</nuxt-link>,
      <nuxt-link :to="`/portfolio#` + $t('index.links.personal_projects.id')">{{ $t('index.links.personal_projects.text') }}</nuxt-link>,
      <nuxt-link :to="`/portfolio#` + $t('index.links.education.id')">{{ $t('index.links.education.text') }}</nuxt-link>,
      {{ $t('index.line4') }}
      <a href='https://www.linkedin.com/in/santtu-nykanen/' target="_blank">LinkedIn</a>
      {{ $t('index.line5') }}
      <a href='https://github.com/cyanidesayonara' target="_blank">GitHub</a>.
    </p>
    <p>
      {{ $t('index.line6') }}
      <nuxt-link to="/blog/">{{ $t('index.line7') }}</nuxt-link>,
      {{ $t('index.line8') }}
      <nuxt-link to="/blog/1">{{ $t('index.line9') }}</nuxt-link>
      {{ $t('index.line10') }}
    </p>
    <p>{{ $t('index.salutation') }}</p>
  </div>
</template>
