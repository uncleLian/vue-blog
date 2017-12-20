import Vue from 'vue'
import Router from 'vue-router'

// layout
// view组件是用在多层嵌套但依然想渲染在主页面的page视图下的场景
import view from '@/layout/view'
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

/*
* @params
* icon: ''             菜单图标（可以用element-ui 的icon 或者 项目已经配置好的awesome icons）
* open: false          是否展开菜单
*/

export const routes = [
    {
        path: '',
        redirect: '/index'
    },
    {
        name: '首页',
        path: '/index',
        icon: 'el-icon-menu',
        redirect: '/index/home',
        component: index,
        children: [
            {
                name: '主页',
                path: 'home',
                icon: 'el-icon-fa-home',
                component: home
            },
            {
                name: '组件',
                path: 'components',
                icon: 'el-icon-menu',
                open: true,
                redirect: '/index/components/breadcrumb',
                component: view,
                children: [
                    {
                        name: '面包屑',
                        path: 'breadcrumb',
                        icon: 'el-icon-arrow-right',
                        component: breadcrumbView
                    },
                    {
                        name: '图钉',
                        path: 'sticky',
                        icon: 'el-icon-fa-thumb-tack',
                        component: stickyView
                    },
                    {
                        name: '返回顶部',
                        path: 'backTop',
                        icon: 'el-icon-arrow-up',
                        component: backTopView
                    },
                    {

                        name: '动态数值',
                        path: 'countToView',
                        icon: 'el-icon-fa-calculator',
                        component: countToView
                    }
                ]
            },
            {
                name: '集成',
                path: 'collection',
                icon: 'el-icon-fa-cube',
                redirect: '/index/collection/progressbar',
                component: view,
                children: [
                    {

                        name: '进度条',
                        path: 'progressbar',
                        icon: 'el-icon-fa-minus',
                        component: progressbar
                    },
                    {
                        name: '富文本编辑器',
                        path: 'editor',
                        icon: 'el-icon-fa-pencil',
                        component: editor
                    },
                    {
                        name: '列表拖拽',
                        path: 'draggable',
                        icon: 'el-icon-fa-arrows',
                        component: draggable
                    },
                    {
                        name: '剪贴板',
                        path: 'clipboard',
                        icon: 'el-icon-fa-clipboard',
                        component: clipboard
                    }
                ]
            },
            {
                name: '综合实例',
                path: 'demo',
                icon: 'el-icon-fa-file-text',
                redirect: '/index/demo/dragTable',
                component: view,
                children: [
                    {
                        name: '拖拽表格',
                        path: 'dragTable',
                        component: dragTable
                    }
                ]
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
