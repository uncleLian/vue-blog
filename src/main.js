import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'

// 第三方
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css' // element-ui 默认颜色

import VueProgressBar from 'vue-progressbar' // 进度条
import vueSticky from 'vue-position-sticky' // 图钉
import vueBacktop from 'vue-backtop-pack' // 返回顶部
import vueNumTo from 'vue-num-to' // 动态数值
import vueClipboard from 'vue-clipboard-pack' // 剪切板

// 自定义
import '@/assets' // 字体、样式等资源
import '@/components' // 全局组件
import '@/directive' // 全局指令
import '@/filters' // 全局过滤
import '@/utils/permission' // 权限验证
import '@/utils/errorLog' // 错误捕捉
import '@/utils/cache' // 缓存
import i18n from '@/language' // 国际化

import '@/mock' // 模拟数据

Vue.config.productionTip = false

// 第三方
Vue.use(ElementUI, { size: 'small', i18n: (key, value) => i18n.t(key, value) })
Vue.use(VueProgressBar)
Vue.use(vueSticky)
Vue.use(vueBacktop)
Vue.use(vueNumTo)
Vue.use(vueClipboard)

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
