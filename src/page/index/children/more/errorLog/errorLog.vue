<template>
    <div id="errorLog">
        <h3>点击右上角错误图标查看日志</h3>
        <el-alert type="info" :closable="false" title="现在的管理系统基本上都是SPA的形式，它提高了用户体验，但同时也增加了页面问题的可能性，小的疏忽可能导致整个页面的死锁。幸运的是，Vue提供了一种方法捕捉异常，在钩子里你可以处理错误或提交错误信息。"></el-alert>
        <el-button type="danger" @click="handleClick">添加事件内部错误</el-button>
    </div>
</template>
<script>
export default {
    name: 'errorLog',
    methods: {
        handleClick() {
            this.$message.success('操作成功')
            this.text = res.data
        }
    },
    mounted() {
        textA = 'text'
    }
}
</script>
<style lang='stylus'>
#errorLog {
    .el-alert{
        width: 90%;
        margin-bottom: 30px;
    }
}
</style>
