<template>
    <div id="index">
        <el-container class="container" direction="vertical">
            <!-- 头部 -->
            <my-header></my-header>
            <!-- 容器 -->
            <el-container direction="horizontal">
                <!-- 菜单栏 -->
                <my-menu></my-menu>
                <!-- 页面 -->
                <my-page></my-page>
            </el-container>
        </el-container>
        <!-- backTop组件 -->
        <my-backTop></my-backTop>
    </div>
</template>
<script>
export default {
    name: 'index'
}
</script>
<style lang='stylus'>
#index {
    position: relative;
    width: 100%;
    height: 100%;
    .container{
        min-height: 100%;
    }
}
</style>
