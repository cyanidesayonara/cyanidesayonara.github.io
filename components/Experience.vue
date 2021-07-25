<template>
  <article id="experience">
    <h2>{{ $t('portfolio.experience.title') }}</h2>
    <ul>
      <li>
        <aside :aria-label="$t('portfolio.common.links')">
          <a rel="noreferrer" href="https://www.linkedin.com/company/solidabis/">
            <font-awesome-icon :icon="['fab', 'linkedin']"/>
          </a>
        </aside>
        <h3>{{ $t('portfolio.experience.solidabis.title') }}</h3>
        <p>
          {{ $t('portfolio.experience.solidabis.description') }}
        </p>
        <p>
          {{ $t('portfolio.common.keywords') }}
          <em>Java, JavaScript, Python, SQL, Node, React, Spring, Azure, GraphQL</em>
        </p>
      </li>
    </ul>
    <hr />
  </article>
</template>