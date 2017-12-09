/* eslint-disable */

// requestAnimationFrame、cancelAnimationFrame 兼容方法

let lastTime = 0
const vendors = ['webkit', 'moz', 'ms', 'o']

let requestAnimationFrame = window.requestAnimationFrame
let cancelAnimationFrame = window.cancelAnimationFrame
for (let x = 0; x < vendors.length; ++x) {
    if (requestAnimationFrame && cancelAnimationFrame) {
        break
    } else {
        requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame']
        cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] || window[vendors[x] + 'CancelRequestAnimationFrame']
    }
}
if (!requestAnimationFrame) {
    requestAnimationFrame = (callback) => {
        const currTime = new Date().getTime()
        const timeToCall = Math.max(0, 16 - (currTime - lastTime))
        const id = window.setTimeout(() => {
            callback(currTime + timeToCall)
        }, timeToCall)
        lastTime = currTime + timeToCall
        return id
    }
}
if (!cancelAnimationFrame) {
    cancelAnimationFrame = (id) => {
        clearTimeout(id)
    }
}
export { requestAnimationFrame, cancelAnimationFrame }
