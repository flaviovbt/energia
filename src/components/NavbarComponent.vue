<template>
    <nav id="navbar">
      <div class="esquerda">
        <router-link class="item" v-bind:class="{ ativo: isAtivo1 }" to="/">Início</router-link>
        <router-link class="item" v-bind:class="{ ativo: isAtivo2 }" to="/">Jogo</router-link>
        <router-link class="item" v-bind:class="{ ativo: isAtivo3 }" to="/">Ranking</router-link>
        <router-link class="item" v-bind:class="{ ativo: isAtivo4 }" to="/">Conquistas</router-link>
        <router-link class="item" v-bind:class="{ ativo: isAtivo5 }" to="/sobre">Sobre</router-link>
      </div>

      <div class="right">
        <router-link class="item login" v-bind:class="{ ativo: isAtivo6 }" to="/login" v-if="!isLogado">Login</router-link>
        <a class="item login" @click="$store.dispatch('logout')" v-on:click="logout()" v-if="isLogado">Logout</a>
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

  .right, .esquerda{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .login{
      margin: 0 5vw 0 1vw;
      cursor: pointer;
  }

  .esquerda{
    margin-left: 5vw;
  }

  .ativo{
    color: #9B6713;
  }
</style>

<script>
  import { useStore} from "vuex";
  import {computed} from "vue";
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
              isAtivo6: false,
              isLogado: false
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

        mudaLogadoT(){
          this.isLogado = true;
        },

        mudaLogadoF(){
          this.isLogado = false;
        }
      },
      setup() {

        const store = useStore()

        auth.onAuthStateChanged(user => {
          store.dispatch("fetchUser", user);
        });

        const user = computed(() => {
          return store.getters.user;
        });

        return {user}
      },
      mounted() {
        if (this.ativo != null) {
          this.seleciona();
        }
        
        try {
          if(this.user.displayName != null){
            this.mudaLogadoT();
          }else{
            this.mudaLogadoF();
          }
        }catch(Ex){
          this.mudaLogadoF();
        }
        
      }
  }
</script>