<template>
  <img :src="imgSrc()" :alt="alt" />
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },
  methods: {
    imgSrc() {
      try {
        const { post } = this.$parent.$parent;
        return require(`~/content${post.dir}/images/${this.src}`);
      } catch (error) {
        return null
      }
    }
  }
}
</script>
