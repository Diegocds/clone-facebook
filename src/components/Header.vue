<template>
    <div class="header">
        <div class="header__input">
            <img src="@/assets/logotipo-circular.svg" alt="">
            <input type="text" placeholder="Pesquisar no Facebook">
        </div>
        <div class="header__icons">
            <img src="@/assets/logotipo-circular.svg" alt="">
            <img src="@/assets/logotipo-circular.svg" alt="">
            <img src="@/assets/logotipo-circular.svg" alt="">
            <img src="@/assets/logotipo-circular.svg" alt="">
            <img src="@/assets/logotipo-circular.svg" alt="">
            
        </div>
        <div class="header__buttons">
            
            <img src="@/assets/logotipo-circular.svg" alt="">
            <strong>Diego</strong>
            
            <button>
            <img src="@/assets/logotipo-circular.svg" alt="">

            </button>
            <button>
            <img src="@/assets/logotipo-circular.svg" alt="">

            </button>
            <button>
            <img src="@/assets/logotipo-circular.svg" alt="">

            </button>
            <button>
            <img src="@/assets/logotipo-circular.svg" alt="">

            </button>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.header {
    // position: absolute;
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: chartreuse;
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
            background: #F0F2F5;
            color: #65676B;
        }
    }
    &__buttons {
        display: flex;
        align-items: center;
    }
}
</style>