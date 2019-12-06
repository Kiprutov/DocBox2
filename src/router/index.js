import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Dashboard from '@/components/Dashboard'
import firebase from 'firebase'

Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        requiresGuest: true
      }
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      meta: {
        requiresAuth: true
      }
    }
  ]
})

// nav guards
router.beforeEach((to, from, next) => {
  // check for requiredAuth guard
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // check if not logged in
    if (!firebase.auth().currentUser) {
      // go to login
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // proceed to route
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresGuest)) {
    // check if logged in
    if (firebase.auth().currentUser) {
      // remain at dashboard
      next({
        path: '/dashboard',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      // proceed to route
      next()
    }
  } else {
    // proceed to route
    next()
  }
})

export default router
