<template>
    <div id="backTop_view">
        <div class="app-introduce">
            {{$t('backTop.description')}}
            <a href="https://github.com/uncleLian/vue-backTop" target="_blank">vue-backtop-pack</a>
        </div>

        <el-alert :closable="false" :title="$t('backTop.default')" type="success"></el-alert>
        <!-- default -->
        <vue-backTop></vue-backTop>

        <p v-for="({index}) in 2" :key="index">line</p>

        <el-alert :closable="false" :title="$t('backTop.changeStyle')" type="warning"></el-alert>
        <vue-backTop :height="200" :bottom="100" @complete="handleComplete">
            <el-button type="warning" round>{{$t('backTop.changeButton')}}</el-button>
        </vue-backTop>

        <p v-for="({index}) in 40" :key="index">line</p>

    </div>
</template>
<script>
export default {
    name: 'backTop_view',
    methods: {
        handleComplete() {
            this.$message.success('complete')
        }
    }
}
</script>
<style lang='stylus'>
#backTop_view {
    .el-alert {
        width: fit-content;
    }
}
</style>
