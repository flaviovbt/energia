<template>
    <main class="conquistas">
        <NavbarComponent ativo='4' />

        <div class="fundoDark">

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

export default {
    components: {
        NavbarComponent,
        FooterComponent
    },
    data() {
        return {
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
    mounted() {

    },
}
</script>