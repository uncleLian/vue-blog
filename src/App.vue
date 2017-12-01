<template>
    <div id="app">
        <!-- 视图 -->
        <router-view></router-view>
        <!-- 进度条 -->
        <vue-progress-bar></vue-progress-bar>
    </div>
</template>
<script>
export default {
    name: 'app',
    methods: {
        // 进度条
        init_Progress() {
            this.$router.beforeEach((to, from, next) => {
                this.$Progress.start()
                next()
            })
            this.$router.afterEach((to, from) => {
                this.$Progress.finish()
            })
        }
    },
    created() {
        this.$Progress.start()
        this.init_Progress()
    },
    mounted() {
        this.$Progress.finish()
    }
}
</script>
<style lang='stylus'>
#app {
    position: relative;
    height: 100%;
}
</style>
