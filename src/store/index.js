import Vue from 'vue'
import Vuex from 'vuex'
// import { fetch } from '@/utils/fetch.js'

Vue.use(Vuex)

const state = {
    menu: false
}

const getters = {
    menu: state => {
        return state.menu
    }
}

const mutations = {
    set_menu(state, val) {
        state.menu = val
    }
}

const actions = {}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
