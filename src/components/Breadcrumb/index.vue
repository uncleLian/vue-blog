<template>
    <el-breadcrumb id="app-breadcrumb">
        <el-breadcrumb-item v-for="(item, index) in breadcrumb" :key="index" :to="item.path">{{translationRouteTitle(item.meta.title || item.name)}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
import { translationRouteTitle } from '@/utils/i18n'
export default {
    data() {
        return {
            breadcrumb: ''
        }
    },
    watch: {
        $route() {
            this.getBreadcrumb()
        }
    },
    mounted() {
        this.getBreadcrumb()
    },
    methods: {
        translationRouteTitle,
        getBreadcrumb() {
            this.breadcrumb = this.$route.matched.filter(item => item.name)
        }
    }
}
</script>
<style lang='stylus' scoped>
#app-breadcrumb {
    font-size: 14px !important;
    >>> .el-breadcrumb__item {
        .el-breadcrumb__inner {
            font-weight: 400;
        }
        &:last-child {
            .el-breadcrumb__inner {
                color: #97a8be;
            }
        }
    }
}
</style>
