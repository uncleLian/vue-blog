<template>
    <div id="home">
        <app-banner />
        <app-card />
        <el-row :gutter="12">
            <el-col :span="12">
                <app-table />
            </el-col>
            <el-col :span="6">
                <app-todo />
            </el-col>
            <el-col :span="6">
                <app-author />
            </el-col>
        </el-row>

        <github-corner style="position: absolute; top: 0px; right: 0;" />
    </div>
</template>
<script>
import appBanner from './components/banner'
import appCard from './components/card'
import appTable from './components/table'
import appTodo from './components/todo'
import appAuthor from './components/author'
import GithubCorner from '@/components/GithubCorner'
export default {
    name: 'home',
    components: {
        appBanner,
        appCard,
        appTable,
        appTodo,
        appAuthor,
        GithubCorner
    }
}
</script>
<style lang='stylus'>
#home {
    padding-top: 10px;
    padding-bottom: 20px;
    padding-right: 30px;
    background-color: #fff;
}
</style>
