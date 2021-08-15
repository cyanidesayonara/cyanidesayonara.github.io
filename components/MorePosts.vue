<template>
  <article>
    <h2>More posts</h2>
    <div>
      <ul>
        <li v-for="post in more" :key="post.title">
          <div>
            <nuxt-link :to="'/blog/' + post.path.split('/')('/')[1]">
              {{ post.title }}
            </nuxt-link>
          </div>
          <div>
            <h4>
              {{ post.title }}
            </h4>
          </div>
        </li>
      </ul>
    </div>
  </article>
</template>

<script>
export default {
  props: {
    more: {
      type: Array,
      required: true
    }
  }
}
</script>
