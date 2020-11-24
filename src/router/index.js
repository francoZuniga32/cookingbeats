import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Explorar from '../views/Explorar.vue'
import Perfil from '../views/Perfil.vue'
import AgregarInstrumental from '../views/AgregarInstrumental.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/explorar',
    name: 'Explorar',
    component: Explorar
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/perfil',
    name: 'perfil',
    component: Perfil
  },
  {
    path: '/perfil/agregarinstrumental',
    name: 'perfil',
    component: AgregarInstrumental
  }
]

const router = new VueRouter({
  routes
})

export default router
