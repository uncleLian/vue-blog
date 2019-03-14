<template>
    <transition name="el-fade-in-linear" mode="out-in">
        <keep-alive :include="keepRoutes">
            <router-view></router-view>
        </keep-alive>
    </transition>
</template>
<script>
export default {
    data() {
        return {
            keepRoutes: []
        }
    },
    watch: {
        $route() {
            if (this.$route.meta && this.$route.meta.keep) {
                this.keepRoutes.push(this.$route.name)
            }
        }
    },
    mounted() {
        if (this.$route.meta && this.$route.meta.keep) {
            this.keepRoutes.push(this.$route.name)
        }
    }
}
</script>
