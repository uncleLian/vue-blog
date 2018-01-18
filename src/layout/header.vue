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
                <!-- i18n -->
                <div class="right-item">
                    <el-dropdown placement="top-end" @command="onLanguageSelected">
                        <div class="i18n">
                            <span>{{$t('translations')}}</span>
                            <i class="el-icon-caret-bottom"></i>
                        </div>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="zh" :disabled="language === 'zh'">中文</el-dropdown-item>
                            <el-dropdown-item command="en" :disabled="language === 'en'">English</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <!-- user -->
                <div class="right-item">
                    <div class="user" v-if="user">
                        <el-dropdown placement="top-end" @command="onUserSelected">
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
            'logs',
            'language'
        ])
    },
    methods: {
        onLanguageSelected(val) {
            this.$store.commit('set_language', val)
            if (val === 'zh') {
                this.$message.success('语言切换成功')
            } else {
                this.$message.success('switch language success')
            }
        },
        onUserSelected(val) {
            if (val === 'exit') {
                this.$store.commit('loginOut')
                this.$router.push('/login')
            }
        },
        // 设置面包屑组件样式
        setBreadcrumbStyle() {
            this.$el.querySelector('.header-breadcrumb').style.left = document.getElementById('menu').offsetWidth + 'px'
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
            color: #fff;
            font-size: 20px;
            .right-item{
                margin: 0 12px;
                cursor: pointer;
            }
            .bug{
                color: inherit;
                font-size: 20px;
                padding: 2px 4px;
                border: none;
                outline: none;
            }
            .i18n{
                font-size: 15px;
                span,i{
                    color: #fff;
                }
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
