<template>
    <div id="index">
        <el-container class="container" direction="vertical">
            <!-- header -->
            <my-header></my-header>
            <!-- container -->
            <el-container direction="horizontal">
                <!-- menu -->
                <my-menu></my-menu>
                <!-- page -->
                <my-page></my-page>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
    name: 'index'
}
</script>
<style lang='stylus'>
#index {
    position: relative;
    width: 100%;
    height: 100%;
    .container {
        height: 100%;
    }
}
</style>
