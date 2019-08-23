import Vue from 'vue'
import Router from 'vue-router'

// 视图组件
const PageView = () => import('@/layout/PageView')

Vue.use(Router)

/* Routes Config
* @meta
* icon: ''                      菜单图标（支持svg-icon、el-icon）
* title: ''                     菜单标题
* login: false                  是否需要登录
* ss: 'admin' || ['admin']    是否需要权限
* keep: false                   是否需要缓存（需要name才能生效）
* hidden: false                 是否显示在菜单
* open: false                   是否展开菜单（有子菜单前提下）
* redirectIndex: 0              重定向到第index位子菜单（有子菜单前提下）
* affix: false                  是否常驻在tagView组件上（外链无效）
*/

// 异步路由
export const asyncRoutes = [
    {
        name: 'dashboard',
        path: 'dashboard',
        component: () => import('@/pages/index/children/dashboard'),
        meta: {
            icon: 'dashboard',
            affix: true
        }
    },
    {
        name: 'documents',
        path: 'https://unclelian.github.io/vue-blog-docs/',
        meta: {
            icon: 'documentation'
        }
    },
    {
        name: 'guide',
        path: 'guide',
        component: () => import('@/pages/index/children/guide/guide'),
        meta: {
            icon: 'guide'
        }
    },
    {
        name: 'permission',
        path: 'permission',
        component: () => import('@/pages/index/children/permission/permission'),
        meta: {
            icon: 'lock',
            roles: 'admin'
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
        component: PageView,
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
                name: 'dragDemo',
                path: 'dragDemo',
                component: PageView,
                meta: {
                    icon: 'move'
                },
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
            }
        ]
    },
    {
        name: 'excel',
        path: 'excel',
        component: PageView,
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
        component: PageView,
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
        component: PageView,
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

// 本地路由
export const localRoutes = [
    {
        path: '',
        redirect: '/login'
    },
    {
        path: '/login',
        component: () => import('@/pages/login/login')
    },
    {
        path: '/page401',
        component: () => import('@/pages/other/page401')
    },
    {
        path: '/page404',
        component: () => import('@/pages/other/page404')
    }
]

const createRouter = () => new Router({
    // mode: 'history',
    routes: localRoutes,
    scrollBehavior: () => ({ y: 0 })
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher // reset router
}

export default router
