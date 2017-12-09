<template>
    <span>
      {{displayValue}}
    </span>
</template>
<script>
/*
* @params
* startVal      开始的数值
* endVal        结束的数值
* duration      动画时长
* autoplay      自动运行
* prefix        数值的前缀
* suffix        数值的后缀
* separator     分隔符
* decimals      保留小数点的位数
* decimal       小数点的符号
* ease          是否平滑
* easeMethod    平滑的方法
*/
import { requestAnimationFrame, cancelAnimationFrame } from '@/utils/RAFrame.js'
export default {
    props: {
        startVal: {
            type: Number,
            default: 0
        },
        endVal: {
            type: Number,
            default: () => {
                let date = new Date()
                return date.getFullYear()
            }
        },
        duration: {
            type: Number,
            default: 3000
        },
        autoplay: {
            type: Boolean,
            default: true
        },
        prefix: {
            type: String,
            default: ''
        },
        suffix: {
            type: String,
            default: ''
        },
        separator: {
            type: String,
            default: ','
        },
        decimals: {
            type: Number,
            default: 0,
            validator(value) {
                return value >= 0
            }
        },
        decimal: {
            type: String,
            default: '.'
        },
        ease: {
            type: Boolean,
            default: true
        },
        easeMethod: {
            type: Function,
            default (t, b, c, d) {
                return c * (-Math.pow(2, -10 * t / d) + 1) * 1024 / 1023 + b
            }
        }
    },
    data() {
        return {
            localStartVal: this.startVal,
            localDuration: this.duration,
            displayValue: this.formatNumber(this.startVal),
            printVal: null,
            paused: false,
            startTime: null,
            remaining: null,
            rAF: null
        }
    },
    computed: {
        countDown() {
            return this.startVal > this.endVal
        }
    },
    watch: {
        startVal() {
            if (this.autoplay) {
                this.start()
            }
        },
        endVal() {
            if (this.autoplay) {
                this.start()
            }
        }
    },
    methods: {
        // 计算
        count(timestamp) {
            // 初始时间为null，则存起来
            if (!this.startTime) {
                this.startTime = timestamp
            }
            // 当前进度
            let progress = timestamp - this.startTime
            // 剩余进度
            this.remaining = (this.localDuration - progress) > 0 ? (this.localDuration - progress) : 0

            if (this.ease) {
                if (this.countDown) {
                    this.printVal = this.localStartVal - this.easeMethod(progress, 0, this.localStartVal - this.endVal, this.localDuration)
                } else {
                    this.printVal = this.easeMethod(progress, this.localStartVal, this.endVal - this.localStartVal, this.localDuration)
                }
            } else {
                if (this.countDown) {
                    this.printVal = this.localStartVal - ((this.localStartVal - this.endVal) * (progress / this.localDuration))
                } else {
                    this.printVal = this.localStartVal + (this.endVal - this.localStartVal) * (progress / this.localDuration)
                }
            }
            // 处理溢出问题
            if (this.countDown) {
                this.printVal = this.printVal < this.endVal ? this.endVal : this.printVal
            } else {
                this.printVal = this.printVal > this.endVal ? this.endVal : this.printVal
            }

            this.displayValue = this.formatNumber(this.printVal)

            // 当前进度时间小于设置时长？继续执行 ：结束
            if (progress < this.localDuration) {
                this.rAF = requestAnimationFrame(this.count)
            } else {
                this.$emit('callback')
            }
        },
        // 开始
        start() {
            this.localStartVal = this.startVal
            this.startTime = null
            this.localDuration = this.duration
            this.paused = false
            this.rAF = requestAnimationFrame(this.count)
        },
        // 暂停
        pause() {
            cancelAnimationFrame(this.rAF)
        },
        // 恢复
        resume() {
            if (this.remaining > 0) {
                this.startTime = null
                this.localStartVal = this.printVal
                this.localDuration = this.remaining
                requestAnimationFrame(this.count)
            }
        },
        // 重置
        reset() {
            this.startTime = null
            cancelAnimationFrame(this.rAF)
            this.displayValue = this.formatNumber(this.startVal)
        },
        // 恢复和暂停
        pauseResume() {
            if (this.paused) {
                this.resume()
                this.paused = false
            } else {
                this.pause()
                this.paused = true
            }
        },
        isNumber(val) {
            return !isNaN(parseFloat(val))
        },
        // 格式化
        formatNumber(num) {
            // 保留多少位小数
            num = num.toFixed(this.decimals)
            // 变为字符串
            num += ''
            // 分割小数点
            const x = num.split('.')
            // 小数点前面的数
            let x1 = x[0]
            // 是否有小数点？自定义小数点符号 + 小数点后面的数 ： 空
            const x2 = x.length > 1 ? this.decimal + x[1] : ''

            const rgx = /(\d+)(\d{3})/
            // 自定义分隔符 && 非数字
            if (this.separator && !this.isNumber(this.separator)) {
                while (rgx.test(x1)) {
                    // $1 - $9 存放最近匹配的结果
                    x1 = x1.replace(rgx, '$1' + this.separator + '$2')
                }
            }
            // 拼接最后结果：前缀 + 小数点前面的数 + 小数点后面的数 + 后缀
            return this.prefix + x1 + x2 + this.suffix
        }
    },
    mounted() {
        if (this.autoplay) {
            this.start()
        }
        this.$emit('mountedCallback')
    },
    beforeDestroy() {
        cancelAnimationFrame(this.rAF)
    }
}
</script>