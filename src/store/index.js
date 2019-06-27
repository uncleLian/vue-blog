import Vue from 'vue'
import Vuex from 'vuex'
import cache from '@/utils/cache'
import i18n from '@/language'
import variables from '@/assets/css/index.styl'
import { getList } from '@/api/list'

Vue.use(Vuex)

const state = {
    logs: [],
    sidebarStatus: cache.getCookie('sidebarStatus') !== 'false',
    language: cache.getCookie('language') || 'zh',
    theme: variables.appColor
}
const getters = {
}
const mutations = {
    SET_LOGS(state, error) {
        state.logs.unshift(error)
    },
    SET_SIDEBAR_STATUS(state) {
        let status = !state.sidebarStatus
        state.sidebarStatus = status
        cache.setCookie('sidebarStatus', status)
    },
    SET_LANGUAGE(state, lang) {
        state.language = lang
        i18n.locale = lang
        cache.setCookie('language', lang)
    },
    SET_THEME(state, color) {
        state.theme = color
    }
}
const actions = {
    GET_LIST_DATA(state) {
        return getList()
    }
}

// 自动引入和注册modules下的文件
const modulesFiles = require.context('./modules', false, /\.js$/)
const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules
})
