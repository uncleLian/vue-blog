import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// css
import 'element-ui/lib/theme-chalk/index.css'
import 'quill/dist/quill.snow.css'
import '@/assets/css/reset.css'
import '@/assets/css/icon.less'
import '@/assets/css/global.css'

// 第三方
import axios from 'axios'
import ElementUI from 'element-ui'
import VueProgressBar from 'vue-progressbar'
import VueQuillEditor from 'vue-quill-editor'
import draggable from 'vuedraggable'

// 自定义组件
import header from '@/layout/header'
import menu from '@/layout/menu'
import menuItem from '@/layout/menuItem'
import page from '@/layout/page'
import breadcrumb from '@/components/breadcrumb'
import sticky from '@/components/sticky'
import backTop from '@/components/backTop'
import countTo from '@/components/countTo'

// 自定义方法
import vueClipboard from '@/utils/clipboard.js'

Vue.config.productionTip = false

// 第三方
Vue.prototype.$http = axios
Vue.use(ElementUI)
Vue.use(VueProgressBar, {
    color: '#29F',
    failedColor: 'red',
    thickness: '2px'
})
Vue.use(VueQuillEditor)
Vue.component('my-draggable', draggable)

// 自定义组件
Vue.component('my-header', header)
Vue.component('my-menu', menu)
Vue.component('my-menu-item', menuItem)
Vue.component('my-page', page)
Vue.component('my-breadcrumb', breadcrumb)
Vue.component('my-sticky', sticky)
Vue.component('my-backTop', backTop)
Vue.component('my-countTo', countTo)

// 自定义指令
Vue.use(vueClipboard)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
