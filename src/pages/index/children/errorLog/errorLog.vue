<template>
    <div id="errorLog">
        <h3>{{$t('errorLog.tip')}}</h3>
        <div class="app-introduce">
            {{$t('errorLog.description')}}
            <a>/utils/errorLog && /utils/permission</a>
        </div>
        <el-button type="danger" @click="handleClick">{{$t('errorLog.button')}}</el-button>
    </div>
</template>
<script>
export default {
    name: 'errorLog',
    methods: {
        handleClick() {
            this.$message.success('Success')
            this.testB = testB
        }
    },
    mounted() {
        testA = 'testA'
    }
}
</script>
<style lang='stylus'>
#errorLog {
    .el-alert {
        width: 90%;
        margin-bottom: 30px;
    }
}
</style>
