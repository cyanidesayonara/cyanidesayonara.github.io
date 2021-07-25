<template>
  <article id="education">
    <h2>{{ $t('portfolio.education.title') }}</h2>
    <ul>
      <li>
        <aside :aria-label="$t('portfolio.common.links')">
          <a
            rel="noreferrer"
            href="https://www.haaga-helia.fi/fi/tietojenkasittelyn-koulutus-tradenomi-amk"
          >
            <font-awesome-icon :icon="['fas', 'external-link-alt']"/>
          </a
          >
        </aside>
        <h3>{{ $t('portfolio.education.tradenomi.title') }}</h3>
        <p>
          {{ $t('portfolio.education.tradenomi.description') }}
        </p>
        <p>
          {{ $t('portfolio.common.keywords') }}
          <em>Java, JavaScript, Python, SQL, HTML, CSS, React, Spring</em>
        </p>
      </li>
      <li>
        <aside :aria-label="$t('portfolio.common.links')">
          <a rel="noreferrer" href="https://fullstackopen.com/">
            <font-awesome-icon :icon="['fas', 'external-link-alt']"/>
          </a>
          <span class="pipe"> | </span>
          <a href="https://github.com/cyanidesayonara/fullstack-mooc-2021">
            <font-awesome-icon :icon="['fab', 'github']"/>
          </a>
        </aside>
        <h3>{{ $t('portfolio.education.fullstack.title') }}</h3>
        <p>
          {{ $t('portfolio.education.fullstack.description') }}
        </p>
        <p>
          {{ $t('portfolio.common.keywords') }}
          <em>React, Redux, Node, MongoDB, GraphQL, TypeScript</em>
        </p>
      </li>
      <li>
        <aside :aria-label="$t('portfolio.common.links')">
          <a rel="noreferrer" href="https://www.elementsofai.com/fi">
            <font-awesome-icon :icon="['fas', 'external-link-alt']"/>
          </a>
        </aside>
        <h3>{{ $t('portfolio.education.elements.title') }}</h3>
        <p>
          {{ $t('portfolio.education.elements.description') }}
        </p>
        <p>
          {{ $t('portfolio.common.keywords') }}
          <em>tekoäly, koneoppiminen</em>
        </p>
      </li>
      <li>
        <aside :aria-label="$t('portfolio.common.links')">
          <a rel="noreferrer" href="https://2017-ohjelmointi.github.io/">
            <font-awesome-icon :icon="['fas', 'external-link-alt']"/>
          </a>
          <span class="pipe"> | </span>
          <a href="https://github.com/cyanidesayonara/java-mooc">
            <font-awesome-icon :icon="['fab', 'github']"/>
          </a>
        </aside>
        <h3>{{ $t('portfolio.education.java.title') }}</h3>
        <p>
          {{ $t('portfolio.education.java.description') }}
        </p>
        <p>
          {{ $t('portfolio.common.keywords') }}
          <em>Java</em>
        </p>
      </li>
      <li>
        <aside :aria-label="$t('portfolio.common.links')">
          <a rel="noreferrer" href="https://www.edx.org/course/introduction-computer-science-harvardx-cs50x">
            <font-awesome-icon :icon="['fas', 'external-link-alt']"/>
          </a>
          <span class="pipe"> | </span>
          <a href="https://github.com/cyanidesayonara/cs50-mooc">
            <font-awesome-icon :icon="['fab', 'github']"/>
          </a>
        </aside>
        <h3>{{ $t('portfolio.education.cs50x.title') }}</h3>
        <p>
          {{ $t('portfolio.education.cs50x.description') }}
        </p>
        <p>
          {{ $t('portfolio.common.keywords') }} 
          <em>C, Python, JavaScript, SQL, HTML, CSS</em>
        </p>
      </li>
    </ul>
    <hr />
  </article>
</template>