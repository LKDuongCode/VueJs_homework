import { homeworkOne } from './hw1_hw2'
import { homeworkFive } from './hw5'
import { homeworkSix } from './hw6'
import { notFound } from './not_found'

export const routes = [
  ...homeworkOne,
  //hw3
  {
    path: '/search',
    name: 'search',
    component: () => import('@/views/hw3/SearchView.vue')
  },
  //hw4
  notFound,
  ...homeworkFive,
  ...homeworkSix
]
