<template>
    <div id="app">
        <app-pageView />
        <vue-progress-bar />
    </div>
</template>

<script>
export default {
    name: 'App',
    created() {
        this.$Progress.start()
        this.$router.beforeEach((to, from, next) => {
            this.$Progress.start()
            next()
        })
        this.$router.afterEach((to, from) => {
            this.$Progress.finish()
        })
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
