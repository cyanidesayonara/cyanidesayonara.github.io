<template>
  <article id="author">
    <img :src="author.image" />
    <h4>Author</h4>
    <p>{{ author.name }}</p>
    <h4>Bio</h4>
    <p>{{ author.bio }}</p>
    <hr />
  </article>
</template>

<script>
export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  }
}
</script>