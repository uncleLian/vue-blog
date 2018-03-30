<template>
    <div id="documents">
        <el-button type="primary">
            <a href="http://liansixin.win/vue-blog-book" target="_blank">文档</a>
        </el-button>
        <el-button type="primary">
            <a href="https://github.com/uncleLian/vue-blog" target="_blank">Github仓库</a>
        </el-button>
        <el-tooltip effect="dark" content="复制" placement="top">
            <el-button type="primary" v-clipboard:copy="338241465" v-clipboard:success="onCopySuccess">QQ交流群：338241465</el-button>
        </el-tooltip>
    </div>
</template>
<script>
export default {
    name: 'documents',
    methods: {
        onCopySuccess() {
            this.$message.success('复制成功')
        }
    }
}
</script>
<style lang='stylus'>
#documents {
    a {
        color: #fff;
    }
    .el-button {
        min-width: 160px;
    }
}
</style>
