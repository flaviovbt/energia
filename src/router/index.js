import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import JogoView from '../views/JogoView.vue'
import RankingView from '@/views/RankingView.vue'
import SobreView from '../views/SobreView.vue'
import { auth } from '../firebase'
import InserirPerguntasView from '@/views/InserirPerguntasView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/jogo',
    name: 'Jogo',
    component: JogoView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: RankingView,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/inserirperguntas',
    name: 'inserirperguntas',
    component: InserirPerguntasView,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/sobre',
    name: 'Sobre',
    component: SobreView,
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if ((to.path === '/login' ) && auth.currentUser) {
    next('/')
    return;
  }

  if (to.matched.some(record => record.meta.requiresAuth) && !auth.currentUser) {
    next('/login')
    return;
  }

  if((from.path === '/login' ) && auth.currentUser){
    next('/')
    return;
  }

  next();
})

export default router