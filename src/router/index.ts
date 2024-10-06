import { createRouter, createWebHistory } from 'vue-router'

import { dashboard } from './dashboard'
import { home } from './home'
import { notfound } from './notfound'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    home,
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/hw2/ContactView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/hw4/LoginView.vue')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('@/views/hw3/RegisterView.vue')
    },
    dashboard,
    notfound
  ]
})

export default router
