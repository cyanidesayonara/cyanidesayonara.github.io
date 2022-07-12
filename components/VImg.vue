<template>
  <img :alt="alt" :src="src" @click="openModal" />
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
    openModal() {
      const element = this.$el.cloneNode(true)
      element.className = "w-full"
      const imgModal = document.getElementById("img-modal")
      imgModal.innerHTML = ""
      imgModal.appendChild(element)
      const imgModalText = document.getElementById("img-modal-text")
      imgModalText.innerHTML = element.alt
      document.body.className = "overflow-hidden"
      const overlay = document.getElementById("modal-overlay")
      overlay.style.display = ""
    }
  },
}
</script>
