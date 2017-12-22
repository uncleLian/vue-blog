import Clipboard from 'clipboard'

if (!Clipboard) {
    throw new Error('you shold npm install `clipboard` --save at first ')
}

var vueClipboard = {
    install: function(Vue) {
        // 直接调用
        Vue.prototype.$copyText = copyText
        Vue.prototype.$cutText = cutText
        // 指令调用
        Vue.directive('clipboard', directiveClipboard)
    }
}

/*
 * @params
 * text:         复制文本
 *
 * @callback
 * success:      成功回调
 * error:        失败回调
 */

let copyText = (text) => {
    let el = document.createElement('button')
    return new Promise((resolve, reject) => {
        const clipboard = new Clipboard(el, {
            action: () => 'copy',
            text: () => text
        })
        clipboard.on('success', (e) => {
            resolve(e)
            clipboard.destroy()
        })
        clipboard.on('error', (e) => {
            reject(e)
            clipboard.destroy()
        })
        el.click()
    })
}

/*
 * @params
 * target: 剪切元素（只支持input 和 textarea）
 *
 * @callback
 * success:      成功回调
 * error:        失败回调
 */
let cutText = (target) => {
    let el = document.createElement('button')
    return new Promise((resolve, reject) => {
        const clipboard = new Clipboard(el, {
            action: () => 'cut',
            target: () => target
        })
        clipboard.on('success', (e) => {
            resolve(e)
            clipboard.destroy()
        })
        clipboard.on('error', (e) => {
            reject(e)
            clipboard.destroy()
        })
        el.click()
    })
}

/*
 * @driective
 * :copy     string        复制
 * :cut      string        剪切
 * :success  function      成功回调
 * :error    function      失败回调
 */
let directiveClipboard = {
    bind: function(el, binding, vnode) {
        let vm = vnode.context
        if (binding.arg === 'success') {
            el.v_clipboard_success = binding.value
        } else if (binding.arg === 'error') {
            el.v_clipboard_error = binding.value
        } else if (binding.arg === 'copy' || binding.arg === 'cut') {
            const clipboard = new Clipboard(el, {
                text: () => binding.value
            })
            clipboard.on('success', e => {
                if (binding.arg === 'cut') {
                    vm[binding.expression] = ''
                    e.action = 'cut'
                }
                const callback = el.v_clipboard_success
                callback && callback(e)
            })
            clipboard.on('error', e => {
                if (binding.arg === 'cut') {
                    e.action = 'cut'
                }
                const callback = el.v_clipboard_error
                callback && callback(e)
            })
            el.v_clipboard = clipboard
        }
    },
    update: function(el, binding) {
        if (binding.arg === 'success') {
            el.v_clipboard_success = binding.value
        } else if (binding.arg === 'error') {
            el.v_clipboard_error = binding.value
        } else if (binding.arg === 'copy' || binding.arg === 'cut') {
            el.v_clipboard.text = () => binding.value
        }
    },
    unbind: function(el, binding) {
        if (binding.arg === 'success') {
            delete el.v_clipboard_success
        } else if (binding.arg === 'error') {
            delete el.v_clipboard_error
        } else {
            el.v_clipboard.destroy()
            delete el.v_clipboard
        }
    }
}

export default vueClipboard
