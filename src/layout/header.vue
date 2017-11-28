<template>
    <el-header id="header" height="80px">
        <div class="container">
            <!-- logo -->
            <router-link class="header-logo" to="/">
                <span>vue2-blog</span>
            </router-link>
            <!-- tools -->
            <div class="header-tools">
                <el-dropdown class="user-tools" @command="handleCommand" placement="top-end">
                    <div class="userInfo">
                        <img src="http://wx.qlogo.cn/mmopen/vi_32/kAPpoX9tk40ZdeV9lyaJ9FjicsHJamL6MRsNicObcr1ejXkh00qtoG56NIiaWjLia5wd9lrGuWVlnXWxOu1icjkbHhQ/0">
                        <span class="el-dropdown-link">思鑫</span>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command="exit">退出</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </div>
        </div>
        <!-- breadcrumb -->
        <el-breadcrumb class="header-breadcrumb" separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            <el-breadcrumb-item>活动列表</el-breadcrumb-item>
            <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
    </el-header>
</template>
<script>
export default {
    name: 'header',
    data() {
        return {
        }
    },
    methods: {
        handleCommand(command) {
            if (command === 'exit') {
            }
        }
    },
    mounted() {
        this.$el.querySelector('#header .header-breadcrumb').style.left = document.getElementById('menu').offsetWidth + 'px'
    }
}
</script>
<style lang='stylus'>
#header {
    position: relative;
    width: 100%;
    background-color: #42B983;
    padding: 0 50px 0 40px;
    .container{
        position: relative;
        width: 100%;
        height: 100%;
        .header-logo{
            position: absolute;
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            color: #fff;
            font-size: 20px;
            font-weight: bold;
            span{
                display: inline-block;
                vertical-align: middle;
            }
        }
        .header-tools{
            height: 100%;
            float: right;
            display: flex;
            align-items: center;
            .user-tools{
                .userInfo{
                    img{
                        width: 40px;
                        height: 40px;
                        border-radius: 100%;
                        vertical-align: middle;
                        margin-right: 5px;
                    }
                    span{
                        color: #fff;
                    }
                }
            }
        }
    }
    .header-breadcrumb{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        padding: 0 20px;
        .el-breadcrumb__inner{
            color: #fff;
        }
        .el-breadcrumb__separator{
            color: #fff;
        }
    }
}
</style>
