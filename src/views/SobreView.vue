<template>
  <main class="Sobre">
    <NavbarComponent ativo='5' />

    <div class="imgFundo">
      <div class="cima">
        <h1>Este site é um projeto de TCC <br>
          desenvolvido pela Universidade <br>
          Estadual de Campinas no Curso <br>
          Bacharelado em Sistemas de <br>
          Informação.</h1>

        <h1>Desenvolvido Por Flávio Vinícius <br>
          e Orientado Por Marli Freitas.</h1>
      </div>

      <div class="baixo"><router-link class="botao" v-bind:class="{ ativo: isAtivo4 }" to="/inserirperguntas"
          v-if="adminPermission">Inserir Perguntas</router-link></div>
    </div>

    <FooterComponent />
  </main>
</template>

<style scoped>
h1 {
  color: white;
  text-align: center;
}

.imgFundo {
  flex-direction: column;
}

.cima {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  align-items: center;
}
</style>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

import { onMounted, ref } from "vue";
import { auth } from '../firebase';
import { getUser } from '@/service/User.service.js';

export default {
  components: {
    NavbarComponent,
    FooterComponent
  },
  setup() {
    const user = ref(null);
    const adminPermission = ref(false);

    async function getPermission() {
      if (user.value && user.value.email) { // Certifique-se de que user.value existe e tem um email
        const userData = await getUser(user.value.email); // Substitua getUser com sua lógica real
        if (userData.cargo && userData.cargo === "admin") {
          adminPermission.value = true; // Defina adminPermission usando a variável reativa
        }
      }
    }

    onMounted(() => {
      auth.onAuthStateChanged(currentUser => {
        user.value = currentUser;
        if (user.value) {
          getPermission(); // Chame a função getPermission quando o usuário estiver disponível
        }
      });
    });

    return { user, adminPermission }
  }
}
</script>