import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/pages/Login'
import Cadastro from '@/pages/Cadastro'
import Timeline from '@/pages/Timeline'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },

  {
    path: '/cadastro',
    name: 'Cadastro',
    component: Cadastro
  },

  {
    path: '/timeline',
    name: 'Timeline',
    component: Timeline
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
