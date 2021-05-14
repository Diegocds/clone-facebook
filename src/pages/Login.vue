<template>
  <div class="container">
    <ModalCadastro
      :playButton="playButton"
      :hideModal="hideModal"
      :modal="modal"
    />
    <div class="container__logo">
      <img
        class="container__logo__img"
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        alt=""
      />
      <h2>
        Logins recentes
      </h2>
      <p>Clique na foto ou adicione uma conta.</p>
      <div class="container__logo__cards">
        <div class="container__logo__cards__card-1">
          <div class="container__logo__cards__card-1__png">
            <img
              src="@/assets/diego.jpg"
              alt=""
            />
          </div>
          <div class="container__logo__cards__card-1__name">
            <span>Diego</span>
          </div>
        </div>
        <div class="container__logo__cards__card-1">
          <div class="container__logo__cards__card-1__png">
            <img
              class="container__logo__cards__card-1__png__img"
              src="@/assets/add_circle_black_36dp.svg"
              alt=""
            />
          </div>
          <div class="container__logo__cards__card-1__name">
            <span class="container__logo__cards__card-1__name__span"
              >Adicionar conta</span
            >
          </div>
        </div>
      </div>
    </div>
    <div class="container__section">
      <div class="container__section__form">
        <form @submit="submit">
          <div class="container__section__form__input">
            <input
              type="email"
              placeholder="Email ou telefone"
              v-model="email"
            />
          </div>
          <div class="container__section__form__input">
            <input type="password" placeholder="Senha" v-model="password" />
          </div>
          <div class="container__section__form__button">
            <button>Entrar</button>
            <p>Esqueceu sua senha?</p>
          </div>
          <div class="container__section__form__cadastro">
            <a
              class="container__section__form__cadastro__link"
              @click="playButton()"
            >
              Criar nova conta
            </a>
          </div>
        </form>
      </div>
      <p class="container__section__p">
        <strong>Criar uma página</strong>
        para uma celebridade, banda ou empresa
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import ModalCadastro from "@/components/ModalCadastro";

export default {
  data() {
    return {
      email: "",
      password: "",
      modal: false,
    };
  },
  components: {
    ModalCadastro,
  },
  methods: {
    async submit(e) {
      e.preventDefault();

      const { data } = await axios.get("http://localhost:3000/users", {
        params: {
          email: this.email,
          password: this.password,
        },
      });
      if (data.length === 0) {
        alert("Usuário ou senha incorretos");
        this.email = "";
        this.password = "";
      } else {
        this.$router.push({ name: "Timeline" });
      }
    },
    playButton() {
      this.modal = true;
    },
    hideModal() {
      this.modal = false;
    },
  },
};
</script>

<style lang="scss">
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: #f0f2f5;
  &__logo {
    width: 500px;
    height: 630px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background: #f0f2f5;
    padding-right: 60px;
    &__img {
      margin-left: -20px;
    }

    img {
      width: 200px;
      height: 70px;
    }
    h2 {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 28px;
      font-weight: normal;
      line-height: 32px;
    }
    p {
      color: #606770;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 15px;
      line-height: 24px;
      margin-bottom: 12px;
    }
    &__cards {
      width: 350px;
      height: 300px;
      display: flex;
      justify-content: space-between;
      text-align: center;
      background: #f0f2f5;

      &__card-1 {
        height: auto;
        width: 160px;
        height: 210px;
        margin-top: 10px;
        background: #f5f6f7;
        border: 1px solid #dbdbdb;
        border-radius: 10px;
        &__name {
          background: #ffffff;
          height: 36px;
          border-bottom-left-radius: 10px;
          border-bottom-right-radius: 10px;
          padding-top: 8px;

          span {
            font-size: 18px;
            line-height: 22px;
            font-family: Helvetica, Arial, sans-serif;
          }
          &__span {
            color: #1877f2;
          }
        }
        &__png {
          width: 150px;
          height: auto;
          img {
            width: 160px;
            height: 100%;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
          }
        }
      }
    }
  }
  &__section {
    &__form {
      width: 396px;
      height: 350px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #fff;
      border: none;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
      box-sizing: border-box;
      margin: 40px 0 0;
      padding-bottom: 10px;
      &__input {
        padding: 6px 0;
        input {
          font-size: 17px;
          padding: 14px 16px;
          width: 330px;
          border-radius: 6px;
          border: 1px solid #dbdbdb;
        }
      }
      &__button {
        text-align: center;
        padding-top: 6px;
        border-bottom: 1px solid #dbdbdb;
        margin-bottom: 20px;
        button {
          background-color: #1877f2;
          border: none;
          border-radius: 6px;
          font-size: 20px;
          font-weight: 600;
          color: #ffffff;
          line-height: 48px;
          padding: 0 16px;
          margin-bottom: 16px;
          width: 360px;
          cursor: pointer;
          outline: 0;
        }
        p {
          color: #1877f2;
          font-size: 14px;
          font-weight: 500;
          font-family: Helvetica, Arial, sans-serif;
          cursor: pointer;
          margin-bottom: 20px;
          text-decoration: none;
        }
      }
      &__cadastro {
        text-align: center;
        &__link {
          width: 170px;
          border: none;
          border-radius: 6px;
          font-size: 17px;
          font-weight: 600;
          font-family: Helvetica, Arial, sans-serif;
          color: #ffffff;
          line-height: 48px;
          padding: 0 16px;
          cursor: pointer;
          display: inline-block;
          text-decoration: none;
          background-color: #42b72a;
        }
      }
    }
    strong {
      font-family: Helvetica, Arial, sans-serif;
      font-size: 14px;
      font-weight: 600;
    }
    &__p {
      text-align: center;
      color: #1c1e21;
      font-family: Helvetica, Arial, sans-serif;
      font-size: 14px;
      font-weight: normal;
      margin-top: 28px;
    }
  }
}
</style>
