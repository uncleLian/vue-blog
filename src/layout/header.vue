<template>
    <el-header id="header" height="80px">
        <div class="container">
            <!-- logo -->
            <router-link class="header-logo" to="/">
                <span>vue2-blog</span>
            </router-link>

            <div class="header-right">
                <!-- bug -->
                <div class="right-item" v-if="logs.length > 0">
                    <el-badge is-dot @click.native="bugDialog = true">
                        <i class="el-icon-fa-bug bug" type="danger" size="small" @click="$refs.errorDialog.toggle"></i>
                    </el-badge>
                </div>
                <!-- user -->
                <div class="right-item">
                    <div class="user" v-if="user">
                        <el-dropdown @command="handleCommand" placement="top-end">
                            <div class="user-info">
                                <img :src="user.headimgurl">
                                <span class="el-dropdown-link">{{user.nickname}}</span>
                            </div>
                            <el-dropdown-menu slot="dropdown">
                                <el-dropdown-item command="exit">退出</el-dropdown-item>
                            </el-dropdown-menu>
                        </el-dropdown>
                    </div>
                </div>
            </div>
        </div>
        <!-- 面包屑组件 -->
        <my-breadcrumb class="header-breadcrumb"></my-breadcrumb>

        <!-- 错误日志Dialog -->
        <error-dialog ref="errorDialog"></error-dialog>
    </el-header>
</template>
<script>
import { mapGetters } from 'vuex'
import errorDialog from '@/page/index/children/more/errorlog/errorDialog'
export default {
    name: 'my-header',
    components: { errorDialog },
    computed: {
        ...mapGetters([
            'user',
            'logs'
        ])
    },
    methods: {
        // 设置面包屑组件样式
        setBreadcrumbStyle() {
            this.$el.querySelector('.header-breadcrumb').style.left = document.getElementById('menu').offsetWidth + 'px'
        },
        handleCommand(command) {
            if (command === 'exit') {
                this.$store.commit('loginOut')
                this.$router.push('/login')
            }
        }
    },
    mounted() {
        this.setBreadcrumbStyle()
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
        .header-right{
            height: 100%;
            float: right;
            display: flex;
            align-items: center;
            .right-item{
                margin: 0 12px;
            }
            .bug{
                color: #fff;
                font-size: 20px;
                padding: 2px 4px;
                border: none;
                outline: none;
                cursor: pointer;
            }
            .user{
                .user-info{
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
