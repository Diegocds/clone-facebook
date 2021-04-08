<template>
  <div class="container">
    <div class="container__logo">
      <img
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        alt=""
      />
      <h2>
        Logins recentes
      </h2>
      <p>Clique na foto ou adicione uma conta.</p>
      <div class="cards">
        <div class="card-1">Foto Diego</div>
        <div class="card-1">Adicionar conta</div>
      </div>
    </div>
    <div class="container__form">
      <form @submit="submit">
        <div>
          <input type="email" placeholder="Digite seu email" v-model="email" />
        </div>
        <div>
          <input
            type="password"
            placeholder="Digite sua senha"
            v-model="password"
          />
        </div>
        <div>
          <button>Entrar</button>
        </div>
        <router-link to="/cadastro">Criar nova conta</router-link>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
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
      if (data.lenght === 0) {
        alert("Usuário ou senha incorretos");
      } else {
        this.$router.push({ name: "Timeline" });
      }
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
  &__logo {
    width: 50%;
    display: flex;
    justify-content: center;
    flex-direction: column;
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
  }
  &__form {
    width: 50%;
    display: flex;
    justify-content: center;
  }
}
</style>
