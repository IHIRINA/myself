import { createRouter, createWebHistory } from 'vue-router'
import Login from "@/views/login/login.vue"
import Admin from "@/views/admin/admin.vue"
import Register from '@/views/login/register.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
    },
    {
      path: '/',
      name: 'Register',
      component: Register,
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})

export default router
