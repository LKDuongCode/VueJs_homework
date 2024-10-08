export const homeworkSeven = [
  {
    path: '/posts',
    name: 'post',
    component: () => import('@/views/hw7/PostListView.vue')
  },
  {
    path: '/posts-notfound',
    name: 'posts-notfound',
    component: () => import('@/views/hw7/NotFoundPostVeiw.vue')
  },
  {
    path: '/posts/:id',
    name: 'posts-detail',
    component: () => import('@/views/hw7/PostDetailView.vue')
  }
]
