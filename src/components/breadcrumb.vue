<template>
    <div class="my-breadcrumb">
        <!-- 自定义分隔符 -->
        <el-breadcrumb v-if="separator" :separator="separator">
            <el-breadcrumb-item v-for="(item,index) in json" :key="index" :to="item.path">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
        <!-- 默认箭头图标 / 自定义分隔符图标 -->
         <el-breadcrumb v-else :separator-class="separatorClass? separatorClass : 'el-icon-arrow-right'">
            <el-breadcrumb-item v-for="(item,index) in json" :key="index" :to="item.path">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>
<script>
/*
* @params
* separator       自定义分隔符
* separatorClass  自定义分隔符图标
*/
export default {
    name: 'breadcrumb',
    props: {
        separator: {
            type: String
        },
        separatorClass: {
            type: String
        }
    },
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
        // 获取当前路由
        getBreadcrumb() {
            let matched = this.$route.matched.filter(item => item.name)
            const first = matched[0]
            // 如果顶层路由name不等于首页，并且path不等于空，则添加首页路由为顶层路由
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
.my-breadcrumb {}
</style>
