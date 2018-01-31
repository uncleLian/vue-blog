import Vue from 'vue'
import Router from 'vue-router'

// layout
// view组件是用在多层嵌套但依然想渲染在主页面的page视图下的场景
const view = () => import('@/layout/view')
// 一级路由
const index = () => import('@/page/index/index')
const login = () => import('@/page/login/login')
const page401 = () => import('@/page/other/page401')
const page404 = () => import('@/page/other/page404')
// home
const home = () => import('@/page/index/children/home/home')
const documents = () => import('@/page/index/children/documents/documents')
// componentsView
const stickyView = () => import('@/page/index/children/componentsView/sticky_view')
const breadcrumbView = () => import('@/page/index/children/componentsView/breadcrumb_view')
const backTopView = () => import('@/page/index/children/componentsView/backTop_view')
const countToView = () => import('@/page/index/children/componentsView/countTo_view')
const loadingView = () => import('@/page/index/children/componentsView/loading_view')
// collections
const progressbar = () => import('@/page/index/children/collections/progressbar')
const clipboard = () => import('@/page/index/children/collections/clipboard')
const editor = () => import('@/page/index/children/collections/editor')
const markdown = () => import('@/page/index/children/collections/markdown')
// example
const dragList = () => import('@/page/index/children/example/dragList')
const dragTable = () => import('@/page/index/children/example/dragTable')
const upload = () => import('@/page/index/children/example/upload/upload')
// charts
const pie = () => import('@/page/index/children/charts/pie')
const radar = () => import('@/page/index/children/charts/radar')
const scatter = () => import('@/page/index/children/charts/scatter')
// Excel
const exportExcel = () => import('@/page/index/children/excel/exportExcel')
const exportSelected = () => import('@/page/index/children/excel/exportSelected')
const importExcel = () => import('@/page/index/children/excel/importExcel')
// errorPage
const view_401 = () => import('@/page/index/children/errorPage/view_401')
const view_404 = () => import('@/page/index/children/errorPage/view_404')
// more
const errorLog = () => import('@/page/index/children/more/errorLog/errorLog')
const icons = () => import('@/page/index/children/more/icons')
// i18nView
const i18nView = () => import('@/page/index/children/i18n/i18n_view')
// permission
const permission = () => import('@/page/index/children/permission/permission')
Vue.use(Router)

/*
* @params
* icon: ''                      菜单图标（可以用element-ui的icon & iconfont）
* open: false                   是否展开菜单
* @meta
* login: false                  是否需要登录
* role: 'admin' || ['admin']    是否需要权限
* keep: false                   是否需要缓存
*/

export const routes = [
    {
        path: '',
        redirect: '/index'
    },
    {
        name: 'index',
        path: '/index',
        redirect: '/index/home',
        meta: { login: true },
        component: index,
        children: [
            {
                name: 'home',
                path: 'home',
                icon: 'el-icon-my-home',
                component: home
            },
            {
                name: 'documents',
                path: 'documents',
                icon: 'el-icon-my-book',
                component: documents
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
                        icon: 'el-icon-my-thumbtack',
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
                        icon: 'el-icon-my-number',
                        component: countToView
                    },
                    {

                        name: 'loading',
                        path: 'loading',
                        icon: 'el-icon-my-spinner',
                        component: loadingView
                    }
                ]
            },
            {
                name: 'collections',
                path: 'collections',
                icon: 'el-icon-my-cube',
                redirect: '/index/collections/progressbar',
                component: view,
                children: [
                    {

                        name: 'progressbar',
                        path: 'progressbar',
                        icon: 'el-icon-my-progressbar',
                        component: progressbar
                    },
                    {
                        name: 'clipboard',
                        path: 'clipboard',
                        icon: 'el-icon-my-clipboard',
                        component: clipboard
                    },
                    {
                        name: 'editor',
                        path: 'editor',
                        icon: 'el-icon-my-pencil',
                        component: editor
                    },
                    {
                        name: 'markdown',
                        path: 'markdown',
                        icon: 'el-icon-my-markdown',
                        component: markdown
                    }
                ]
            },
            {
                name: 'example',
                path: 'example',
                icon: 'el-icon-my-ravelry',
                redirect: '/index/example/dragList',
                component: view,
                children: [
                    {
                        name: 'dragList',
                        path: 'dragList',
                        component: dragList
                    },
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
                name: 'charts',
                path: 'charts',
                icon: 'el-icon-my-chart',
                redirect: '/index/charts/pie',
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
            },
            {
                name: 'Excel',
                path: 'Excel',
                icon: 'el-icon-my-excel',
                redirect: '/index/Excel/exportExcel',
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
                name: 'errorPage',
                path: 'errorPage',
                icon: 'el-icon-my-404',
                redirect: '/index/errorPage/page401',
                component: view,
                children: [
                    {
                        name: 'page401',
                        path: 'page401',
                        icon: 'el-icon-my-401',
                        meta: { keep: true },
                        component: view_401
                    },
                    {
                        name: 'page404',
                        path: 'page404',
                        icon: 'el-icon-my-404',
                        meta: { keep: true },
                        component: view_404
                    }
                ]
            },
            {
                name: 'more',
                path: 'more',
                icon: 'el-icon-my-more',
                redirect: '/index/more/page404',
                component: view,
                children: [
                    {
                        name: 'errorLog',
                        path: 'errorLog',
                        icon: 'el-icon-my-bug',
                        meta: { keep: true },
                        component: errorLog
                    },
                    {
                        name: 'icons',
                        path: 'icons',
                        icon: 'el-icon-my-icons',
                        meta: { keep: true },
                        component: icons
                    }
                ]
            },
            {
                name: 'permission',
                path: 'permission',
                icon: 'el-icon-my-lock',
                meta: { role: ['admin'] },
                component: permission
            },
            {
                name: 'i18nView',
                path: 'i18nView',
                icon: 'el-icon-my-i18n',
                component: i18nView
            }
        ]
    },
    {
        name: 'login',
        path: '/login',
        component: login
    },
    {
        name: '401',
        path: '/401',
        meta: { login: true },
        component: page401
    },
    {
        name: '404',
        path: '/404',
        meta: { login: true },
        component: page404
    },
    {
        path: '*',
        redirect: '/404'
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
