import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EstudianteView from '@/views/EstudianteView.vue'
import ContadorView from '@/views/ContadorView.vue'
import PokemonView from '@/views/PokemonView.vue'
import ProductoView from '@/views/ProductoView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
   {
    path: '/estudiante/:cedula',
    name: 'estudianteView',
    component: EstudianteView
  },
   {
    path: '/pokemon',
    name: 'pokemonView',
    component: PokemonView
  },
    {
    path: '/producto',
    name: 'productoView',
    component: ProductoView
  },

  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/contador/numeros',
    name: 'contadorView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/ContadorView.vue')
  },
   {
    path: '/producto',
    name: 'productoView',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/ProductoView.vue')
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
