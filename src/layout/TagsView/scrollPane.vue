<template>
    <el-scrollbar ref="scrollContainer" :native="true" style="margin-right:5px">
        <slot />
    </el-scrollbar>
</template>
<script>
const tagAndTagSpacing = 5
export default {
    computed: {
        scrollWrap() {
            return this.$refs.scrollContainer.$refs.wrap
        }
    },
    methods: {
        // 解决两侧tag边距问题
        scrollTo(currentTag) {
            const $container = this.$refs.scrollContainer.$el
            const $containerWidth = $container.offsetWidth
            const $scrollWrapper = this.scrollWrap
            const tagList = this.$parent.$refs.tags

            let firstTag = null
            let lastTag = null

            // find first tag and last tag
            if (tagList.length > 0) {
                firstTag = tagList[0]
                lastTag = tagList[tagList.length - 1]
            }

            if (firstTag === currentTag) {
                $scrollWrapper.scrollLeft = 0
            } else if (lastTag === currentTag) {
                $scrollWrapper.scrollLeft = $scrollWrapper.scrollWidth - $containerWidth
            } else {
                // find preTag and nextTag
                const currentIndex = tagList.findIndex(item => item === currentTag)
                const prevTag = tagList[currentIndex - 1]
                const nextTag = tagList[currentIndex + 1]

                // the tag's offsetLeft after of nextTag
                const afterNextTagOffsetLeft = nextTag.$el.offsetLeft + nextTag.$el.offsetWidth + tagAndTagSpacing

                // the tag's offsetLeft before of prevTag
                const beforePrevTagOffsetLeft = prevTag.$el.offsetLeft - tagAndTagSpacing

                if (afterNextTagOffsetLeft > $scrollWrapper.scrollLeft + $containerWidth) {
                    $scrollWrapper.scrollLeft = afterNextTagOffsetLeft - $containerWidth
                } else if (beforePrevTagOffsetLeft < $scrollWrapper.scrollLeft) {
                    $scrollWrapper.scrollLeft = beforePrevTagOffsetLeft
                }
            }
        }
    }
}
</script>
