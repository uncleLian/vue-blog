<template>
    <div id="progressbar">
        <el-button type="primary" @click="start">Start</el-button>
        <el-button type="primary" @click="increase">Increase({{num}})</el-button>
        <el-button type="primary" @click="decrease">Decrease({{num}})</el-button>
        <el-button type="primary" @click="set">Set({{num}})</el-button>
        <el-button type="primary" @click="finish">Finish</el-button>
        <el-button type="primary" @click="fail">Fail</el-button>

        <!-- 配置在App.vue -->

        <div class="moreLink">
            <p class="moreLink">更多内容：<a href="https://github.com/hilongjw/vue-progressbar" target="_blank">vue-progressbar</a></p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'progressbar',
    data() {
        return {
            num: 20
        }
    },
    methods: {
        start() {
            this.$Progress.start()
        },
        increase() {
            this.$Progress.increase(this.num)
        },
        decrease() {
            this.$Progress.decrease(this.num)
        },
        set() {
            this.$Progress.set(this.num)
        },
        finish() {
            this.$Progress.finish()
        },
        fail() {
            this.$Progress.fail()
        }
    }
}
</script>
<style lang='stylus'>
#progressbar {
}
</style>
