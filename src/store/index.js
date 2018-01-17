import Vue from 'vue'
import Vuex from 'vuex'
import { getLogin, getUser } from '@/api'
import { setToken, removeToken } from '@/utils/token.js'
import cache from '@/utils/cache.js'

Vue.use(Vuex)

const state = {
    user: '',
    logs: [],
    language: 'zh'
}

const getters = {
    user: state => {
        return state.user
    },
    logs: state => {
        return state.logs
    },
    language: state => {
        return state.language
    }
}

const mutations = {
    set_user(state, val) {
        state.user = val
    },
    loginOut(state) {
        state.user = ''
        removeToken()
    },
    set_logs(state, val) {
        state.logs.push(val)
    },
    set_language(state, val) {
        state.language = val
        cache.setSession('language', val)
    }
}

const actions = {
    // 获取登录数据
    async get_login_data({ commit }, params) {
        return new Promise((resolve, reject) => {
            getLogin(params).then(res => {
                // console.log('token', res)
                if (res && res.token) {
                    setToken(res.token)
                    resolve()
                } else {
                    reject(new Error('nothing data'))
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
                if (res) {
                    commit('set_user', res)
                    resolve()
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
