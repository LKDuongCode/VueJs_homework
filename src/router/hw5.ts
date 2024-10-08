export const homeworkFive = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/hw5/DashboardView.vue'),
    //bảo vệ route
    beforeEnter: (to: any, from: any, next: any) => {
      const isLogin = false
      if (!isLogin) {
        alert('bạn chưa đăng nhập.')
        next('/login')
      } else next()
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/hw5/LoginView.vue')
  }
]
