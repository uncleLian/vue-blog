import Vue from 'vue'
import permission from './permission'
import dragDialog from './dragDialog'

const directive = [
    permission,
    dragDialog
]

// 注册全局指令
directive.forEach(item => {
    Vue.use(item)
})
