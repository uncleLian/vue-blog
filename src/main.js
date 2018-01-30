import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

import cache from '@/utils/cache'

// css
import 'element-ui/lib/theme-chalk/index.css'
import 'quill/dist/quill.snow.css'
import '@/assets/css/reset.css'
import '@/assets/css/icon/iconfont.css'
import '@/assets/css/transition.css'
import '@/assets/css/global.css'

// mock数据
import '@/mock'

// 第三方
import axios from 'axios'
import ElementUI from 'element-ui'
import i18n from '@/language'
import VueProgressBar from 'vue-progressbar'
import VueQuillEditor from 'vue-quill-editor'
import draggable from 'vuedraggable'
import echarts from 'echarts'
import vueClipboard from 'vue-clipboard-pack'

// 自定义公共组件
import breadcrumb from '@/components/breadcrumb'
import sticky from '@/components/sticky'
import backTop from '@/components/backTop'
import countTo from '@/components/countTo'
import loading from '@/components/loading'
import menuItem from '@/layout/menuItem'

// 自定义过滤
import filters from '@/filters'

Vue.config.productionTip = false

// 第三方
Vue.prototype.$http = axios
Vue.use(ElementUI, {
   i18n: (key, value) => i18n.t(key, value)
})
Vue.use(VueProgressBar, {
    color: '#29F',
    failedColor: 'red',
    thickness: '2px'
})
Vue.use(VueQuillEditor)
Vue.component('my-draggable', draggable)
Vue.prototype.$echarts = echarts
Vue.use(vueClipboard)

// 自定义组件
Vue.component('my-breadcrumb', breadcrumb)
Vue.component('my-sticky', sticky)
Vue.component('my-backTop', backTop)
Vue.component('my-countTo', countTo)
Vue.component('my-loading', loading)
Vue.component('my-menu-item', menuItem)

// 自定义过滤
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

// 全局路由登录验证
router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.login)) {
        if (cache.getToken()) {
            if (to.path === '/login') {
                next('/')
            } else {
                if (store.getters.user) {
                    next()
                } else {
                    store.dispatch('get_user_data').then(() => {
                        next()
                    })
                    .catch(() => {
                        // 可根据错误信息，做相应需求，这里默认token值失效
                        window.alert('登录已失效，请重新登录')
                        next({
                            path: '/login',
                            query: { redirect: to.fullPath }
                        })
                    })
                }
            }
        } else {
            next({
                path: '/login',
                query: { redirect: to.fullPath }
            })
        }
    } else {
        next()
    }
})

// 全局错误处理
// you can set only in production env show the error-log
if (process.env.NODE_ENV === 'production') {
    Vue.config.errorHandler = function (error, vm, info) {
        store.commit('set_logs', {
            error,
            vm,
            info,
            url: window.location.href,
            time: new Date()
        })
    }
}

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    template: '<App/>',
    components: { App }
})
