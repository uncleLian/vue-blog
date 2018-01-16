import Vue from 'vue'
import Router from 'vue-router'

// layout
// view组件是用在多层嵌套但依然想渲染在主页面的page视图下的场景
const view = () => import('@/layout/view')
// 一级路由
const login = () => import('@/page/login/login')
const index = () => import('@/page/index/index')
const page404 = () => import('@/page/other/page404')
// home
const home = () => import('@/page/index/children/home/home')
// componentsView
const stickyView = () => import('@/page/index/children/componentsView/sticky_view')
const breadcrumbView = () => import('@/page/index/children/componentsView/breadcrumb_view')
const backTopView = () => import('@/page/index/children/componentsView/backTop_view')
const countToView = () => import('@/page/index/children/componentsView/countTo_view')
const loadingView = () => import('@/page/index/children/componentsView/loading_view')
// collection
const progressbar = () => import('@/page/index/children/collection/progressbar')
const editor = () => import('@/page/index/children/collection/editor')
const markdown = () => import('@/page/index/children/collection/markdown')
const draggable = () => import('@/page/index/children/collection/draggable')
const clipboard = () => import('@/page/index/children/collection/clipboard')
const exportExcel = () => import('@/page/index/children/collection/excel/exportExcel')
const exportSelected = () => import('@/page/index/children/collection/excel/exportSelected')
const importExcel = () => import('@/page/index/children/collection/excel/importExcel')
const pie = () => import('@/page/index/children/collection/charts/pie')
const radar = () => import('@/page/index/children/collection/charts/radar')
const scatter = () => import('@/page/index/children/collection/charts/scatter')
// example
const dragTable = () => import('@/page/index/children/example/dragTable')
const upload = () => import('@/page/index/children/example/upload/upload')
// more
const view_404 = () => import('@/page/index/children/more/view_404')
const errorLog = () => import('@/page/index/children/more/errorLog/errorLog')

Vue.use(Router)

/*
* @params
* icon: ''             菜单图标（可以用element-ui 的icon 或者 项目已经配置好的awesome icons）
* open: false          是否展开菜单
* @meta
* login: false         是否需要登录
* keep: false          是否需要缓存
*/

export const routes = [
    {
        path: '',
        redirect: '/index'
    },
    {
        name: 'index',
        path: '/index',
        icon: 'el-icon-menu',
        redirect: '/index/home',
        meta: { login: true },
        component: index,
        children: [
            {
                name: 'home',
                path: 'home',
                icon: 'el-icon-fa-home',
                component: home
            },
            {
                name: 'components',
                path: 'components',
                icon: 'el-icon-menu',
                // open: true,
                redirect: '/index/components/sticky',
                component: view,
                children: [
                    {
                        name: 'sticky',
                        path: 'sticky',
                        icon: 'el-icon-fa-thumb-tack',
                        component: stickyView
                    },
                    {
                        name: 'breadcrumb',
                        path: 'breadcrumb',
                        icon: 'el-icon-arrow-right',
                        component: breadcrumbView
                    },
                    {
                        name: 'backTop',
                        path: 'backTop',
                        icon: 'el-icon-arrow-up',
                        component: backTopView
                    },
                    {

                        name: 'countTo',
                        path: 'countTo',
                        icon: 'el-icon-fa-calculator',
                        component: countToView
                    },
                    {

                        name: 'loading',
                        path: 'loading',
                        icon: 'el-icon-fa-spinner',
                        component: loadingView
                    }
                ]
            },
            {
                name: 'collection',
                path: 'collection',
                icon: 'el-icon-fa-cube',
                // open: true,
                redirect: '/index/collection/progressbar',
                component: view,
                children: [
                    {

                        name: 'progressbar',
                        path: 'progressbar',
                        icon: 'el-icon-fa-minus',
                        component: progressbar
                    },
                    {
                        name: 'editor',
                        path: 'editor',
                        icon: 'el-icon-fa-pencil',
                        component: editor
                    },
                    {
                        name: 'markdown',
                        path: 'markdown',
                        icon: 'el-icon-edit-outline',
                        component: markdown
                    },
                    {
                        name: 'draggable',
                        path: 'draggable',
                        icon: 'el-icon-fa-arrows',
                        component: draggable
                    },
                    {
                        name: 'clipboard',
                        path: 'clipboard',
                        icon: 'el-icon-fa-clipboard',
                        component: clipboard
                    },
                    {
                        name: 'Excel',
                        path: 'Excel',
                        icon: 'el-icon-fa-file-excel-o',
                        redirect: '/index/collection/Excel/exportExcel',
                        component: view,
                        children: [
                            {
                                name: 'exportExcel',
                                path: 'exportExcel',
                                component: exportExcel
                            },
                            {
                                name: 'exportSelected',
                                path: 'exportSelected',
                                component: exportSelected
                            },
                            {
                                name: 'importExcel',
                                path: 'importExcel',
                                component: importExcel
                            }
                        ]
                    },
                    {
                        name: 'charts',
                        path: 'charts',
                        icon: 'el-icon-fa-bar-chart',
                        redirect: '/index/collection/charts/pie',
                        component: view,
                        children: [
                            {
                                name: 'pie',
                                path: 'pie',
                                component: pie
                            },
                            {
                                name: 'radar',
                                path: 'radar',
                                component: radar
                            },
                            {
                                name: 'scatter',
                                path: 'scatter',
                                component: scatter
                            }
                        ]
                    }
                ]
            },
            {
                name: 'example',
                path: 'example',
                icon: 'el-icon-document',
                redirect: '/index/example/dragTable',
                component: view,
                children: [
                    {
                        name: 'dragTable',
                        path: 'dragTable',
                        component: dragTable
                    },
                    {
                        name: 'upload',
                        path: 'upload',
                        component: upload
                    }
                ]
            },
            {
                name: 'more',
                path: 'more',
                icon: 'el-icon-caret-bottom',
                redirect: '/index/more/page404',
                component: view,
                children: [
                    {
                        name: 'page404',
                        path: 'page404',
                        icon: 'el-icon-fa-exclamation-triangle',
                        meta: { keep: true },
                        component: view_404
                    },
                    {
                        name: 'errorLog',
                        path: 'errorLog',
                        icon: 'el-icon-fa-bug',
                        meta: { keep: true },
                        component: errorLog
                    }
                ]
            }
        ]
    },
    {
        name: 'login',
        path: '/login',
        component: login
    },
    {
        path: '*',
        component: page404
    }
]

export default new Router({
    // mode: 'history',
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            to.meta.position = savedPosition
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})
