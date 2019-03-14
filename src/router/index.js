import Vue from 'vue'
import Router from 'vue-router'
// 视图组件
const view = () => import('@/layout/view')
// index
const index = () => import('@/pages/index/index')
// home
const home = () => import('@/pages/index/children/home/home')
// guide
const guide = () => import('@/pages/index/children/guide/guide')
// permission
const permission = () => import('@/pages/index/children/permission/permission')
// icons
const icons = () => import('@/pages/index/children/icons/icons')
// components-demo
const loading = () => import('@/pages/index/children/components-demo/loading')
const sticky = () => import('@/pages/index/children/components-demo/sticky')
const backTop = () => import('@/pages/index/children/components-demo/backTop')
const numTo = () => import('@/pages/index/children/components-demo/numTo')
const progressbar = () => import('@/pages/index/children/components-demo/progressbar')
const clipboard = () => import('@/pages/index/children/components-demo/clipboard')
const editor = () => import('@/pages/index/children/components-demo/editor')
const markdown = () => import('@/pages/index/children/components-demo/markdown')
// excel
const exportExcel = () => import('@/pages/index/children/excel/exportExcel')
const exportSelected = () => import('@/pages/index/children/excel/exportSelected')
const importExcel = () => import('@/pages/index/children/excel/importExcel')
// zip
const exportZip = () => import('@/pages/index/children/zip/exportZip')
// errorLog
const errorLog = () => import('@/pages/index/children/errorLog/errorLog')
// i18n-demo
const i18n = () => import('@/pages/index/children/i18n-demo')
// login
const login = () => import('@/pages/login/login')
// other
const page401 = () => import('@/pages/other/page401')
const page404 = () => import('@/pages/other/page404')

Vue.use(Router)

/* sideRoutes config
* @meta
* icon: ''                      菜单图标（支持svg-icon、el-icon）
* title: ''                     菜单标题
* login: false                  是否需要登录
* role: 'admin' || ['admin']    是否需要权限
* keep: false                   是否需要缓存
* hidden: false                 是否显示在菜单
* open: false                   是否展开菜单（有子菜单前提下）
* redirectIndex: 0              重定向到第index位子菜单（有子菜单前提下）
*/

// 要在侧边栏渲染的路由
export const sideRoutes = setRedirect([
    {
        name: 'home',
        path: 'home',
        component: home,
        meta: {
            icon: 'dashboard'
        }
    },
    {
        name: 'documents',
        path: 'http://liansixin.win/vue-blog-book/',
        meta: {
            icon: 'documentation'
        }
    },
    {
        name: 'guide',
        path: 'guide',
        component: guide,
        meta: {
            icon: 'paper-plane'
        }
    },
    {
        name: 'permission',
        path: 'permission',
        component: permission,
        meta: {
            icon: 'lock',
            role: 'admin'
        }
    },
    {
        name: 'icons',
        path: 'icons',
        component: icons,
        meta: {
            icon: 'icons'
        }
    },
    {
        name: 'components',
        path: 'components',
        component: view,
        meta: {
            icon: 'component'
        },
        children: [
            {

                name: 'loading',
                path: 'loading',
                component: loading,
                meta: {
                    icon: 'spinner'
                }
            },
            {
                name: 'sticky',
                path: 'sticky',
                component: sticky,
                meta: {
                    icon: 'thumbtack'
                }
            },
            {
                name: 'backTop',
                path: 'backTop',
                component: backTop,
                meta: {
                    icon: 'backtop'
                }
            },
            {

                name: 'numTo',
                path: 'numTo',
                component: numTo,
                meta: {
                    icon: 'number'
                }
            },
            {

                name: 'progressbar',
                path: 'progressbar',
                component: progressbar,
                meta: {
                    icon: 'progressbar'
                }
            },
            {

                name: 'clipboard',
                path: 'clipboard',
                component: clipboard,
                meta: {
                    icon: 'clipboard'
                }
            },
            {

                name: 'editor',
                path: 'editor',
                component: editor,
                meta: {
                    icon: 'editor'
                }
            },
            {

                name: 'markdown',
                path: 'markdown',
                component: markdown,
                meta: {
                    icon: 'markdown'
                }
            }
        ]
    },
    {
        name: 'excel',
        path: 'excel',
        component: view,
        meta: {
            icon: 'excel'
        },
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
        name: 'zip',
        path: 'zip',
        component: view,
        meta: {
            icon: 'zip'
        },
        children: [
            {
                name: 'exportZip',
                path: 'exportZip',
                component: exportZip
            }
        ]
    },
    {
        name: 'errorPage',
        path: 'errorPage',
        component: view,
        meta: {
            icon: '404'
        },
        children: [
            {
                name: '401',
                path: '401',
                component: page401
            },
            {
                name: '404',
                path: '404',
                component: page404
            }
        ]
    },
    {
        name: 'errorLog',
        path: 'errorLog',
        component: errorLog,
        meta: {
            icon: 'bug'
        }
    },
    {
        name: 'i18n',
        path: 'i18n',
        component: i18n,
        meta: {
            icon: 'global'
        }
    }
])

export default new Router({
    // mode: 'history',
    routes: [
        {
            path: '',
            redirect: '/index'
        },
        {
            name: 'index',
            path: '/index',
            component: index,
            redirect: '/index/home',
            meta: {
                login: true
            },
            children: sideRoutes
        },
        {
            name: 'login',
            path: '/login',
            component: login
        },
        {
            name: 'page401',
            path: '/page401',
            component: page401
        },
        {
            name: 'page404',
            path: '/page404',
            component: page404
        },
        {
            path: '*',
            redirect: '/page404'
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

// 自动设置路由的重定向（有子路由前提下）
function setRedirect(routes, redirect = '/index') {
    routes.forEach(route => {
        if (route.children && route.children.length > 0) {
            if (!route.redirect) {
                let redirectIndex = route.meta && route.meta.redirectIndex ? route.meta.redirectIndex : 0
                let redirectRoute = route.children[redirectIndex]
                let redirectName = redirectRoute && redirectRoute.name ? redirectRoute.name : route.children[0].name
                route.redirect = `${redirect}/${route.name}/${redirectName}`
            }
            let index = route.redirect.lastIndexOf('/')
            let fatherDir = route.redirect.substring(0, index)
            route.children = setRedirect(route.children, fatherDir)
        }
    })
    return routes
}
