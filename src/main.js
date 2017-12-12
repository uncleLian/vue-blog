import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 第三方库
import axios from 'axios'
import VueProgressBar from 'vue-progressbar'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.snow.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// css
import '@/assets/css/reset.css'
import '@/assets/css/icon.less'
import '@/assets/css/global.css'

// 布局
import header from '@/layout/header'
import menu from '@/layout/menu'
import page from '@/layout/page'

// 自定义组件
import breadcrumb from '@/components/breadcrumb'
import sticky from '@/components/sticky'
import backTop from '@/components/backTop'
import countTo from '@/components/countTo'

Vue.config.productionTip = false

Vue.prototype.$http = axios
Vue.use(VueProgressBar, {
    color: '#29F',
    failedColor: 'red',
    thickness: '2px'
})
Vue.use(VueQuillEditor)
Vue.use(ElementUI)

Vue.component('my-header', header)
Vue.component('my-menu', menu)
Vue.component('my-page', page)
Vue.component('my-breadcrumb', breadcrumb)
Vue.component('my-sticky', sticky)
Vue.component('my-backTop', backTop)
Vue.component('my-countTo', countTo)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
