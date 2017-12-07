<template>
    <div :class="classes" :style="styles" @click="back">
        <slot>
            <div :class="innerClasses">
                <i class="el-icon-arrow-up"></i>
            </div>
        </slot>
    </div>
</template>
<script>
/*
* @params
* height    页面滚动高度达到该值时才显示BackTop组件
* bottom    组件距离底部的距离
* right     组件距离右部的距离
* duration  滚动动画持续时间，单位：毫秒
*/
const prefixCls = 'my-backTop'
export default {
    props: {
        height: {
            type: Number,
            default: 400
        },
        bottom: {
            type: Number,
            default: 30
        },
        right: {
            type: Number,
            default: 30
        },
        duration: {
            type: Number,
            default: 1000
        }
    },
    data() {
        return {
            backTop: false
        }
    },
    computed: {
        // my-backTop my-backTop-show 类名
        classes () {
            return [`${prefixCls}`, {[`${prefixCls}-show`]: this.backTop}]
        },
        // my-backTop 样式
        styles() {
            return {
                bottom: `${this.bottom}px`,
                right: `${this.right}px`
            }
        },
        // my-backTop-inner 类名
        innerClasses () {
            return `${prefixCls}-inner`
        }
    },
    methods: {
        // 滚动方法
        scrollTop(from = 0, to = 0, duration = 500) {
            // 浏览器兼容
            if (!window.requestAnimationFrame) {
                window.requestAnimationFrame = (
                    window.webkitRequestAnimationFrame ||
                    window.mozRequestAnimationFrame ||
                    window.msRequestAnimationFrame ||
                    function (callback) {
                        return window.setTimeout(callback, 1000 / 60)
                    }
                )
            }
            // 距离
            const difference = Math.abs(from - to)
            // 速度
            const step = Math.ceil(difference / duration * 50)

            function scroll(start, end, step) {
                if (start === end) return

                let d = (start + step > end) ? end : start + step
                if (start > end) {
                    d = (start - step < end) ? end : start - step
                }
                window.scrollTo(d, d)
                window.requestAnimationFrame(() => scroll(d, end, step))
            }
            scroll(from, to, step)
        },
        // 滚动回调方法
        handleScroll() {
            // 滚动的距离大于设置的高度时，则显示backTop组件
            this.backTop = window.pageYOffset >= this.height
        },
        // 点击backTop组件触发的方法
        back() {
            const sTop = window.pageYOffset
            this.scrollTop(sTop, 0, this.duration)
            this.$emit('on-click')
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll, false)
        window.addEventListener('resize', this.handleScroll, false)
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll, false)
        window.removeEventListener('resize', this.handleScroll, false)
    }
}
</script>
<style lang='stylus'>
.my-backTop{
    position: fixed;
    z-index: 800;
    cursor: pointer;
    display: none;
    &-show{
        display: block;
    }
    &-inner{
        background-color: rgba(66,185,131,.9);
        border-radius: 2px;
        box-shadow: 0 1px 3px rgba(66,185,131,.2);
        transition: all .2s ease-in-out;
        i{
            color: #fff;
            font-size: 24px;
            padding: 8px 12px;
            font-weight: bold;
        }
    }
}  
</style>
