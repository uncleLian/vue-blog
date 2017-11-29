<template>
    <div class="breadcrumb">
        <el-breadcrumb class="header-breadcrumb" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item v-for="(item,index) in json" :key="index" :to="item.path">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
export default {
    name: 'breadcrumb',
    data() {
        return {
            json: []
        }
    },
    watch: {
        $route() {
            this.getBreadcrumb()
        }
    },
    methods: {
        getBreadcrumb() {
            let matched = this.$route.matched.filter(item => item.name)
            const first = matched[0]
            if (first && first.name !== '首页' && first.path !== '') {
                matched = [{ name: '首页', path: '/index' }].concat(matched)
            }
            this.json = matched
        }
    },
    mounted() {
        this.getBreadcrumb()
    }
}
</script>
<style lang='stylus'>
#breadcrumb {}
</style>
