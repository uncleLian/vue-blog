<template>
    <div id="index">
        <el-container id="horContainer" direction="horizontal">
            <app-menu />
            <el-container id="verContainer" direction="vertical">
                <app-header />
                <el-main id="main">
                    <app-view />
                </el-main>
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
    #horContainer {
        height: 100%;
    }
    #verContainer {
        position: relative;
        height: 100%;
        transition: width 0.28s;
    }
    #main {
        position: relative;
        width: 100%;
        background: #fff;
        overflow: inherit;
    }
}
</style>
