import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../Login.vue'
import Register from '../views/RegisterView.vue'
import Edit from '../views/EditView.vue'
import Cart from '../views/CartView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  { path: '/loginwithtoken', 
    name: 'loginwithtoken', 
    component: Login 
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
