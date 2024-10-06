import HomeView from '@/views/hw1/HomeView.vue'

export const home = {
  path: '/',
  name: 'home',
  component: HomeView,
  children: [
    //hw9
    {
      path: '/list_user',
      name: 'list_user',
      component: () => import('@/views/hw9/ListUsersView.vue')
    },
    {
      path: '/user_detail/:id',
      name: 'user_detail',
      component: () => import('@/views/hw9/UserDetailView.vue')
    },
    //hw10
    {
      path: '/employees',
      name: 'employees',
      component: () => import('@/views/hw10/EmployeesView.vue')
    }
  ]
}
