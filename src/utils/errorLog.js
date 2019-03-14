import Vue from 'vue'
import store from '@/store'

// you can set only in production env show the error-log
if (process.env.NODE_ENV === 'production') {
    Vue.config.errorHandler = function (error, vm, info) {
        store.commit('SET_LOGS', {
            error,
            vm,
            info,
            url: window.location.href,
            time: new Date()
        })
    }
}
