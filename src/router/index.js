import Vue from 'vue'
import Router from 'vue-router'



Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'add',
    component: () => import('../components/Create')
  },
  {
    path: '/list',
    name: 'list',
    component: () => import('../components/List')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/Edit')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
