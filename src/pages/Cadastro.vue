<template>
  <div>
    <form @submit="uploadUser">
      <input type="text" placeholder="Digite seu nome" v-model="name" />
      <input type="E-mail" placeholder="Digite seu email" v-model="email" />
      <input type="date" placeholder="Digite data de nascimento" v-model="date" />
      <input type="password" placeholder="Digite sua senha" v-model="password" />
      <input type="password" placeholder="Confirme sua senha" v-model="confirmPassword" />
      <button>Cadastrar</button>
    </form>
    <router-link to="/">Voltar</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      email: "",
      date: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    async uploadUser(e) {
      e.preventDefault();

      await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        date: this.date,
        password: this.password,
      });
      this.$router.push("/");
    },
  },
};
</script>