import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import LoginPage from '../pages/LoginPage.vue'
import SignupPage from '../pages/SignupPage.vue'
import Dashboard from '../pages/Dashboard.vue'
import TicketManager from '../pages/TicketManager.vue'

function isAuthenticated() {
  return !!localStorage.getItem('ticketapp_session')
}

const routes = [
  { path: '/', component: LandingPage },
  { path: '/auth/login', component: LoginPage },
  { path: '/auth/signup', component: SignupPage },
  {
    path: '/dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) return next('/auth/login')
      next()
    }
  },
  {
    path: '/tickets',
    component: TicketManager,
    beforeEnter: (to, from, next) => {
      if (!isAuthenticated()) return next('/auth/login')
      next()
    }
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})
