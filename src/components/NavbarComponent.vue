<template>
    <nav id="navbar">
      <div class="esquerda">
        <router-link class="item" v-bind:class="{ ativo: isAtivo1 }" to="/">Início</router-link>
        <router-link class="item" v-bind:class="{ ativo: isAtivo2 }" to="/jogo">Jogo</router-link>
        <router-link class="item" v-bind:class="{ ativo: isAtivo3 }" to="/">Ranking</router-link>
        <router-link class="item" v-bind:class="{ ativo: isAtivo4 }" to="/">Conquistas</router-link>
        <router-link class="item" v-bind:class="{ ativo: isAtivo5 }" to="/sobre">Sobre</router-link>
      </div>

      <div class="right">
        <p class="ola" v-if="user">Olá&nbsp;&nbsp;<span class="ativo">{{ user.displayName }}</span>&nbsp;&nbsp;|&nbsp;&nbsp;</p>
        <router-link class="item login" v-bind:class="{ ativo: isAtivo6 }" to="/login" v-if="!user">Login</router-link>
        <a class="item login" @click="$store.dispatch('logout')" v-on:click="logout()" v-else>Logout</a>
      </div>
    </nav>
    <router-view/>
</template>

<style scoped>
  #navbar{
      background-color: #77AD78;
      height: 7vh;
      display: flex;
      justify-content: space-between;
  }

  .item{
    color: #FFFFFF;
    text-decoration: none;
    margin-right: 2vw;
    font-size: 1.1rem;
  }
  .ola{
    color: #FFFFFF;
    text-decoration: none;
    font-size: 1.1rem;
  }

  .right, .esquerda{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .login{
      margin: 0 5vw 0 0;
      cursor: pointer;
  }

  .esquerda{
    margin-left: 5vw;
  }

  .ativo{
    color: #9B6713;
  }

  .flex{
    display: flex;
  }
</style>

<script>
  import {onMounted, ref} from "vue";
  import { auth } from '../firebase';

  export default{
      props: ['ativo'],
      name: 'NavbarComponent',
      data(){
          return{
              isAtivo1: true,
              isAtivo2: false,
              isAtivo3: false,
              isAtivo4: false,
              isAtivo5: false,
              isAtivo6: false
          }
      },
      methods:{
        seleciona(){
          switch (this.ativo) {
            case '1':
              this.isAtivo1 = true;
              break;

            case '2':
              this.isAtivo2 = true;
              this.isAtivo1 = false;
              break;

            case '3':
              this.isAtivo3 = true;
              this.isAtivo1 = false;
              break;

            case '4':
              this.isAtivo4 = true;
              this.isAtivo1 = false;
              break;

            case '5':
              this.isAtivo5 = true;
              this.isAtivo1 = false;
              break;

            case '6':
              this.isAtivo6 = true;
              this.isAtivo1 = false;
              break;
          }
        },

        logout(){
          alert("Você foi deslogado(a).");
          this.mudaLogadoF();
        },
        
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
      mounted() {
        if (this.ativo != null) {
          this.seleciona();
        }
        
      }
  }
</script>