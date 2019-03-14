<template>
    <div id="progressbar">
        <div class="app-introduce">
            {{$t('progressbar.description')}}
            <a href="https://github.com/hilongjw/vue-progressbar" target="_blank">vue-progressbar</a>
        </div>
        <el-button type="primary" @click="start">Start</el-button>
        <el-button type="primary" @click="increase">Increase({{num}})</el-button>
        <el-button type="primary" @click="decrease">Decrease({{num}})</el-button>
        <el-button type="primary" @click="set">Set({{num}})</el-button>
        <el-button type="primary" @click="finish">Finish</el-button>
        <el-button type="primary" @click="fail">Fail</el-button>
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
