<template>
    <div id="countTo_view">
        <my-countTo ref="countTo" :startVal="1000" :endVal="12000" :duration="5000" :autoplay="false" :ease="false" :decimals="2" decimal="A"></my-countTo>
        <el-button type="primary" @click="start">开始</el-button>
        <el-button type="primary" @click="pause">暂停</el-button>
        <el-button type="primary" @click="resume">恢复</el-button>
        <el-button type="primary" @click="reset">重置</el-button>
    </div>
</template>
<script>
export default {
    name: 'countTo_view',
    methods: {
        start() {
            this.$refs.countTo.start()
        },
        pause() {
            this.$refs.countTo.pause()
        },
        resume() {
            this.$refs.countTo.resume()
        },
        reset() {
            this.$refs.countTo.reset()
        }
    }
}
</script>
<style lang='stylus'>
#countTo_view {}
</style>
