<template>
    <el-aside id="menu" width="240px">
        <el-menu default-active="/index/home" :router="true">
            <el-menu-item index="/index/home">
                <i class="el-icon-setting"></i>
                <span slot="title">主页</span>
            </el-menu-item>
            <el-submenu index="1">
                <template slot="title"><i class="el-icon-menu"></i>前言</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
                <template slot="title"><i class="el-icon-menu"></i>组件</template>
                <el-menu-item index="1-1">选项1</el-menu-item>
            </el-submenu>
        </el-menu>
    </el-aside>
</template>
<script>
export default {
    name: 'menu',
    data() {
        return {
        }
    },
    computed: {
    },
    methods: {

    },
    mounted() {

    }
}
</script>
<style lang='stylus'>
#menu {
    .el-menu{
        min-height: 100%;
    }
}
</style>
