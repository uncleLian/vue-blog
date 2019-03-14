import Vue from 'vue'
import App from '@/App'
import router from '@/router'
import store from '@/store'
// 第三方
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css' // element-ui 默认颜色
import '@/assets/css/theme-chalk/index.css' // 自定义主题颜色
import VueProgressBar from 'vue-progressbar' // 进度条
import vueSticky from 'vue-position-sticky' // 图钉
import vueBacktop from 'vue-backtop-pack' // 返回顶部
import vueNumTo from 'vue-num-to' // 动态数值
import vueClipboard from 'vue-clipboard-pack' // 剪切板

// 自定义
import 'normalize.css' // 重置样式
import '@/assets/css/global.styl' // 全局样式
import '@/assets/iconfont/iconfont.css' // iconfont
import '@/assets/icons' // svg icon
import '@/utils/permission' // 权限验证
import '@/utils/errorLog' // 全局错误捕捉
import components from '@/components'
import filters from '@/filters'
import i18n from '@/language' // 国际化
import cache from '@/utils/cache' // 缓存

// mock数据
import '@/mock'

Vue.config.productionTip = false

// 第三方
Vue.use(ElementUI, {
    size: 'small',
    i18n: (key, value) => i18n.t(key, value)
})
Vue.use(VueProgressBar)
Vue.use(vueSticky)
Vue.use(vueBacktop)
Vue.use(vueNumTo)
Vue.use(vueClipboard)

// 注册全局组件
Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
})
// 注册全局过滤
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})
// 挂在到全局
Vue.prototype.$filter = filters
Vue.prototype.$cache = cache

new Vue({
    router,
    store,
    i18n,
    render: h => h(App)
}).$mount('#app')
