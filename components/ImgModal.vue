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
  margin: 20vh auto auto;
  padding: 20px;
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
  max-width: 600px;
  bottom: 80vh;
  color: white;
  font-size: 18px;
  margin: 0 20px;
  max-height: 90px;
  overflow-y: hidden;
}
</style>
