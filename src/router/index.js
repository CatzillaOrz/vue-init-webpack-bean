import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout.vue'
const _import = require('./_import_' + process.env.NODE_ENV)
import Login from '@/views/auth/Login.vue'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '/',
    name: 'layout',
    component: Layout,
    redirect: '/canvas',
    children: [
      {
        path: '/map',
        component: _import('map/Map'),
        name: 'mapIndex',
        meta: { title: 'MyApp', icon: 'index', noCache: true, },
      },
      {
        path: '/chat',
        component: _import('iChat/Channel'),
        name: 'chatting',
        meta: { title: 'chapRoom', icon: 'index', noCache: true, },
      },
      {
        path: '/ecology',
        component: _import('ecology/index'),
        name: 'ecolog',
        meta: { title: 'ecology', icon: 'index', noCache: true, },
      },
      {
        path: '/register',
        component: _import('form/index'),
        name: 'register',
        meta: { title: 'userRegistry', icon: 'index', noCache: true, },
      },
      {
        path: '/canvas',
        component: _import('canvas/index'),
        name: 'canvasZoo',
        meta: { title: 'canvasZoo', icon: 'index', noCache: true, },
      }
    ],

  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  }

]

const createRouter = (router = []) =>
  new Router({
    scrollBehavior: () => ({
      y: 0
    }),
    routes: constantRouterMap.concat(router)
  })
const router = createRouter()
export function resetRouter(route) {
  router.matcher = createRouter(route).matcher
}
export default router
