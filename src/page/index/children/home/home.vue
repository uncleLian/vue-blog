<template>
    <div id="home">
        <!-- banner -->
        <my-banner></my-banner>
        <!-- card -->
        <my-card></my-card>

        <el-row :gutter="12">
            <!-- table -->
            <el-col :span="12"><my-table></my-table></el-col>
            <!-- todo -->
            <el-col :span="6"><my-todo></my-todo></el-col>
            <!-- self -->
            <el-col :span="6"><my-self></my-self></el-col>
        </el-row>
        
        <!-- Github -->
        <a class="github" href="https://github.com/uncleLian/vue-blog" target="_blank">
            <div class="bg"></div>
            <i class="el-icon-my-github"></i>
        </a>
    </div>
</template>
<script>
import myBanner from './components/banner'
import myCard from './components/card'
import mySelf from './components/self'
import myTodo from './components/todo'
import myTable from './components/homeTable'
export default {
    name: 'home',
    components: { myBanner, myCard, mySelf, myTodo, myTable },
    data() {
        return {
        }
    },
    computed: {
    },
    methods: {

    },
    mounted() {
    }
}
</script>
<style lang='stylus'>
GithubSize = 80px
iconSize = GithubSize / 2
#home {
    padding-top: 10px;
    padding-bottom: 20px;
    padding-right: 30px;
    background-color: #fff;
    .github{
        position: absolute;
        right: 0;
        top: 0;
        z-index: 99;
        width: GithubSize;
        height: GithubSize;
        &:hover .bg{
            border-top-color: #F56C6C;
        }
        .bg{
            width: 0;
            height: 0;
            border-top: GithubSize solid #f4516c;
            border-left: GithubSize solid transparent;
        }
        i{
            position: absolute;
            top: 10%;
            right: 10%;
            font-size: iconSize;
            transform: rotate(45deg);
            color: #fff;
        }
    }
}
</style>
