<template>
    <div v-if="visible">
        <div class="loading" v-if="visible === true">
            <slot><i class="el-icon-loading"></i>数据加载中...</slot>
        </div>
        <div class="nothing" v-else-if="visible === 'nothing'">
            <slot name="nothing">没有符合条件的数据</slot>
        </div>
        <div class="error" v-else-if="visible === 'error'" @click.stop="reload">
            <slot name="error"><i class="el-icon-error"></i>请求错误，点击重新加载</slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        visible: [Boolean, String],
        reload: Function
    }
}
</script>
<style scoped lang='stylus'>
.loading {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #60a3f5;
    font-size: 14px;
    i {
        margin-right: 5px;
    }
}
.nothing {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #999;
    font-size: 14px;
    margin: 15px 0;
}
.error {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #ff4949;
    cursor: pointer;
    font-size: 14px;
    i {
        margin-right: 5px;
    }
}
</style>