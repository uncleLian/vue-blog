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
import header from '@/layout/header'
import sidebar from '@/layout/Sidebar'
export default {
    name: 'index',
    components: {
        'app-header': header,
        'app-menu': sidebar
    }
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
