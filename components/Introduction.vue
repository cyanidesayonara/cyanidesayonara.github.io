<template>
  <div>
    <h2>{{ $t('portfolio.introduction.title') }}</h2>
    <p>{{ $t('portfolio.introduction.line1') }}</p>
    <p>{{ $t('portfolio.introduction.line2') }}</p>
    <p>{{ $t('portfolio.introduction.line3') }}</p><img src="basketball.png" class="float-left mr-3 mb-0 w-1/2"
                                                        :alt="$t('portfolio.introduction.basketball_game.img_alt')"/>
    <p>
      {{ $t('portfolio.introduction.line4') }}
      <a href="https://scratch.mit.edu/projects/164378114/">{{ $t('portfolio.introduction.basketball_game.text') }}</a>
      {{ $t('portfolio.introduction.line5') }}
    </p>
    <p>{{ $t('portfolio.introduction.line6') }}</p>
    <p>{{ $t('portfolio.introduction.line7') }}</p>
    <p>{{ $t('portfolio.introduction.line8') }}</p>
  </div>
</template>
