export const notfound =
  // not found
  {
    path: '/:catchAll(.*)',
    name: 'notfound',
    component: () => import('@/views/hw5/NotFound.vue')
  }
