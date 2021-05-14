<template>
  <div class="header">
    <div class="header__input">
      <img src="@/assets/logotipo-circular.svg" alt="" />
      <input type="text" placeholder="Pesquisar no Facebook" />
    </div>
    <div class="header__icons">
      <img class="header__icons__img" src="@/assets/home.svg" alt="" />
      <img class="header__icons__img"  src="@/assets/video.svg" alt="" />
      <img class="header__icons__img"  src="@/assets/storefront.svg" alt="" />
      <img class="header__icons__img"  src="@/assets/group.svg" alt="" />
      <img class="header__icons__img"  src="@/assets/window.svg" alt="" />
    </div>
    <div class="header__icons">
        <div class="header__icons__text">

      <img class="header__icons__text__diego" src="@/assets/diego.jpg" alt="" />
      <strong>Diego</strong>
        </div>

      <button class="header__icons__button">
        <img src="@/assets/add.svg" alt="" />
      </button>
      <button class="header__icons__button">
        <img src="@/assets/chat.svg" alt="" />
      </button>
      <button class="header__icons__button">
        <img src="@/assets/notifications.svg" alt="" />
      </button>
      <button class="header__icons__button">
        <img src="@/assets/keyboard.svg" alt="" />
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header {
  // position: absolute;
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #FFFFFF;
  &__input {
    display: flex;
    align-items: center;
    margin-left: 18px;
    input {
      width: 220px;
      height: 40px;
      font-family: inherit;
      font-size: 15px;
      border-bottom-left-radius: 50px;
      border-bottom-right-radius: 50px;
      border-top-left-radius: 50px;
      border-top-right-radius: 50px;
      border: 0;
      margin-left: 10px;
      padding-left: 20px;
      background: #D8DADF;
      color: #65676b;
    }
  }
  &__icons {
    display: flex;
    justify-content: center;
    align-items: center;
    &__text {
        display: flex;
        align-items: center;
        margin-right:20px ;
    &__diego {
         width: 30px;
        height: 30px;
        border-radius: 50%;

    }
    }
    &__img {
        width: 30px;
        height: 30px;
        margin: 0 35px;
    }
    &__button {
        width: 40px;
        height: 40px;
        padding: 8px;
        margin-right: 10px;
        border: none;
        border-radius: 50%;
        background: #D8DADF;
    }
  }
}
</style>
