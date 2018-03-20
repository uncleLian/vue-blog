import Vue from 'vue'
import Vuex from 'vuex'
import i18n from '@/language'
import cache from '@/utils/cache'
import { getLogin, getUser } from '@/api'

Vue.use(Vuex)

const state = {
    language: 'zh',         // 语言
    theme: '#42B983',       // 主题颜色
    logs: [],               // 错误日志
    user: ''                // 用户信息
}

const getters = {
}

const mutations = {
    set_language(state, lang) {
        i18n.locale = lang
        state.language = lang
        cache.setSession('language', lang)
    },
    set_theme(state, color) {
        state.theme = color
    },
    set_logs(state, error) {
        state.logs.push(error)
    },
    loginOut(state) {
        state.user = ''
        cache.removeToken()
    },
    set_user(state, val) {
        state.user = val
    },
    set_role(state, role) {
        state.user.role = role
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
