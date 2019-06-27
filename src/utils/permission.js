import router from '@/router'
import store from '@/store'
import cache from '@/utils/cache'

// 登录验证，权限验证
router.beforeEach((to, from, next) => {
    // 是否需要登录
    if (cache.getToken()) {
        if (to.path === '/login') {
            next('/index')
            // next()
        } else {
            // 是否已有用户信息
            let userInfo = store.state.login.user
            if (userInfo) {
                assessPermission(userInfo.roles, to.meta.roles, next)
            } else {
                store.dispatch('login/getUserData').then(res => {
                    store.dispatch('routes/generateRoutes').then(addRoutes => {
                        router.addRoutes(addRoutes)
                        next({ ...to, replace: true })
                    })
                }).catch(err => {
                    console.log(err)
                    // 可根据错误信息，做相应需求，这里默认token值失效
                    window.alert('登录已失效，请重新登录')
                    store.dispatch('login/logout').then(() => {
                        next({ path: '/login', query: { redirect: to.fullPath } })
                    })
                })
            }
        }
    } else {
        if (to.path === '/login') {
            next()
        } else {
            next({ path: '/login', query: { redirect: to.fullPath } })
        }
    }
})

// 验证权限（页面级）
function assessPermission(userRole, pageRole, next) {
    let pass = false
    // 页面无需权限 || 用户是管理员
    if (!pageRole || userRole.indexOf('admin') > -1) pass = true
    // 符合页面的其中一种权限（支持String和Array写法）
    if (typeof pageRole === 'string') {
        if (userRole.indexOf(pageRole) > -1) pass = true
    } else if (Array.isArray(pageRole)) {
        if (pageRole.some(role => userRole.indexOf(role) > -1)) pass = true
    }
    pass ? next() : next('/page401')
}
