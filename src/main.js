import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// css
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/css/reset.css'
import '@/assets/css/icon/iconfont.css'
import '@/assets/css/transition.css'
import '@/assets/css/global.css'
// js
import '@/permission'
import '@/errorLog'

// 自定义公共组件
import sticky from '@/components/sticky'
import loading from '@/components/loading'
import menuItem from '@/layout/menuItem'

// 自定义过滤
import filters from '@/filters'

// mock数据
import '@/mock'

// 第三方
import axios from 'axios'
import ElementUI from 'element-ui'
import i18n from '@/language'
import VueProgressBar from 'vue-progressbar'
import vueClipboard from 'vue-clipboard-pack'
import vueNumTo from 'vue-num-to'

Vue.config.productionTip = false

Vue.component('my-sticky', sticky)
Vue.component('my-loading', loading)
Vue.component('my-menu-item', menuItem)

Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

Vue.prototype.$http = axios
Vue.use(ElementUI, {
   i18n: (key, value) => i18n.t(key, value)
})
Vue.use(VueProgressBar, {
    color: '#29F',
    failedColor: 'red',
    thickness: '2px'
})
Vue.use(vueClipboard)
Vue.use(vueNumTo)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    i18n,
    template: '<App/>',
    components: { App }
})
