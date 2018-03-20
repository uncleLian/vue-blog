import Vue from 'vue'
import store from '@/store'

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
