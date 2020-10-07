import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
const App = () => import('../App.vue')
const Test = () => import('../views/TestForm.vue')

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes:[
      {
          path: '',
          component: App,
          children:[
              {
                  path: '/',
                  redirect: 'Home'
              },
              {
                path: 'Home',
                component: Test
              },
              
            ]
      }   
  ]
  })

export default router
