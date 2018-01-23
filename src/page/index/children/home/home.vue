<template>
    <div id="home">
        <!-- Github -->
        <a class="github" href="https://github.com/uncleLian/vue2-blog" target="_blank">
            <div class="bg"></div>
            <i class="el-icon-github"></i>
        </a>

        <!-- banner -->
        <my-banner></my-banner>

        <!-- card -->
        <my-card></my-card>
        
        <el-row :gutter="10">
            <el-col :span="6">
            <!-- todo -->
                <my-todo></my-todo>
            </el-col>
            <el-col :span="6">
                <!-- self -->
                <my-self></my-self>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import myBanner from './banner'
import myCard from './card'
import mySelf from './self'
import myTodo from './todo'
export default {
    name: 'home',
    components: { myBanner, myCard, mySelf, myTodo },
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
