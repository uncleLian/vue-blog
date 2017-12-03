import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
// css
import '@/assets/css/reset.css'
import '@/assets/css/global.css'

// 第三方库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-green/index.css'
import VueProgressBar from 'vue-progressbar'

// 自定义组件
import header from '@/layout/header'
import menu from '@/layout/menu'
import page from '@/layout/page'
import breadcrumb from '@/components/breadcrumb'
import sticky from '@/components/sticky'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueProgressBar, {
    color: '#29F',
    failedColor: 'red',
    thickness: '2px'
})

Vue.component('my-header', header)
Vue.component('my-menu', menu)
Vue.component('my-page', page)
Vue.component('my-breadcrumb', breadcrumb)
Vue.component('my-sticky', sticky)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
