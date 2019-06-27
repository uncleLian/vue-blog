import Vue from 'vue'
import PageView from '@/layout/PageView'

const components = {
    'app-pageView': PageView
}

// 注册全局组件
Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
})
