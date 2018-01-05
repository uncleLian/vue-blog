<template>
	<el-main id="page">
        <div class="box">
            <transition name="el-fade-in-linear" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </el-main>
</template>
<script>
export default {
    name: 'page'
}
</script>
<style lang='stylus'>
#page {
    position: relative;
    width: 100%;
    height: 100%;
    background: #fff;
    overflow: inherit;
    padding: 0;
    .box{
        position: relative;
        min-height: 100% !important;
        padding: 20px;
        background: #fff;
    }
}
</style>
