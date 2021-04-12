<template>
  <div v-if="modal">
    <div class="overlay" @click="hideModal()"></div>
    <div class="modal">
      <div class="content-modal">
        <div class="iframe">
          <div class="titulo">
            <h1>Cadastre-se</h1>
            <p>É rápido e fácil</p>
          </div>
          <div>
            <form @submit="uploadUser">
              <div class="input">
                <input
                  class="input-name"
                  type="text"
                  placeholder="Nome"
                  v-model="name"
                />
                <input
                  class="input-name"
                  type="text"
                  placeholder="Sobrenome"
                  v-model="lastName"
                />
              </div>
              <input
                class="input-email"
                type="text"
                placeholder="Celular ou email"
                v-model="email"
              />
              <input
                class="input-senha"
                type="password"
                placeholder="Digite sua senha"
                v-model="password"
              />
              <p>Data de Nascimento</p>
              <div class="input-nascimento">
                <input
                  type="number"
                  placeholder="Dia"
                  v-model="date"
                  class="input-number"
                />
                <input
                  type="number"
                  placeholder="Mês"
                  v-model="date"
                  class="input-number"
                />
                <input
                  type="number"
                  placeholder="Ano"
                  v-model="date"
                  class="input-number"
                />
              </div>
              <p>Gênero</p>

              <div class="checkbox">
                <div class="input-genero">
                  <label for="feminino"> Feminino </label>
                  <input type="radio" nome="feminino" value="newsletter" />
                </div>
                <div class="input-genero">
                  <label for="masculino"> Masculino </label>
                  <input type="radio" nome="masculino" value="newsletter" />
                </div>
                <div class="input-genero-outros">
                  <label for="personalizado"> Personalizado </label>
                  <input type="radio" nome="personalizado" value="newsletter" />
                </div>
              </div>
              <p class="termos">
                Ao clicar em Cadastre-se, você concorda com nossos Termos,
                Política de Dados e Política de Cookies. Você poderá receber
                notificações por SMS e cancelar isso quando quiser.
              </p>
              <div class="cadastro">
                <router-link class="link" to="/">Cadastre-se</router-link>
              </div>
            </form>
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
.modal {
  z-index: 10;
  background: #c1c1c1;
}
.content-modal {
  position: absolute;
  width: 100%;
  height: auto;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.iframe {
  display: flex;
  // justify-content: center;
  // align-items: center;
  flex-direction: column;
  width: 430px;
  height: 530px;
  position: relative;
  z-index: 11;
  top: 20%;
  min-width: 300px;
  max-width: 1000px;
  min-height: 300px;
  padding: 0 20px;
  background: #ffffff;
  box-shadow: 0 2px 4px rgb(0 0 0 / 10%), 0 8px 16px rgb(0 0 0 / 10%);
  border-radius: 10px;
  margin-top: 60px;
}
.titulo {
  border-bottom: 1px solid #dadde1;
  padding: 10px 0;
}
.titulo h1 {
  color: #1c1e21;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 32px;
  line-height: 38px;
  margin-bottom: 0;
}
.titulo p {
  color: #606770;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15px;
  line-height: 24px;
}
.input {
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
}
.input-name {
  width: 45.5%;
  height: 40px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15px;
  background: #f5f6f7;
  border: 1px solid #ccd0d5;
  border-radius: 5px;
  padding-left: 11px;
}
.input-email {
  width: 97%;
  height: 40px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15px;
  background: #f5f6f7;
  border: 1px solid #ccd0d5;
  border-radius: 5px;
  padding-left: 11px;
  margin-bottom: 10px;
}
.input-senha {
  width: 97%;
  height: 40px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15px;
  background: #f5f6f7;
  border: 1px solid #ccd0d5;
  border-radius: 5px;
  margin-bottom: 20px;
  padding-left: 11px;
}
p {
  color: #606770;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  font-weight: normal;
  line-height: 20px;
}
.input-nascimento {
  display: flex;
  justify-content: space-between;
}
.input-number {
  width: 28%;
  height: 35px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15px;
  background: #ffffff;
  border: 1px solid #ccd0d5;
  border-radius: 5px;
  margin-bottom: 10px;
  padding-left: 11px;
}
.checkbox {
  display: flex;
  justify-content: space-between;
}
.input-genero {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 24%;
  height: 30px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  color: #606770;
  background: #ffffff;
  border: 1px solid #ccd0d5;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 0 11px;
}
.input-genero-outros {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30%;
  height: 30px;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 12px;
  text-transform: uppercase;
  color: #606770;
  background: #ffffff;
  border: 1px solid #ccd0d5;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 0 11px;
}

.termos {
  color: #777;
  font-size: 12px;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: normal;
  line-height: 15px;
  margin: 1em 0;
}

.cadastro {
  text-align: center;
}
.link {
  width: 194px;
  height: 36px;
  border: none;
  border-radius: 6px;
  font-size: 17px;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  color: #ffffff;
  line-height: 35px;
  padding: 0 16px;
  cursor: pointer;
  display: inline-block;
  text-decoration: none;
  background-color: #42b72a;
}
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

@media (max-width: 320px) {
  .content-iframe {
    padding: 0 50px 0 50px;
  }
}
</style>
