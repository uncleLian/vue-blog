import Vue from 'vue'
import Vuex from 'vuex'
import { getLogin, getUser } from '@/api'
import cache from '@/utils/cache'
import i18n from '@/language'

Vue.use(Vuex)

const state = {
    user: '',               // 用户信息
    logs: [],               // 错误日志
    language: 'zh',         // 语言
    theme: '#42B983'        // 主题颜色
}

const getters = {
}

const mutations = {
    loginOut(state) {
        state.user = ''
        cache.removeToken()
    },
    set_user(state, val) {
        state.user = val
    },
    set_role(state, val) {
        state.user.role = val
    },
    set_logs(state, val) {
        state.logs.push(val)
    },
    set_language(state, val) {
        i18n.locale = val
        state.language = val
        cache.setSession('language', val)
    },
    set_theme(state, val) {
        state.theme = val
    }
}

const actions = {
    // 获取登录数据
    async get_login_data({ commit }, params) {
        return new Promise((resolve, reject) => {
            getLogin(params).then(res => {
                // console.log('login', res)
                if (res && res.token) {
                    cache.setToken(res.token)
                    resolve(res)
                } else {
                    reject(new Error('nothing login data'))
                }
            })
            .catch(err => {
                reject(err)
            })
        })
    },
    // 获取用户数据
    async get_user_data({ commit }, token) {
        return new Promise((resolve, reject) => {
            getUser(token).then(res => {
                // console.log('user', res)
                if (res && res.code === 200 && res.data) {
                    commit('set_user', res.data)
                    resolve(res.data)
                } else {
                    reject(new Error('nothing user data'))
                }
            })
            .catch(err => {
                reject(err)
            })
        })
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
