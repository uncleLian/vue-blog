<template>
    <div id="sticky_view">
        <div class="app-introduce">
            {{$t('sticky.description')}}
            <a href="https://github.com/uncleLian/vue-position-sticky" target="_blank">vue-position-sticky</a>
        </div>

        <vue-position-sticky>
            <el-button class="demo-sticky" type='primary'>{{$t('sticky.top')}}</el-button>
            <el-button class="demo-sticky" type='primary'>{{$t('sticky.top')}}</el-button>
        </vue-position-sticky>

        <div class="content">
            <p v-for="(item,index) in 10" :key="index">line</p>
        </div>

        <vue-position-sticky :offsetTop="50" @change="stickeyChange">
            <el-button class="demo-sticky" type='primary'>{{$t('sticky.fixed50')}}</el-button>
        </vue-position-sticky>

        <div class="content">
            <p v-for="(item,index) in 10" :key="index">line</p>
        </div>

        <vue-position-sticky :offsetBottom="20">
            <el-button class="demo-sticky" type='primary'>{{$t('sticky.bottom')}}</el-button>
        </vue-position-sticky>

        <div class="content">
            <p v-for="(item,index) in 20" :key="index">line</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'sticky_view',
    methods: {
        stickeyChange(val) {
            console.log('sticky的值为：', val)
        }
    }
}
</script>
<style lang='stylus'>
#sticky_view {
    .demo-sticky {
        opacity: 0.9;
    }
}
</style>
