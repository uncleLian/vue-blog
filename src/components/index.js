import Vue from 'vue'
import view from '@/layout/view'

const components = {
    'app-view': view
}

// 注册全局组件
Object.keys(components).forEach(key => {
    Vue.component(key, components[key])
})
