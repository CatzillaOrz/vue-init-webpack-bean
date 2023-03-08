import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import MapView from '@/views/map/Map'
import FormView from '@/views/form/index'
import ChannelView from '@/views/iChat/Channel'
import EcologyView from '@/views/ecology/index'

Vue.use(Router)

export const constantRouterMap = [
  {
    path: '',
    name: 'layout',
    component: Layout,
    redirect: 'map',
    children: [
      {
        path: 'map',
        component: MapView,
        name: 'mapIndex',
        meta: { title: 'MyApp', icon: 'index', noCache: true, },
      },
      {
        path: 'chat',
        component: ChannelView,
        name: 'chatting',
        meta: { title: 'chapRoom', icon: 'index', noCache: true, },
      },
      {
        path: 'ecology',
        component: EcologyView,
        name: 'ecolog',
        meta: { title: 'ecology', icon: 'index', noCache: true, },
      },
      {
        path: 'register',
        component: FormView,
        name: 'register',
        meta: { title: 'userRegistry', icon: 'index', noCache: true, },
      }
    ],

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
