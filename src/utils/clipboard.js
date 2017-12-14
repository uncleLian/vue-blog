import Vue from 'vue'
import Clipboard from 'clipboard'

export default function handleClipboard({event, text, action, target}) {
    let options
    if (action === 'cut') {
        options = {
            action: () => action,
            target: () => target
        }
    } else {
        options = {
            text: () => text
        }
    }
    const clipboard = new Clipboard(event.target, options)
    clipboard.on('success', (e) => {
        let message = '复制成功'
        if (action === 'cut') {
            message = '剪切成功'
        }
        Vue.prototype.$message({
            message: message,
            type: 'success',
            duration: 1500
        })
        clipboard.destroy()
    })
    clipboard.on('error', (e) => {
        Vue.prototype.$message.error('操作失败')
        clipboard.destroy()
    })
    clipboard.onClick(event)
}
