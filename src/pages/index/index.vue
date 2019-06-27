<template>
    <div id="index">
        <el-container id="horContainer" direction="horizontal">
            <app-sidebar />
            <el-container id="verContainer" direction="vertical">
                <el-header id="app-header" height="auto">
                    <app-navbar />
                    <app-tagsView />
                </el-header>
                <el-main id="app-main">
                    <app-pageView />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script>
import Sidebar from '@/layout/Sidebar'
import NavBar from '@/layout/NavBar'
import TagsView from '@/layout/TagsView'
export default {
    name: 'index',
    components: {
        'app-sidebar': Sidebar,
        'app-navbar': NavBar,
        'app-tagsView': TagsView
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
    #app-header {
        position: relative;
        width: 100%;
        padding: 0;
        background-color: #fff;
        box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
        z-index: 1000;
    }
    #app-main {
        position: relative;
        width: 100%;
        background: #fff;
        overflow: inherit;
    }
}
</style>
