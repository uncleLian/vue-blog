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
import myHeader from '@/layout/header'
import myMenu from '@/layout/menu'
import myPage from '@/layout/page'

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueProgressBar, {
    color: 'rgb(143, 255, 199)',
    failedColor: 'red',
    height: '2px'
})

Vue.component('my-header', myHeader)
Vue.component('my-menu', myMenu)
Vue.component('my-page', myPage)

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})
