import permission, { checkPermission } from './permission'

export default {
    install: function (Vue) {
        Vue.directive('permission', permission) // 注册全局指令
        Vue.prototype.$checkPermission = checkPermission // 挂在到全局，供动态渲染dom调用
    }
}
