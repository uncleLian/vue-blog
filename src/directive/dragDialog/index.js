import drag from './drag'

drag.install = function (Vue) {
     // 注册全局指令
    Vue.directive('drag', drag)
}
// 供局部注册指令使用
export default drag
