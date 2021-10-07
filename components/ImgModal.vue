<template>
  <div class="modal-overlay" @click="$emit('close-modal')">
    <button class="close" @click="$emit('close-modal')">
      X
    </button>
    <div id="img-modal" class="modal">
    </div>
    <p id="img-modal-text">
    </p>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  background-color: #000000da;
}
.modal {
  text-align: center;
  margin: 20% auto;
  padding: 20px;
  border-radius: 0.2rem;
}
.close {
  color: white;
  padding: 10px 20px;
  position: absolute;
  top: 0;
  right: 0;
  font-size: 26px;
  cursor: pointer;
}
#img-modal-text {
  position: absolute;
  width: 100%;
  color: white;
  text-align: center;
  margin-top: 17%;
  font-size: calc(12px + 1vw)
}
</style>
