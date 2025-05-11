import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cats from '../views/Cats.vue'
import Forms from '../views/Forms.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/cats',
      name: 'cats',
      component: Cats,
    },
    {
      path: '/forms',
      name: 'forms',
      component: Forms,
    },
  ],
})

export default router
