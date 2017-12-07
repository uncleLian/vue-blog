<template>
    <div id="breadcrumb_view">
        <!-- 默认调用 -->
        <div class="demo">
            <el-alert title="默认调用" type="success" :closable="false"></el-alert>
            <my-breadcrumb></my-breadcrumb>
        </div>
        
        <!-- 自定义分隔符 -->
        <div class="demo">
            <el-alert title="自定义分隔符" type="info" :closable="false"></el-alert>
            <my-breadcrumb separator="/"></my-breadcrumb>
        </div>

        <!-- 自定义分隔符图标 -->
        <div class="demo">
            <el-alert title="自定义分隔符图标" type="warning" :closable="false"></el-alert>
            <my-breadcrumb separator-class="el-icon-success"></my-breadcrumb>
        </div>
    </div>
</template>
<script>
export default {
    name: 'breadcrumb_view'
}
</script>
<style lang='stylus'>
#breadcrumb_view {
    .demo{
        margin-bottom: 50px;
        .el-alert{
            width: 50%;
            margin-bottom: 20px;
        }
    }
}
</style>
