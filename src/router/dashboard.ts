export const dashboard = {
  path: '/dashboard',
  name: 'dashboard',
  component: () => import('@/views/hw8/NavBar.vue'),
  children: [
    {
      path: '',
      name: 'default',
      component: () => import('@/views/hw8/ProductView.vue')
    },
    {
      path: 'account',
      name: 'account',
      component: () => import('@/views/hw8/AccountView.vue')
    }
  ]
}
