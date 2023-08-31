<template>
    <main class="jogo">
      <NavbarComponent ativo='2'/>
  
      <div class="fundoDark">

        <div class="boxMarromSelecao" v-if="!isJogo">
            <section>
              <h1 class="legenda">Escolha a Dificuldade:</h1>
              <select v-model="selected">
                <option v-for="option in options" :key="option.value" :value="option.value">
                  {{ option.text }}
                </option>
              </select>
            </section>

            <button class="botao" id="resp" v-on:click="mostrarJogo()" >Responder Perguntas</button>
        </div>

        <div class="boxJogo" v-if="isJogo">
            <div class="s1">
                <div class="infos">
                  <h3>
                    Dificuldade
                  </h3>
                  <h3 class="verde">
                    {{dificuldade}}
                  </h3>
                </div>

                <div class="infos">
                  <h3>
                    Tempo
                  </h3>
                  <h3 class="verde">
                    {{tempo}}&nbsp;&nbsp;s
                  </h3>
                </div>
            </div>

            <div class="s2"></div>

            <div class="s3">
              <div class="numero" v-bind:class="{ nVerde: isAtivo1 }">
                <h4>1</h4>
              </div>
              <div class="numero" v-bind:class="{ nVerde: isAtivo2 }">
                <h4>2</h4>
              </div>
              <div class="numero" v-bind:class="{ nVerde: isAtivo3 }">
                <h4>3</h4>
              </div>
              <div class="numero" v-bind:class="{ nVerde: isAtivo4 }">
                <h4>4</h4>
              </div>
              <div class="numero" v-bind:class="{ nVerde: isAtivo5 }">
                <h4>5</h4>
              </div>
              <div class="numero" v-bind:class="{ nVerde: isAtivo6 }">
                <h4>6</h4>
              </div>
              <div class="numero" v-bind:class="{ nVerde: isAtivo7 }">
                <h4>7</h4>
              </div>
              <div class="numero" v-bind:class="{ nVerde: isAtivo8 }">
                <h4>8</h4>
              </div>
              <div class="numero" v-bind:class="{ nVerde: isAtivo9 }">
                <h4>9</h4>
              </div>
              <div class="numero" v-bind:class="{ nVerde: isAtivo10 }">
                <h4>10</h4>
              </div>
            </div>

            <div class="s4">
              <h2>
                {{ perguntaText }}
              </h2>
            </div>

            <div class="s5">
              <h5 class="alternativa correta">A&nbsp;&nbsp;&nbsp;{{opA}}</h5>
              <div class="linha"></div>
              <h5 class="alternativa">B&nbsp;&nbsp;&nbsp;{{opB}}</h5>
              <div class="linha"></div>
              <h5 class="alternativa">C&nbsp;&nbsp;&nbsp;{{opC}}</h5>
              <div class="linha"></div>
              <h5 class="alternativa">D&nbsp;&nbsp;&nbsp;{{opD}}</h5>
              <div class="linha"></div>
              <h5 class="alternativa errada">E&nbsp;&nbsp;&nbsp;{{opE}}</h5>
            </div>
        </div>
      </div>
  
      <FooterComponent/>
    </main>
</template>

<style scoped>

  *{
    color: white;
  }
  .fundoDark{
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    height: 86vh;

    background-color: #504B43;
  }

  .boxMarromSelecao{
    height: 30vh;
    width: 25vw;
    background-color: #A76F4B;
    border-radius: 1.5vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }

  .boxJogo{
    height: 70vh;
    width: 50vw;
    background-color: #A76F4B;
    border-radius: 2vw;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
  }

  .boxMarromSelecao section{
    height: 10vh;
  }

  select{
    width: 15vw;
    height: 4vh;
    background-color: #DEA05F;
    border-radius: 0.3vw;
    color: white;
    font-size: 2vh;
    cursor: pointer;
    margin-top: 1.5vh;
  }

  .legenda{
    font-size: 3.4vh;
  }

  #resp{
    width: 15vw;
    height: 6vh;
    font-size: 2.7vh;
  }

  .verde{
    background-color: #77AD78;
    text-align: center;
    margin-top: 0.5vh;
  }

  .s1{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 7vh;
  }

  .infos{
    margin: 0 3vw;
  }

  .s2{
    width: 100%;
    height: 0.4vh;
    background-color: white;
  }

  .s3{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    width: 100%;
    height: 10vh;
  }

  .numero{
    height: 4vw;
    width: 4vw;
    background-color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-size: 4vh;
    margin: 0;
  }

  .numero h4{
    color: #8FD669;
    text-align: center;
  }

  .nVerde{
    background-color: #77AD78;
  }

  .nVerde h4{
    color: white;
  }

  .s5{
    height: 30vh;
    width: 40vw;
    background-color: #DEA05F;
    border-radius: 1vw;
    border: 2px solid white;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    overflow: hidden;
  }

  .alternativa{
    width: 39vw;
    font-size: 3vh;
    padding-left: 1vw;
    line-height: 5.8vh;
  }

  .linha{
    border: 1px solid white;
    width: 100%;
  }

  .correta{
    background-color: #77AD78;
  }

  .errada{
    background-color: #ff6961;
  }
</style>

<script>
  import NavbarComponent from '@/components/NavbarComponent.vue';
  import FooterComponent from '@/components/FooterComponent.vue';
  import { useStore} from "vuex";
  import {computed, ref} from "vue";
  import { auth } from '../firebase';

  export default {
    components: {
      NavbarComponent,
      FooterComponent
    },
    data ( ) {
		  return {
        selected : ref('Fácil'),
        options : ref([
          { text: 'Fácil', value: 'Fácil' },
          { text: 'Médio', value: 'Médio' },
          { text: 'Difícil', value: 'Difícil' }
        ]),
        isJogo: false,
        dificuldade: "Fácil",
        tempo: 0,
        isAtivo1: true,
        isAtivo2: false,
        isAtivo3: false,
        isAtivo4: false,
        isAtivo5: false,
        isAtivo6: false,
        isAtivo7: false,
        isAtivo8: false,
        isAtivo9: false,
        isAtivo10: false,
        perguntaText: "Selecione as fontes de energia renovável :",
        opA: 'teste',
        opB: '', 
        opC: '',
        opD: '',
        opE: ''
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
    methods:{
      mostrarJogo(){
        this.isJogo = true;
        this.dificuldade = this.selected;
      }
    },
    mounted(){
      
    },
  }
</script>