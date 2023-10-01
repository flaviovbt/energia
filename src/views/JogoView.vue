<template>
  <main class="jogo">
    <NavbarComponent ativo='2' />

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

        <button class="botao" id="resp" v-on:click="mostrarJogo()">Responder Perguntas</button>
      </div>

      <div class="boxJogo" v-if="isJogo">
        <div class="s1">
          <div class="infos">
            <h3>
              Dificuldade
            </h3>
            <h3 class="verde">
              {{ dificuldade }}
            </h3>
          </div>

          <div class="infos">
            <h3>
              Tempo
            </h3>
            <h3 class="verde">
              {{ zfill(sec) }}&nbsp;&nbsp;s
            </h3>
          </div>
        </div>

        <div class="s2"></div>

        <div class="s3">
          <div class="numero" v-bind:class="{ nVerde: isPerguntaAtual[0] }">
            <h4>1</h4>
          </div>
          <div class="numero" v-bind:class="{ nVerde: isPerguntaAtual[1] }">
            <h4>2</h4>
          </div>
          <div class="numero" v-bind:class="{ nVerde: isPerguntaAtual[2] }">
            <h4>3</h4>
          </div>
          <div class="numero" v-bind:class="{ nVerde: isPerguntaAtual[3] }">
            <h4>4</h4>
          </div>
          <div class="numero" v-bind:class="{ nVerde: isPerguntaAtual[4] }">
            <h4>5</h4>
          </div>
          <div class="numero" v-bind:class="{ nVerde: isPerguntaAtual[5] }">
            <h4>6</h4>
          </div>
          <div class="numero" v-bind:class="{ nVerde: isPerguntaAtual[6] }">
            <h4>7</h4>
          </div>
          <div class="numero" v-bind:class="{ nVerde: isPerguntaAtual[7] }">
            <h4>8</h4>
          </div>
          <div class="numero" v-bind:class="{ nVerde: isPerguntaAtual[8] }">
            <h4>9</h4>
          </div>
          <div class="numero" v-bind:class="{ nVerde: isPerguntaAtual[9] }">
            <h4>10</h4>
          </div>
        </div>

        <div class="s4">
          <h2>
            {{ perguntaText }}
          </h2>
        </div>

        <div class="s5">
          <h5 class="alternativa" v-bind:class="{ correta: isC[0], errada: isE[0] }" v-on:click="resposta(0)">
            A&nbsp;&nbsp;&nbsp;{{ op[0] }}</h5>
          <div class="linha"></div>
          <h5 class="alternativa" v-bind:class="{ correta: isC[1], errada: isE[1] }" v-on:click="resposta(1)">
            B&nbsp;&nbsp;&nbsp;{{ op[1] }}</h5>
          <div class="linha"></div>
          <h5 class="alternativa" v-bind:class="{ correta: isC[2], errada: isE[2] }" v-on:click="resposta(2)">
            C&nbsp;&nbsp;&nbsp;{{ op[2] }}</h5>
          <div class="linha"></div>
          <h5 class="alternativa" v-bind:class="{ correta: isC[3], errada: isE[3] }" v-on:click="resposta(3)">
            D&nbsp;&nbsp;&nbsp;{{ op[3] }}</h5>
          <div class="linha"></div>
          <h5 class="alternativa" v-bind:class="{ correta: isC[4], errada: isE[4] }" v-on:click="resposta(4)">
            E&nbsp;&nbsp;&nbsp;{{ op[4] }}</h5>
        </div>
      </div>
    </div>

    <FooterComponent />
  </main>
</template>

<style scoped>
* {
  color: white;
}

.boxMarromSelecao {
  height: 30vh;
  width: 25vw;
  background-color: #A76F4B;
  border-radius: 1.5vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}

.boxJogo {
  height: 70vh;
  width: 50vw;
  background-color: #A76F4B;
  border-radius: 2vw;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-direction: column;
}

.boxMarromSelecao section {
  height: 10vh;
}

select {
  width: 15vw;
  height: 4vh;
  background-color: #DEA05F;
  border-radius: 0.3vw;
  color: white;
  font-size: 2vh;
  cursor: pointer;
  margin-top: 1.5vh;
}

.legenda {
  font-size: 3.4vh;
}

#resp {
  width: 15vw;
  height: 6vh;
  font-size: 2.7vh;
}

.verde {
  background-color: #77AD78;
  text-align: center;
  margin-top: 0.5vh;
}

.s1 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 7vh;
}

.infos {
  margin: 0 3vw;
}

.s2 {
  width: 100%;
  height: 0.4vh;
  background-color: white;
}

.s3 {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 10vh;
}

