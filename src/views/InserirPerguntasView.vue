<template>
    <main class="inserirperguntas">
        <NavbarComponent ativo='4' />

        <div class="fundoDark">
            <div class="boxMarrom">
                <form class="create" @submit.prevent="criaPergunta">
                    <h2 class="title">Criar Pergunta</h2>
                    <input class="text" type="text" placeholder="Texto" required='true' v-model="pergunta.texto" />
                    <input class="text" type="text" placeholder="Resposta" required="true" v-model="pergunta.resposta" />
                    <input class="text" type="text" placeholder="1° Alternativa" required="true" v-model="pergunta.alt1" />
                    <input class="text" type="text" placeholder="2° Alternativa" required="true" v-model="pergunta.alt2" />
                    <input class="text" type="text" placeholder="3° Alternativa" required="true" v-model="pergunta.alt3" />
                    <input class="text" type="text" placeholder="4° Alternativa" required="true" v-model="pergunta.alt4" />
                    <input class="text" type="text" placeholder="5° Alternativa" required="true" v-model="pergunta.alt5" />
                    <input class="text" type="fonte" placeholder="Fonte" required="true" v-model="pergunta.fonte" />
                    <h4>Dificuldade</h4>
                    <input type="radio" id="facil" value="Fácil" v-model="pergunta.dificuldade" />
                    <label for="facil">Fácil</label>
                    <input type="radio" id="dificil" value="Difícil" v-model="pergunta.dificuldade" />
                    <label for="dificil">Difícil</label>
                    <input class="text" type="submit" value="Criar" />
                </form>
            </div>
        </div>

        <FooterComponent />
    </main>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { useStore } from "vuex";
import { computed } from "vue";
import { auth } from '../firebase';
import { createPergunta } from '@/service/Pergunta.service.js';

export default {
    components: {
        NavbarComponent,
        FooterComponent
    },
    data() {
        return {
            pergunta: {}
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
        async criaPergunta(){
            if(!this.pergunta.dificuldade){
                alert("Escolha a dificuldade");
                return;
            }
            
            await createPergunta(this.pergunta);
            alert("Pergunta Criada!");
            this.limpaForm();
        },

        limpaForm(){
            this.pergunta.texto = '';
            this.pergunta.resposta = '';
            this.pergunta.alt1 = '';
            this.pergunta.alt2 = '';
            this.pergunta.alt3 = '';
            this.pergunta.alt4 = '';
            this.pergunta.alt5 = '';
            this.pergunta.fonte = '';
            this.pergunta.dificuldade = '';
        }
    },
    mounted() {

    },
}
</script>

<style>
.boxMarrom {
    background-color: #A76F4B;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    height: 70vh;
    width: 30vw;
    border-radius: 2vh;
    color: white;
}

.title {
    text-align: center;
    margin: 2vh 0;
}

.text {
    appearance: none;
    border: none;
    outline: none;
    background: none;
    border-radius: 0.5rem;

    display: block;
    width: 20vw;
    max-width: 400px;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    padding: 0.5rem 0.5rem;
    font-size: 2vh;
    color: #FFF;
    background-color: #DEA05F;
}

input:-webkit-autofill,
input:-webkit-autofill:hover,
input:-webkit-autofill:focus,
input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #DEA05F inset !important;
}

input:-webkit-autofill {
    -webkit-text-fill-color: white !important;
}

input::placeholder {
    color: inherit;
}

form input[type="radio"]{
    margin: 0.5rem;
}

h4{
    margin-left: 0.5rem;
}

form input[type="submit"] {
    background-color: #77AD78;
    color: #FFF;
    font-weight: 700;
    cursor: pointer;
    text-transform: uppercase;
    width: 100%;
    margin-top: 1rem;
}
</style>