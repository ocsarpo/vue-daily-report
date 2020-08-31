import Vue from 'vue'
import VueRouter from 'vue-router'

// import Intro from '@/components/Intro'
// import Day from '@/components/Day'
// import Calendar from '@/components/Calendar'
// import Setting from '@/components/Setting'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'intro',
    component: () => import('../views/Intro.vue')
  },
  {
    path: '/day/:date',
    name: 'day',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Day.vue')
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('../views/Calendar.vue')
  },
  {
    path: '/settings',
    name: 'settings',
    component: () => import('../views/Setting.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
