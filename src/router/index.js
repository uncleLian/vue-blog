import Vue from 'vue'
import Router from 'vue-router'
// page
import index from '@/page/index/index'
import home from '@/page/index/children/home'
// componentsView
import breadcrumbView from '@/page/index/children/componentsView/breadcrumb_view'
import stickyView from '@/page/index/children/componentsView/sticky_view'

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
                name: '主页',
                path: 'home',
                component: home
            }
        ]
    },
    {
        name: '组件',
        path: '/index/component',
        redirect: '/index/component/breadcrumb',
        component: index,
        children: [
            {
                name: '面包屑',
                path: 'breadcrumb',
                component: breadcrumbView
            },
            {
                name: '图钉',
                path: 'sticky',
                component: stickyView
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
