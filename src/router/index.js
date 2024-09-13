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
    path: '/singleproducts/:id',
    name: 'singleproducts',
    component: () => import('@/views/SinglePage.vue')
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/AdminView.vue'),
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/SignUp.vue'),
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
