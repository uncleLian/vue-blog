<template>
    <div id="backTop_view">
        <el-alert :closable="false" title="默认调用：大于高度就会出现backTop组件，height: 400px，bottom: 30px，right: 30px" type="success"></el-alert>
        <!-- 默认调用 -->
        <my-backTop></my-backTop>

        <!-- 占位 -->
        <p v-for="(item,index) in 2">占位</p>

        <el-alert :closable="false" title="改变样式、高度、位置：height: 200px，bottom: 100px，right: 30px、监听到达顶部回调" type="warning"></el-alert>
        <!-- 改变样式、高度、位置、监听完成回调 -->
        <my-backTop :height="200" :bottom="100" @complete="handleComplete">
            <el-button type="warning" round>返回顶部</el-button>
        </my-backTop>

        <!-- 占位 -->
        <p v-for="(item,index) in 50">占位</p>
    </div>
</template>
<script>
export default {
    name: 'backTop_view',
    methods: {
        handleComplete() {
            this.$message.success('滚动到达顶部')
        }
    }
}
</script>
<style lang='stylus'>
#backTop_view {
    .el-alert{
        width: 50%;
    }
}
</style>