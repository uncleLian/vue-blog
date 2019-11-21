import { Message } from 'element-ui'

/**
 *  只显示一条弹框，使用element-ui的message完成
 *  single默认值true，因为项目需求，默认只弹出一个，可以根据实际需要设置
 *  singleMessage基本用法和Message一样，但缺少close、closeAll等方法
 *  全局使用可以挂载到Vue.prototype.$singleMessage = Message
 *  也可以替换$message，但需要放到Vue.use(ElementUI)之后
 */

const singleMessage = function (options) {
    options = options || {}
    if (typeof options === 'string') {
        options = {
            message: options
        }
    }
    handleMessage(options)
}

const MessageType = ['success', 'warning', 'info', 'error']
MessageType.forEach(type => {
    singleMessage[type] = options => {
        if (typeof options === 'string') {
            options = {
                message: options
            }
        }
        options.type = type
        return handleMessage(options)
    }
})

const handleMessage = (options, single = true) => {
    if (single) {
        Message.closeAll() // 关闭之前所有Message
        Message(options)
    } else {
        Message(options)
    }
}

export default singleMessage
