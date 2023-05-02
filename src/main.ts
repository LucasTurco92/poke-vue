import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'

import Home from './views/Home.vue'
import Pokedex from './views/Pokedex.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/pokedex', component: Pokedex },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
