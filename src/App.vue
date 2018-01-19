<template>
    <div id="app">
        <!-- 视图 -->
        <transition name="el-fade-in-linear" mode="out-in">
            <router-view></router-view>
        </transition>
        <!-- 进度条 -->
        <vue-progress-bar></vue-progress-bar>
        <!-- backTop组件 -->
        <my-backTop></my-backTop>
    </div>
</template>
<script>
import cache from '@/utils/cache'
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
        },
        init_language() {
            let lang = cache.getSession('language')
            if (lang) {
                this.$store.commit('set_language', lang)
            }
        }
    },
    created() {
        this.$Progress.start()
        this.init_Progress()
        this.init_language()
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
