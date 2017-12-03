<template>
    <div id="sticky_view">
        <!-- 1 -->
        <my-sticky>
            <el-button class="demo-sticky" type='primary'>固定在最顶部</el-button>
            <el-button class="demo-sticky" type='primary'>固定在最顶部</el-button>
        </my-sticky>

        <!-- 占位 -->
        <div class="content">
            <p v-for="(item,index) in 10" :key="index">占位</p>
        </div>

        <!-- 3 -->
        <my-sticky :offsetTop="50" @change="stickeyChange">
            <el-button class="demo-sticky" type='primary'>固定在距离顶部 50px 的位置，并监听sticky变化</el-button>
        </my-sticky>

        <!-- 占位 -->
        <div class="content">
            <p v-for="(item,index) in 10" :key="index">占位</p>
        </div>

        <!-- 2 -->
        <my-sticky :offsetBottom="20">
            <el-button class="demo-sticky" type='primary'>固定在距离底部 20px 的位置</el-button>
        </my-sticky>

        <!-- 占位 -->
        <div class="content">
            <p v-for="(item,index) in 20" :key="index">占位</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'sticky_view',
    methods: {
        stickeyChange(val) {
            this.$message.info('sticky的值为：' + val)
        }
    }
}
</script>
<style lang='stylus'>
#sticky_view {
    .demo-sticky{
        opacity: 0.9;
    }
}
</style>
