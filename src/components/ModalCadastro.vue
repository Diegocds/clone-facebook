<template>
  <div v-if="modal">
    <div class="overlay" @click="hideModal()"></div>
    <div class="modal">
      <div class="content-modal">
        <div class="content-iframe">
          <div class="logo">
            <img :src="img" />
          </div>
          <div class="close-btn" @click="hideModal()"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    playButton: Function,
    hideModal: Function,
    modal: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.close-btn {
  background: url("../assets/ic_close_24px.png");
  background-repeat: no-repeat;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 15px;
  right: 0;
  cursor: pointer;
  z-index: 11;
}
.content-modal {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.modal {
  z-index: 10;
  background: #c1c1c1;
}
.overlay {
  z-index: 10;
  top: 0;
  left: 0;
  overflow: auto;
  position: fixed;
  background: rgba(255, 254, 254, 0.7);
  height: 100%;
  width: 103%;
  margin-left: -53px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content-iframe {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 432px;
  height: 600px;
  position: fixed;
  z-index: 11;
  top: 20%;
  min-width: 300px;
  max-width: 1000px;
  min-height: 300px;
  padding: 0 20px 0 20px;
  background: #f5fafd;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);

  border-radius: 10px;
}

@media (max-width: 320px) {
  .content-iframe {
    padding: 0 50px 0 50px;
  }
}
</style>
