<template>
  <div>
    <aside>
      <a href="https://github.com/cyanidesayonara/borealis" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']"/>
      </a>
    </aside>
    <h3>Borealis</h3>
    <v-img src="borealis.gif" :alt="$t('portfolio.personal_projects.borealis.img_alt')"/>
    <p>{{ $t('portfolio.personal_projects.borealis.line1') }}</p>
    <p>
      {{ $t('portfolio.personal_projects.borealis.line2') }}
      (<a href="https://github.com/pixelmatix/aurora" target="_blank">https://github.com/pixelmatix/aurora</a>)
      {{ $t('portfolio.personal_projects.borealis.line3') }}
    </p>
    <p>{{ $t('portfolio.completed', {
      completed: '2016'
    }) }}</p>
    <p>
      {{ $t('portfolio.keywords') }}
      <em>C++</em>
    </p>
  </div>
</template>
