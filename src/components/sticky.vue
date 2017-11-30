<template>
    <div :style="wrapperStyles">
        <div :class="[{'my-sticky': sticky}, stickyClass]" :style="styles">
            <slot></slot>
        </div>
    </div>
</template>
<script>
/*
* @params
* offsetTop：    距离窗口顶部的偏移量
* offsetBottom： 距离窗口底部的偏移量
* stickyClass：  自定义sticky元素的类名
*/
export default {
    name: 'sticky',
    props: {
        offsetTop: {
            type: Number,
            default: 0
        },
        offsetBottom: {
            type: Number
        },
        stickyClass: {
            type: String
        }
    },
    data() {
        return {
            sticky: false,
            wrapperStyles: {},
            styles: {}
        }
    },
    computed: {
        offsetType () {
            let type = 'top'
            if (this.offsetBottom >= 0) {
                type = 'bottom'
            }
            return type
        }
    },
    methods: {
        // 获取滚动条位置
        getScroll(target, top) {
            const page = top ? 'pageYOffset' : 'pageXOffset'
            return target[page]
        },
        // 获取元素在文档中的位置
        getOffset(element) {
            const rect = element.getBoundingClientRect()
            const scrollTop = this.getScroll(window, true)
            const scrollLeft = this.getScroll(window)

            // 减去 clientTop 和 clientLeft 是解决IE的body有2px距离的问题
            const docEl = window.document.body
            const clientTop = docEl.clientTop || 0
            const clientLeft = docEl.clientLeft || 0
            return {
                top: rect.top + scrollTop - clientTop,
                left: rect.left + scrollLeft - clientLeft,
                width: rect.width,
                height: rect.height
            }
        },
        handleScroll() {
            const sticky = this.sticky
            const scrollTop = this.getScroll(window, true)
            const elOffset = this.getOffset(this.$el)
            const windowHeight = window.innerHeight
            const elHeight = this.$el.getElementsByTagName('div')[0].offsetHeight

            // Fixed Top
            if ((elOffset.top - this.offsetTop) <= scrollTop && this.offsetType === 'top' && !sticky) {
                this.sticky = true
                this.wrapperStyles = {
                    width: `${elOffset.width}px`,
                    height: `${elOffset.height}px`
                }
                this.styles = {
                    top: `${this.offsetTop}px`,
                    left: `${elOffset.left}px`,
                    width: `${this.$el.offsetWidth}px`
                }
                this.$emit('change', true)
            } else if ((elOffset.top - this.offsetTop) > scrollTop && this.offsetType === 'top' && sticky) {
                this.sticky = false
                this.wrapperStyles = null
                this.styles = null
                this.$emit('change', false)
            }

            // Fixed Bottom
                if ((elOffset.top + this.offsetBottom + elHeight) > (scrollTop + windowHeight) && this.offsetType === 'bottom' && !sticky) {
                this.sticky = true
                this.wrapperStyles = {
                    width: `${elOffset.width}px`,
                    height: `${elOffset.height}px`
                }
                this.styles = {
                    bottom: `${this.offsetBottom}px`,
                    left: `${elOffset.left}px`,
                    width: `${this.$el.offsetWidth}px`
                }
                this.$emit('change', true)
            } else if ((elOffset.top + this.offsetBottom + elHeight) < (scrollTop + windowHeight) && this.offsetType === 'bottom' && sticky) {
                this.sticky = false
                this.wrapperStyles = null
                this.styles = null
                this.$emit('change', false)
            }
        }
    },
    mounted () {
        window.addEventListener('scroll', this.handleScroll, false)
        window.addEventListener('resize', this.handleScroll, false)
    },
    beforeDestroy () {
        window.removeEventListener('scroll', this.handleScroll, false)
        window.removeEventListener('resize', this.handleScroll, false)
    }
}
</script>
<style lang='stylus'>
.my-sticky {
    position: fixed;
    z-index: 800
}
</style>
