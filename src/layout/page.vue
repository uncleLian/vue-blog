<template>
	<el-main id="page">
        <transition name="el-fade-in-linear" mode="out-in">
            <router-view></router-view>
        </transition>
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
    height: fit-content;
    min-height: 100%;
    background: #fff;
    overflow: inherit;
}
</style>
