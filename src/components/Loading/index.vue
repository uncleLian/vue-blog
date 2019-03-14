<template>
    <div v-if="visible">
        <div class="loading-container loading" v-if="visible === true">
            <slot>
                <i class="status-icon el-icon-loading" />
                {{loadingText}}
            </slot>
        </div>
        <div class="loading-container nothing" v-else-if="visible === 'nothing'">
            <slot name="nothing">{{nothingText}}</slot>
        </div>
        <div class="loading-container error" v-else-if="visible === 'error'" @click="reload">
            <slot name="error">
                <i class="status-icon el-icon-error" />
                {{errorText}}
            </slot>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        visible: [Boolean, String],
        loadingText: {
            type: String,
            default: '数据加载中...'
        },
        nothingText: {
            type: String,
            default: '没有符合条件的数据...'
        },
        errorText: {
            type: String,
            default: '请求错误，点击重新加载'
        },
        reload: Function
    }
}
</script>
<style lang='stylus' scoped>
.loading-container {
    width: 100%;
    height: 50px;
    font-size: 14px;
    flex-center();
    &.loading {
        color: #60a3f5;
    }
    &.nothing {
        color: #999;
    }
    &.error {
        color: #ff4949;
        cursor: pointer;
    }
    .status-icon {
        margin-right: 5px;
    }
}
</style>
