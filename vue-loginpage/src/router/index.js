import DashboardPage from '@/views/DashboardPage.vue'
import LoginPage from '@/views/LoginPage.vue'
import SingupPage from '@/views/SingupPage.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path : '/' , component : LoginPage } ,
    { path : '/singup' , component : SingupPage } ,
    { path : '/dashboard' , component : DashboardPage} ,
  ],
})

export default router