.numero {
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

.numero h4 {
  color: #8FD669;
  text-align: center;
}

.nVerde {
  background-color: #77AD78;
}

.nVerde h4 {
  color: white;
}

.s5 {
  height: 30vh;
  width: 45vw;
  background-color: #DEA05F;
  border-radius: 1vw;
  border: 2px solid white;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  overflow: hidden;
}

.s4 {
  width: 45vw;
}

.s4 h2 {
  font-size: 4vh;
  line-height: 4vh;
  letter-spacing: 0.15vw;
}

.s5 h5 {
  width: 100%;
  height: 100%;
  font-size: 3vh;
  line-height: 3vh;
  letter-spacing: 0.15vw;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.alternativa {
  width: 39vw;
  font-size: 3vh;
  padding-left: 1vw;
  line-height: 5.8vh;
}

.linha {
  border: 1px solid white;
  width: 100%;
}

.correta {
  background-color: #77AD78;
}

.errada {
  background-color: #ff6961;
}
</style>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { useStore } from "vuex";
import { computed, ref } from "vue";
import { auth } from '../firebase';
import { getPerguntasRandom, createPartida } from '@/service/JogoView.service.js';
import { getUser, updateUser } from '@/service/User.service.js';

export default {
  components: {
    NavbarComponent,
    FooterComponent
  },
  data() {
    return {
      selected: ref('Fácil'),
      options: ref([
        { text: 'Fácil', value: 'Fácil' },
        { text: 'Médio', value: 'Médio' },
        { text: 'Difícil', value: 'Difícil' }
      ]),
      isJogo: false,
      dificuldade: "Fácil",
      pontuacao: 0,
      tempo: 0,
      numPergunta: -1,
      isPerguntaAtual: [],
      perguntaText: "Selecione as fontes de energia renovável :",
      op: [],
      isC: [],
      isE: [],
      perguntas: [],
      perguntaAtual: {},
      sec: 0,
      timer: null,
      intervalList: []
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

    return { user }
  },
  methods: {
    async startJogo() {
      this.numPergunta = 0;
      this.isPerguntaAtual[this.numPergunta] = true;

      this.perguntaAtual = await this.perguntas[this.numPergunta];
      this.perguntaText = await this.perguntaAtual.texto;
      this.op = this.perguntaAtual.alternativas;

      this.isJogo = true;
    },

    async mostrarJogo() {
      this.dificuldade = this.selected;
      this.perguntas = await getPerguntasRandom();
      this.startJogo();
      this.play();
    },

    indiceRespostaCerta() {
      if (this.perguntaAtual.resposta == this.op[0])
        return 0;
      else if (this.perguntaAtual.resposta == this.op[1])
        return 1;
      else if (this.perguntaAtual.resposta == this.op[2])
        return 2;
      else if (this.perguntaAtual.resposta == this.op[3])
        return 3;
      else if (this.perguntaAtual.resposta == this.op[4])
        return 4;
    },

    mudaAlternativa() {
      this.isPerguntaAtual[this.numPergunta] = false;
      this.numPergunta++;
      this.isPerguntaAtual[this.numPergunta] = true;

      this.perguntaAtual = this.perguntas[this.numPergunta];
      this.perguntaText = this.perguntaAtual.texto;
      this.op = this.perguntaAtual.alternativas;
    },

    async resposta(alternativa) {
      if (this.perguntaAtual.resposta == this.op[alternativa]) {
        this.isC[alternativa] = true;
        this.pontuacao += 100;
      } else {
        this.isE[alternativa] = true;
        this.isC[this.indiceRespostaCerta()] = true;
      }

      if (this.numPergunta == 9) {
        this.play();

        setTimeout(await function () {
          this.isPerguntaAtual[this.numPergunta] = false;
          this.isE[alternativa] = false;
          this.isC[this.indiceRespostaCerta()] = false;
          this.enviaInfosPartida();
          this.clear();
          this.isJogo = false;
        }.bind(this), 1500);

      } else {
        this.play();
        setTimeout(function () {
          this.isC[this.indiceRespostaCerta()] = false;
          this.isE[alternativa] = false;
          this.play();
          this.mudaAlternativa();
        }.bind(this), 1500);
      }
    },

    calculaPontuacao() {
      let multiplicador = 1;
      switch (this.dificuldade) {
        case 'Fácil':
          multiplicador = 1;
          break;
        case 'Médio':
          multiplicador = 1.5;
          break;
        case 'Difícil':
          multiplicador = 2;
          break;
      }

      this.pontuacao = (this.pontuacao * multiplicador) / (this.sec * 0.5);
    },

    async enviaInfosPartida() {
      let partida = {};
      partida.acertos = this.pontuacao / 100;

      this.calculaPontuacao();
      partida.pontuacao = this.pontuacao;
      alert("pontuação: " + this.pontuacao);

      partida.dificuldade = this.dificuldade;
      partida.tempo = this.sec;

      await createPartida(partida, this.user.email, this.user.nome);
    },

    zfill(number) {
      return number.toString().padStart(2, 0)
    },
    play() {

      if (this.timer === null) {
        this.playing()
        this.timer = setInterval(() => this.playing(), 1000)
      }
      else {
        clearInterval(this.timer);
        this.timer = null;
        this.pause();
      }
    },

    playing() {
      this.sec++;
    },

    pause() {
      this.intervalList.push(`${this.zfill(this.sec)}`);
    },

    clear() {
      if (this.timer !== null) {
        clearInterval(this.timer)
        this.timer = null
      }
      this.sec = 0;
      this.clearIntervalList();
    },

    clearIntervalList() {
      this.intervalList = []
    }

  },
  mounted() {

  },
}
</script>