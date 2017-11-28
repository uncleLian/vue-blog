<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name: 'app',
    methods: {
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
        this.init_Progress()
        this.$Progress.start()
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
    min-height: inherit;
}
</style>
