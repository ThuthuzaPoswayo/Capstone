import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/LoginView.vue';
import SignUp from '@/views/SignUp.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
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
