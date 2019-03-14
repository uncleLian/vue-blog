<template>
    <div class="item-container" @click="handleScreen">
        <svg-icon :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" />
    </div>
</template>
<script>
import screenfull from 'screenfull'
export default {
    name: 'Screenfull',
    data() {
        return {
            isFullscreen: false
        }
    },
    mounted() {
        this.init()
    },
    methods: {
        init() {
            if (screenfull.enabled) {
                screenfull.on('change', () => {
                    this.isFullscreen = screenfull.isFullscreen
                })
            }
        },
        handleScreen() {
            if (!screenfull.enabled) {
                this.$message({
                    message: 'you browser can not work',
                    type: 'warning'
                })
                return false
            }
            screenfull.toggle()
        }
    }
}
</script>
