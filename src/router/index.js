import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/LoginView.vue';
import SignUp from '@/views/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },

  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },

  {
    path: '/services',
    name: 'services',
    component: () => import('@/views/ServicesView.vue')
  },

    {
    path: '/reach-us',
    name: 'reach-us',
    component: () => import('@/views/ContactView.vue')
  },
    {
    path: '/reserve',
    name: 'reserve',
    component: () => import('@/views/ReserveView.vue')
  },
  
  {
    path: '/singleproducts',
    name: 'singleproducts',
    component: () => import('@/views/SinglePage.vue')
  },

  {
    path: '/signup',
    name: 'Signup',
    component: SignUp,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
