import HomeView from '@/views/hw1+hw2/HomeView.vue'

export const homeworkOne = [
  {
    path: '/home',
    name: 'home',
    redirect: '/'
  },
  {
    path: '/',
    name: 'main-home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/hw1+hw2/AboutView.vue'),
    alias: ['/get-in-touch']
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('@/views/hw1+hw2/ContactView.vue')
  }
]
