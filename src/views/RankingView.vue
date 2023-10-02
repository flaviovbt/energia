<template>
    <main class="ranking">
        <NavbarComponent ativo='3' />

        <div class="fundoDark">

            <h1>Para melhorar sua pontuação e subir no rank, responda as perguntas mais rápido e aumente a dificuldade.</h1>

            <div id="ranking">
                <table>
                    <thead>
                        <tr>
                            <th>Posição</th>
                            <th>Usuário</th>
                            <th>Dificuldade</th>
                            <th>Pontuaçâo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in items" :key="item.posicao">
                            <td>{{ item.posicao }}</td>
                            <td>{{ item.nome }}</td>
                            <td>{{ item.dificuldade }}</td>
                            <td>{{ item.maior }}</td>
                        </tr>
                    </tbody>
                </table>
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
import { getRanking } from '@/service/RankingView.service.js';

export default {
    components: {
        NavbarComponent,
        FooterComponent
    },
    data() {
        return {
            items: null
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
        clearIntervalList() {
            this.intervalList = []
        }

    },
    async mounted() {
        this.items = await getRanking();
    },
}
</script>

<style scoped>

*{
    color: white;
}

.fundoDark {
    flex-direction: column;
}

h1 {
    text-align: center;
    max-width: 60vw;
}

#ranking {
    background-color: #A76F4B;
    border-radius: 1vw;
}

table {
    width: 54vw;
    border-collapse: separate;
    border-spacing: 0.5vw;
    margin: 1vw;
}

th,
td {
    border: none;
    padding: 0.4vw;
    text-align: center;
    border-radius: 0.5vw;
}

td{
    background-color: #DEA05F;
}

th {
    background-color: #A76F4B;
}
</style>