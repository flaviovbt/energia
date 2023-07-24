<template>
	<main class="login">
		<NavbarComponent ativo='6'/>

		<section class="imgFundo" >
			<div class="boxMarrom" v-if="isCadastro">
				<form class="register" @submit.prevent="checkRegister" >
					<h2 class="title">Cadastrar</h2>
					<input 
						type="nome" 
						placeholder="Nome"
						required='true'
						v-model="register_form.nome" />
					<input 
						type="email" 
						placeholder="Email"
						required="true"
						v-model="register_form.email" />
					<input 
						type="password" 
						placeholder="Senha" 
						required="true"
						v-model="register_form.password" />
					<input 
						type="password" 
						required="true"
						placeholder="Confirme sua senha" 
						v-model="cSenha" />
					<input 
						type="submit" 
						value="Crie sua conta" />
				</form>
				<div class="flex">
					<p>Já possui uma conta ? </p><p v-on:click="telaLogin()" class="verde"> Faça login aqui</p>
				</div>
			</div>

			<div class="boxMarrom" v-if="isLogin">
				<form class="login" @submit.prevent="login" >
					<h2 class="title">Entrar</h2>
					<input 
						type="email" 
						placeholder="Email"
						required="true"
						v-model="login_form.email" />
					<input 
						type="password" 
						placeholder="Senha" 
						required="true"
						v-model="login_form.password" />
					<input 
						type="submit" 
						value="Log in" />
				</form>
				<div class="flex">
					<p>Não possui uma conta ? </p><p v-on:click="telaCadastro()" class="verde"> Crie sua conta agora</p>
				</div>
			</div>
		</section>

		<FooterComponent/>
	</main>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import NavbarComponent from '@/components/NavbarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

export default {
	components: {
      NavbarComponent,
      FooterComponent
    },
	data ( ){
		return{
			isLogin: true,
			isCadastro: false, 
			cSenha: null
		}
	},
	setup () {
		const login_form = ref({});
		const register_form = ref({});
		const store = useStore();

		const login = () => {
			store.dispatch('login', login_form.value);
		}

		const register = () => {
			store.dispatch('register', register_form.value);
		}

		return {
			login_form,
			register_form,
			login,
			register
		}
	},
	methods:{
		telaCadastro(){
			this.isCadastro=true;
			this.isLogin=false;
		},

		telaLogin(){
			this.isLogin=true;
			this.isCadastro=false;
		},

		checkRegister(){
			if(this.cSenha == this.register_form.password){
				this.register();
				return;
			}

			alert("Senhas não coincidem")
		}
	}
}
</script>

<style scoped>

.boxMarrom{
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

.title{
	text-align: center;
	margin: 4vh 0;
}

.flex{
	display: flex;
}

.flex p {
	margin-right: 0.2vw;
}

.verde{
	color: #8FD694;
	cursor: pointer;
}

input {
	appearance: none;
	border: none;
	outline: none;
	background: none;
	border-radius: 0.5rem;

	display: block;
	width: 20vw;
	max-width: 400px;
	font-size: 1.5rem;
	margin-bottom: 2rem;
	padding: 0.5rem 0.5rem;
	font-size: 2vh;
	color: #FFF;
	background-color: #DEA05F;
}

input:-webkit-autofill,
input:-webkit-autofill:hover, 
input:-webkit-autofill:focus, 
input:-webkit-autofill:active{
    -webkit-box-shadow: 0 0 0 30px #DEA05F inset !important;
}

input:-webkit-autofill{
    -webkit-text-fill-color: white !important;
}

input::placeholder {
	color: inherit;
}

form input[type="submit"] {
	background-color: #77AD78;
	color: #FFF;
	font-weight: 700;
	cursor: pointer;
	text-transform: uppercase;
	width: 100%;
}
</style>