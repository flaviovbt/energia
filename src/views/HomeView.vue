<template>
  <main class="home">
    <NavbarComponent ativo='1'/>

    <div class="imgFundo">
      <div class="esquerda">

        <h1>Bem vindo(a) <spam v-if="user">{{ user.displayName }}</spam> ao melhor jogo de <br>
        perguntas e respostas sobre Energia <br>
        Sustentável e  Meio Ambiente. Desafie <br>
        seus amigos, teste seus conhecimentos, <br>
        aprenda e suba rumo ao topo do Ranking<br>
        da Enegia Limpa.<br><br><br></h1>

        <h1>Todas as pessoas podem fazer a sua <br>
          parte para ajudar o Meio Ambiente, <br>
          compartilhe este jogo e conscientize <br>
          as pessoas sobre a importância da <br>
          preservação.</h1>

        </div>

        <div class="direita">

        <div class="b1">
          <router-link class="botao" to="/jogo">Comece A Jogar Agora</router-link>
          <p class="info">*É necessário efetuar o login antes de Jogar</p>
        </div>

        <div class="b2">
          <router-link class="botao" to="/">Ranking Da Energia Limpa</router-link>
        </div>
        </div>
    </div>

    <FooterComponent/>
  </main>
</template>

<style>
  .imgFundo{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 86vh;
    background-image: url("../assets/fundo.png");
    background-blend-mode: darken;
    background-color: rgb(0, 0, 0, 0.2);
  }

  .esquerda h1{
    font-size: 4vh;
    color: white;
  }

  .botao{
    background-color: #77AD78;
    color: white;
    height: 8vh;
    width: 20vw;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 1.5vh;
    text-decoration: none;
    font-size: 2.8vh;
    cursor: pointer;
  }

  .info{
    font-size: 2vh;
    color: white;
  }

  .direita{
    display: flex;
    flex-direction: column;
    height: 40vh;
    align-items: center;
    justify-content: space-around;
  }

  .b1{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>

<script>
  import NavbarComponent from '@/components/NavbarComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  import { onMounted, ref} from "vue";
  import { auth } from '../firebase';

  export default {
    components: {
      NavbarComponent,
      FooterComponent
    },
    data ( ) {
		  return {
			  nome: ''
		  }
	  },
    setup() {

      const user = ref(null);

      onMounted(() => {
      auth.onAuthStateChanged(currentUser => {
        user.value = currentUser;
      });
      });

      return {user}
    },
    async mounted(){
      
    }
  }
</script>