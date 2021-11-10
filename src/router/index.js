import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/Index'
import Error404 from '../components/404'
import Registration from '../components/Registration'
Vue.use(VueRouter)

const routes = [
  {
    path: '/registration',
    name: 'registration',
    component: Registration
  },
  {
    path: '/',
    alias: '/index',
    name: 'Index',
    component: Index
  },
  {
    path: '/*',
    name: '404',
    component: Error404
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
