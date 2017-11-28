<template>
    <div id="index">
        <el-container>
            <!-- menu -->
            <el-aside><my-menu></my-menu></el-aside>
            <el-container>
                <!-- header -->
                <el-header><my-header></my-header></el-header>
                <!-- page -->
                <el-main><router-view></router-view></el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
export default {
    name: 'index'
}
</script>
<style lang="stylus">
</style>
