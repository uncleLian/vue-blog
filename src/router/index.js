import Vue from 'vue'
import Router from 'vue-router'
// 一级路由
import index from '@/page/index/index'
// home
import home from '@/page/index/children/home'
// componentsView
import breadcrumbView from '@/page/index/children/componentsView/breadcrumb_view'
import stickyView from '@/page/index/children/componentsView/sticky_view'
import backTopView from '@/page/index/children/componentsView/backTop_view'
import countToView from '@/page/index/children/componentsView/countTo_view'
// collection
import progressbar from '@/page/index/children/collection/progressbar'
import editor from '@/page/index/children/collection/editor'
import draggable from '@/page/index/children/collection/draggable'
import clipboard from '@/page/index/children/collection/clipboard'
// demo
import dragTable from '@/page/index/children/demo/dragTable'

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
                icon: 'el-icon-fa-home',
                name: '主页',
                path: 'home',
                component: home
            }
        ]
    },
    {
        icon: 'el-icon-menu',
        name: '组件',
        path: '/index/components',
        redirect: '/index/components/breadcrumb',
        component: index,
        children: [
            {
                icon: 'el-icon-arrow-right',
                name: '面包屑',
                path: 'breadcrumb',
                component: breadcrumbView
            },
            {
                icon: 'el-icon-fa-thumb-tack',
                name: '图钉',
                path: 'sticky',
                component: stickyView
            },
            {
                icon: 'el-icon-arrow-up',
                name: '返回顶部',
                path: 'backTop',
                component: backTopView
            },
            {
                icon: 'el-icon-fa-calculator',
                name: '动态数值',
                path: 'countToView',
                component: countToView
            }
        ]
    },
    {
        icon: 'el-icon-menu',
        name: '集成',
        path: '/index/collection',
        redirect: '/index/collection/progressbar',
        component: index,
        children: [
            {
                icon: 'el-icon-arrow-up',
                name: '进度条',
                path: 'progressbar',
                component: progressbar
            },
            {
                icon: 'el-icon-arrow-up',
                name: '富文本编辑器',
                path: 'editor',
                component: editor
            },
            {
                icon: 'el-icon-arrow-up',
                name: '列表拖拽',
                path: 'draggable',
                component: draggable
            },
            {
                icon: 'el-icon-arrow-up',
                name: '剪贴板',
                path: 'clipboard',
                component: clipboard
            }
        ]
    },
    {
        icon: 'el-icon-menu',
        name: '示例',
        path: '/index/demo',
        redirect: '/index/demo/dragTable',
        component: index,
        children: [
            {
                icon: '',
                name: '拖拽表格',
                path: 'dragTable',
                component: dragTable
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
