<template>
  <div>
    <form @submit.prevent="uploadUser">
      <input type="text" placeholder="Digite seu nome" v-model="name" />
      <input type="E-mail" placeholder="Digite seu email" v-model="email" />
      <input
        type="date"
        placeholder="Digite data de nascimento"
        v-model="date"
      />
      <input
        type="password"
        placeholder="Digite sua senha"
        v-model="password"
      />
      <input
        type="password"
        placeholder="Confirme sua senha"
        v-model="confirmPassword"
      />
      <div>
        <router-link to="/">Cadastre-se</router-link>
      </div>
    </form>
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
