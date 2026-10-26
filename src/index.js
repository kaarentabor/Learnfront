import { createApp } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import App from './App.vue'
import ToDo from './pages/ToDo.vue'
import Modals from './pages/Modals.vue'
import './style.scss'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/todo' },
    { path: '/todo', name: 'ToDo', component: ToDo },
    { path: '/modals', name: 'Modals', component: Modals },
  ],
})

createApp(App).use(router).mount('#app')
