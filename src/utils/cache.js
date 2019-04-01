import Vue from 'vue'
import Cookies from 'js-cookie'

const TokenKey = 'vue-bolg-template-token' // Token键值
const cookieTime = 7 // cookie过期时间

const cache = {
    // token
    getToken: function () {
        return Cookies.get(TokenKey)
    },
    setToken: function (token) {
        return Cookies.set(TokenKey, token, { expires: cookieTime })
    },
    removeToken: function () {
        return Cookies.remove(TokenKey)
    },
    // cookie
    getCookie: function (name) {
        return Cookies.get(name)
    },
    setCookie: function (name, val) {
        return Cookies.set(name, val, { expires: cookieTime })
    },
    removeCookie: function (name) {
        return Cookies.remove(name)
    },
    // seesion
    getSession: function (name) {
        if (!name) return
        return window.sessionStorage.getItem(name)
    },
    setSession: function (name, content) {
        if (!name) return
        if (typeof content !== 'string') {
            content = JSON.stringify(content)
        }
        window.sessionStorage.setItem(name, content)
    },
    removeSession: function (name) {
        if (!name) return
        window.sessionStorage.removeItem(name)
    },
    getLocal: function (name) {
        if (!name) return
        return window.localStorage.getItem(name)
    },
    // local
    setLocal: function (name, content) {
        if (!name) return
        if (typeof content !== 'string') {
            content = JSON.stringify(content)
        }
        window.localStorage.setItem(name, content)
    },
    removeLocal: function (name) {
        if (!name) return
        window.localStorage.removeItem(name)
    }
}

Vue.prototype.$cache = cache

export default cache
