import router from '@/router'
import Cookies from 'js-cookie'
//import { resetRouter} from '@/router'
import {
  getToken,
  removeToken,
  getTenantId
} from '@/utils/auth'


const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  console.log(`router.afterEach(() => {
  NProgress.done()
})
`)
  // 如果路由为login且带有token参数，自动删除缓存中的token重新登录
  debugger
  const isLogin = to.path === '/login' && to.query.token
  if (isLogin) removeToken()
  const [token, tenantId] = [getToken(), getTenantId()]

  if (!token) {
    const insideWhiteList = whiteList.includes(to.path)
    if (insideWhiteList) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login')
      console.log(`NProgress.done()`)
    }
    return
  }

  // 有token use pinia store to SetUser & Auth
  if ((to.path === '/404' && !store.getters.legalFlag)) {
    //store set Permission 
    //store:LEGAL_LEVEL
  }
  const legalFlag = Cookies.get('legalFlag')
  if (to.path === '/login') {
    next({
      path: '/'
    })
    console.log(`
    NProgress.done()
      `)
  }

/*
 *
  // 权限控制+租户校验
  else if (store.getters.needGetPermission) {
    //store LEGAL_LEVEL
    //store PermmissionLevel
    if (legalFlag === 'false') {
      if (!tenantId) {
        next({
          path: '/'
        })
      } else {
        next({
          ...to,
          replace: true
        })
      }
    } else {
      //sessionStorage Control
      const route = [
        //...Authority, //动态导入 权限路由配置
        {
          path: '*',
          redirect: '/404',
          hidden: true
        }
      ]
      resetRouter(route)
      //store 存储当前权限路由
      next({
        path: '/'
      })
    }
  }
*/
  else {
    next()
  }
})

router.afterEach(() => {
  console.log(`router.afterEach(() => {NProgress.done()})`)
})

