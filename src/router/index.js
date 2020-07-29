import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const routers = [
  {
    path: '/',
    name: 'hello',
    component: () => import('@/components/HelloWorld')
  },
  {
    path: '/echarts',
    component: () => import('@/view/echarts/meta'),
    children: [
      {
        path: '',
        redirect: '/echarts/base',
      },
      {
        path: 'base',
        component: () => import('@/view/echarts/base'),
        name: 'echartBase',
        meta: {}
      },
      {
        path: 'high',
        component: () => import('@/view/echarts/high'),
        name: 'echartHigh',
        meta: {}
      }
    ]
  },
  {
    path: '/ali',
    component: () => import('@/view/ali/base'),
    children: [
      {
        path: '',
        redirect: '/ali/base',
      },
      {
        path: 'base',
        component: () => import('@/view/ali/base'),
        name: 'aliBase',
        meta: {}
      }
    ]
  },
  {
    path: '/three',
    component: () => import('@/view/three/base'),
    children: [
      {
        path: '',
        redirect: '/three/base',
      },
      {
        path: 'base',
        component: () => import('@/view/three/base'),
        name: 'threeBase',
        meta: {}
      }
    ]
  }
]
const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: routers
})
const router = createRouter()
router.beforeEach((to, from, next) => {
  document.title = to.meta.title || '3D'
  next()
})
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router