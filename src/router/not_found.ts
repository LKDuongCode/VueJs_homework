import NotFoundView from '@/views/hw4/NotFoundView.vue'

export const notFound = {
  path: '/:pathMatch(.*)*',
  name: 'not-found',
  component: NotFoundView
}
