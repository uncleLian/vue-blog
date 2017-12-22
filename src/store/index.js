import Vue from 'vue'
import Vuex from 'vuex'
import fetch from '@/utils/fetch.js'

Vue.use(Vuex)

const state = {

}

const getters = {

}

const mutations = {

}

const actions = {
    get_list_data() {
        let res = fetch('/list', 'GET')
        return res
    }
}
export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
})
