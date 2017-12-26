<template>
	<el-main id="page">
		<router-view></router-view>
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
    min-height: 100%;
    background: #fff;
    overflow: inherit;
}
</style>
