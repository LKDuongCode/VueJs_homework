export const homeworkSix = [
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/hw6/AdminView.vue'),
    children: [
      {
        path: 'manager-user',
        name: 'user',
        component: () => import('@/views/hw6/UserView.vue')
      },
      {
        path: 'manager-product',
        name: 'product',
        component: () => import('@/views/hw6/ProductView.vue')
      },
      {
        path: 'settings',
        name: 'settings',
        component: () => import('@/views/hw6/SettingView.vue')
      }
    ]
  }
]
