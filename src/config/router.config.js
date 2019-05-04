// eslint-disable-next-line
import { UserLayout, BasicLayout, RouteView, BlankLayout, PageView } from '@/layouts'

export const asyncRouterMap = [

  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '首页' },
    redirect: '/home',
    children: [
      // 贷款审批
      {
        path: '/home',
        redirect: '/home',
        component: PageView,
        meta: { title: '首页', icon: 'table' },
        children: [
          {
            path: '/home',
            name: 'home',
            component: () => import('@/views/home'),
            meta: { title: '首页', showLoginCont: true, keepAlive: true }
          },
          {
            path: '/step-one',
            name: 'stepOne',
            component: () => import('@/views/stepOne'),
            meta: { title: '企业实名认证', keepAlive: true }
          },
          {
            path: '/step-two',
            name: 'stepTwo',
            component: () => import('@/views/stepTwo'),
            meta: { title: '证件上传', keepAlive: true }
          },
          {
            path: '/step-three',
            name: 'stepThree',
            component: () => import('@/views/stepThree'),
            meta: { title: '确认贷款信息', keepAlive: true }
          },
          {
            path: '/done',
            name: 'done',
            component: () => import('@/views/done'),
            meta: { title: '提交信息成功', keepAlive: true }
          },
          {
            path: '/stas',
            name: 'stas',
            component: () => import('@/views/statistics'),
            meta: { title: '数据统计', keepAlive: true }
          },
          {
            path: '/search',
            name: 'search',
            component: () => import('@/views/search'),
            meta: { title: '搜到贷款', showSearchList: true, keepAlive: true }
          },
          {
            path: '/collect',
            name: 'collect',
            component: () => import('@/views/collect'),
            meta: { title: '综合排序', showSearchList: true, keepAlive: true }
          },
          {
            path: '/apply',
            name: 'apply',
            component: () => import('@/views/apply'),
            meta: { title: '', keepAlive: true }
          },
          {
            path: '/myaccount',
            name: 'myaccount',
            component: () => import('@/views/myaccount'),
            meta: { title: '', keepAlive: true }
          },
          {
            path: '/applicationForm',
            name: 'applicationForm',
            component: () => import('@/views/applicationForm'),
            meta: { title: '', keepAlive: true }
          }
        ]
      }
    ]
  },
  {
    path: '*', redirect: '/404', hidden: true
  }
]

/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [

  {
    path: '/404',
    component: () => import(/* webpackChunkName: "fail" */ '@/views/404')
  }

]
