<template>
  <section id="author">
    <img class="float-right ml-3" :src="author.image" alt="A picture of me" />
    <strong>Author</strong>
    <p>{{ author.name }}</p>
    <strong>Bio</strong>
    <p>{{ author.bio }}</p>
    <hr />
  </section>
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
