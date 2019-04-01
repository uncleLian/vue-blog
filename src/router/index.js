import Vue from 'vue'
import Router from 'vue-router'
// 视图组件
const view = () => import('@/layout/view')

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
export let sideRoutes = [
    {
        name: 'home',
        path: 'home',
        component: () => import('@/pages/index/children/home/home'),
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
        component: () => import('@/pages/index/children/guide/guide'),
        meta: {
            icon: 'paper-plane'
        }
    },
    {
        name: 'permission',
        path: 'permission',
        component: () => import('@/pages/index/children/permission/permission'),
        meta: {
            icon: 'lock',
            role: 'admin'
        }
    },
    {
        name: 'icons',
        path: 'icons',
        component: () => import('@/pages/index/children/icons/icons'),
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
                component: () => import('@/pages/index/children/components-demo/loading'),
                meta: {
                    icon: 'spinner'
                }
            },
            {
                name: 'sticky',
                path: 'sticky',
                component: () => import('@/pages/index/children/components-demo/sticky'),
                meta: {
                    icon: 'thumbtack'
                }
            },
            {
                name: 'backTop',
                path: 'backTop',
                component: () => import('@/pages/index/children/components-demo/backTop'),
                meta: {
                    icon: 'backtop'
                }
            },
            {

                name: 'numTo',
                path: 'numTo',
                component: () => import('@/pages/index/children/components-demo/numTo'),
                meta: {
                    icon: 'number'
                }
            },
            {

                name: 'progressbar',
                path: 'progressbar',
                component: () => import('@/pages/index/children/components-demo/progressbar'),
                meta: {
                    icon: 'progressbar'
                }
            },
            {

                name: 'clipboard',
                path: 'clipboard',
                component: () => import('@/pages/index/children/components-demo/clipboard'),
                meta: {
                    icon: 'clipboard'
                }
            },
            {

                name: 'editor',
                path: 'editor',
                component: () => import('@/pages/index/children/components-demo/editor'),
                meta: {
                    icon: 'editor'
                }
            },
            {

                name: 'markdown',
                path: 'markdown',
                component: () => import('@/pages/index/children/components-demo/markdown'),
                meta: {
                    icon: 'markdown'
                }
            },
            {
                name: 'dragDemo',
                path: 'drag',
                component: view,
                children: [
                    {

                        name: 'dragDialog',
                        path: 'dragDialog',
                        component: () => import('@/pages/index/children/components-demo/dragDialog')
                    },
                    {

                        name: 'dragTable',
                        path: 'dragTable',
                        component: () => import('@/pages/index/children/components-demo/dragTable')
                    },
                    {

                        name: 'dragList',
                        path: 'dragList',
                        component: () => import('@/pages/index/children/components-demo/dragList')
                    }
                ]
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
                component: () => import('@/pages/index/children/excel/exportExcel')
            },
            {
                name: 'exportSelected',
                path: 'exportSelected',
                component: () => import('@/pages/index/children/excel/exportSelected')
            },
            {
                name: 'importExcel',
                path: 'importExcel',
                component: () => import('@/pages/index/children/excel/importExcel')
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
                component: () => import('@/pages/index/children/zip/exportZip')
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
                component: () => import('@/pages/other/page401')
            },
            {
                name: '404',
                path: '404',
                component: () => import('@/pages/other/page404')
            }
        ]
    },
    {
        name: 'errorLog',
        path: 'errorLog',
        component: () => import('@/pages/index/children/errorLog/errorLog'),
        meta: {
            icon: 'bug'
        }
    },
    {
        name: 'i18n',
        path: 'i18n',
        component: () => import('@/pages/index/children/i18n-demo'),
        meta: {
            icon: 'global'
        }
    }
]

const routes = setRedirect([
    {
        path: '',
        redirect: '/index'
    },
    {
        name: 'index',
        path: '/index',
        component: () => import('@/pages/index/index'),
        meta: {
            login: true
        },
        children: sideRoutes
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('@/pages/login/login')
    },
    {
        name: 'page401',
        path: '/page401',
        component: () => import('@/pages/other/page401')
    },
    {
        name: 'page404',
        path: '/page404',
        component: () => import('@/pages/other/page404')
    },
    {
        path: '*',
        redirect: '/page404'
    }
])

export default new Router({
    // mode: 'history',
    routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

// 自动设置路由的重定向（有子路由前提下）
function setRedirect(routes, redirect = '') {
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
