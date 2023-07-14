<template>
    <nav id="navbar" v-if="$store.state.user">
      <div class="esquerda">
        <router-link class="item" v-bind:class="{ ativo: isAtivo1 }" to="/">Início</router-link>
        <router-link class="item" v-bind:class="{ ativo: isAtivo2 }" to="/">Jogo</router-link>
        <router-link class="item" v-bind:class="{ ativo: isAtivo3 }" to="/">Ranking</router-link>
        <router-link class="item" v-bind:class="{ ativo: isAtivo4 }" to="/">Conquistas</router-link>
        <router-link class="item" v-bind:class="{ ativo: isAtivo5 }" to="/sobre">Sobre</router-link>
      </div>

      <div class="direita">
        <a class="item login"  v-bind:class="{ ativo: isAtivo5 }" @click="$store.dispatch('logout')">Logout</a>
      </div>
    </nav>
    <router-view/>
</template>

<style>
  * {
    margin: 0;
    padding: 0;
  }

  #navbar{
      background-color: #77AD78;
      height: 2.5em;
      display: flex;
      justify-content: space-between;
  }

  .item{
    color: #FFFFFF;
    text-decoration: none;
    margin-right: 2em;
    font-size: 1.1rem;
  }

  .direita, .esquerda{
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .login{
      margin: 0 4em 0 1em;
      cursor: pointer;
  }

  .esquerda{
    margin-left: 3em;
  }

  .ativo{
    color: #9B6713;
  }
</style>

<script>
  import { onBeforeMount } from 'vue'
  import { useStore } from 'vuex'

  export default{
      name: 'NavbarComponent',
      data(){
          return{
              session: "Login",
              isAtivo1: true,
              isAtivo2: false,
              isAtivo3: false,
              isAtivo4: false,
              isAtivo5: false,
              isAtivo6: false
          }
      },
      setup() {
        const store = useStore()

        onBeforeMount(() => {
          store.dispatch('fetchUser')
        })
      }
}
</script>