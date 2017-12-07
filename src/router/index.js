import Vue from 'vue'
import Router from 'vue-router'
// page
import index from '@/page/index/index'
import home from '@/page/index/children/home'
// componentsView
import breadcrumbView from '@/page/index/children/componentsView/breadcrumb_view'
import stickyView from '@/page/index/children/componentsView/sticky_view'
import backTopView from '@/page/index/children/componentsView/backTop_view'

Vue.use(Router)

export const routes = [
    {
        path: '',
        redirect: '/index'
    },
    {
        name: '首页',
        path: '/index',
        redirect: '/index/home',
        component: index,
        children: [
            {
                icon: 'el-icon-fa-home el-icon-fa-lg',
                name: '主页',
                path: 'home',
                component: home
            }
        ]
    },
    {
        icon: 'el-icon-menu',
        name: '组件',
        path: '/index/component',
        redirect: '/index/component/breadcrumb',
        component: index,
        children: [
            {
                icon: 'el-icon-arrow-right',
                name: '面包屑',
                path: 'breadcrumb',
                component: breadcrumbView
            },
            {
                icon: 'el-icon-fa-thumb-tack el-icon-fa-lg',
                name: '图钉',
                path: 'sticky',
                component: stickyView
            },
            {
                icon: 'el-icon-arrow-up',
                name: '返回顶部',
                path: 'backTop',
                component: backTopView
            }
        ]
    }
]
export default new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            to.meta.position = savedPosition
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: routes
})
