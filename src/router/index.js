import { createRouter, createWebHistory } from 'vue-router'
import Setup from '../views/Setup.vue'
import Interview from '../views/Interview.vue'
import Results from '../views/Results.vue'

const routes = [
  {
    path: '/',
    name: 'setup',
    component: Setup
  },
  {
    path: '/interview',
    name: 'interview',
    component: Interview
  },
  {
    path: '/results',
    name: 'results',
    component: Results
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
