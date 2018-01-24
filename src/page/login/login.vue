<template>
    <div id="login" class="login_bgColor">
        <div class="login_logo">
            <a class="shake-slow shake-constant--hover" href="https://github.com/uncleLian/vue2-blog" target="_blank">vue2-blog</a>
        </div>
        <div class="login_wrap">
            <div class="login_content">
                <span class="register_btn" @click="dialogLangVisible = true">{{$t('translations')}}</span>
                <span class="login_btn app-primary-color app-primary-borderColor" @click="dialogFormVisible = true">{{$t('login.login')}}</span>
            </div>
        </div>

        <!-- ripple -->
        <div class="ripple left">
            <i class="r1"></i>          
            <i class="r2"></i>          
            <i class="r3"></i>          
            <i class="r4"></i>          
            <i class="r5"></i>          
        </div>
        <div class="ripple right">
            <i class="r1"></i>          
            <i class="r2"></i>          
            <i class="r3"></i>          
            <i class="r4"></i>          
            <i class="r5"></i>          
        </div>

        <!-- translations dialog -->
        <el-dialog class='login_box' :title="$t('translations')" :visible.sync="dialogLangVisible">
            <el-radio-group v-model="lang">
                <el-radio border size="small" label="zh">中文</el-radio>
                <el-radio border size="small" label="en">English</el-radio>
            </el-radio-group>
        </el-dialog>

        <!-- login dialog -->
        <el-dialog class='login_box' :title="$t('login.login')" :visible.sync="dialogFormVisible">
            <!-- form -->
            <el-form :model="form" @submit.native.prevent="verify">
                <el-form-item>
                    <el-input v-model="form.username" :placeholder="$t('login.username')" auto-complete='off' /></el-form-item>
                <el-form-item>
                    <el-input v-model="form.password" :placeholder="$t('login.password')" auto-complete='off' :type="pwdType" />
                    <span class="pwdEye" @click="passwordToggle"><i :class="eyeType"></i></span>
                </el-form-item>
                <el-input class="login_btn login_inputColor" type="submit" :value="$t('login.login')" />
            </el-form>
            <!-- otherLogin -->
            <div slot="footer" class="footer">
                <ul class="otherLogin">
                    <li class="wx"><span>{{$t('login.weChat')}}</span></li>
                    <li class="qq"><span>{{$t('login.qq')}}</span></li>
                </ul>
            </div>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: 'login',
    data() {
        return {
            pwdType: 'password',
            eyeType: 'el-icon-my-closeEye',
            dialogLangVisible: false,
            dialogFormVisible: false,
            form: {
                username: 'uncleLian',
                password: '123456'
            }
        }
    },
    computed: {
        lang: {
            get() {
                return this.$store.state.language
            },
            set(val) {
                this.$store.commit('set_language', val)
            }
        }
    },
    methods: {
        login() {
            this.$store.dispatch('get_login_data', this.form)
            .then(() => {
                this.$route.query.redirect ? this.$router.push(this.$route.query.redirect) : this.$router.push('/')
            })
            .catch(() => {
                this.$message.error('账号密码错误')
            })
        },
        verify() {
            if (this.form.username && this.form.password) {
                this.login()
            } else if (!this.form.username) {
                this.$message.error('请输入账号')
            } else if (!this.form.password) {
                this.$message.error('请输入密码')
            }
        },
        passwordToggle() {
            if (this.pwdType === 'password') {
                this.pwdType = ''
                this.eyeType = 'el-icon-my-openEye'
            } else {
                this.pwdType = 'password'
                this.eyeType = 'el-icon-my-closeEye'
            }
        },
        register() {
            this.$message.warning('这个按钮只是为了好看~')
        }
    }
}
</script>
<style lang='stylus'>
#login {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: #333;
    overflow: hidden;
    li:hover {
        opacity: 0.8 !important;
    }
    .login_logo {
        position: absolute;
        top: 27%;
        left: 50%;
        transform: translate3d(-50%,-50%,0);
        font-family: 'Dancing Script', cursive;
        a{
            position: relative;
            font-size: 48px;
            color: #fff;
        }
    }
    .login_wrap {
        position: absolute;
        top: 56%;
        left: 50%;
        transform: translate3d(-50%,-50%,0);
        border-radius: 4px;
        text-align: center;
        .login_content {
            font-size: 0;
            user-select: none;
            text-align: center;
            span {
                display: inline-block;
                width: 164px;
                height: 62px;
                font-size: 22px;
                border-radius: 4px;
                text-align: center;
                line-height: 62px;
                border: 1px solid #fff;
                text-decoration: none;
                cursor: pointer;
            }
            span:hover {
                opacity: 0.7;
            }
            .register_btn {
                margin-right: 40px;
                color: #fff;
            }
            .login_btn {
                background-color: #fff;
            }
        }
    }
    .login_box {
        a {
            display: inline-block;
            font-size: 12px;
        }
        .el-dialog {
            width: 340px;
            .el-dialog__title{
                font-size: 16px;
            }
            .el-input input {
                height: 42px;
            }
            .el-checkbox__label {
                font-size: 12px !important;
            }
            .el-form-item {
                margin-bottom: 18px;
            }
            .pwdEye {
                position: absolute;
                right: 10px;
                top: 0;
                font-size: 16px;
                user-select: none;
                cursor: pointer;
            }
            .login_btn {
                width: 100%;
                font-size: 18px;
                &:hover {
                    opacity: 0.8;
                }
                input {
                    color: #fff;
                    border: none;
                    outline: none;
                    cursor: pointer;
                }
            }
        }
        .footer {
            .otherLogin {
                padding-bottom: 20px;
                font-size: 0;
                text-align: center;
                li {
                    position: relative;
                    display: inline-block;
                    width: 40px;
                    height: 40px;
                    margin-right: 24px;
                    cursor: pointer;
                    span {
                        position: absolute;
                        left: 50%;
                        bottom: -20px;
                        transform: translateX(-50%);
                        font-size: 12px;
                        width: fit-content;
                        line-height: 1;
                        color: #505050;
                    }
                }
            }
        }
    }
}
.ripple{
    position: absolute;
    & > i {
        border: 1px solid #fff;
        position: absolute;
        border-bottom: 0;
        border-radius: 50%;
        opacity: 0;
        animation: ripple 10s infinite ease-out;
    }
    &.left{
        width: 800px;
        height: 800px;
        bottom: -750px;
        left: 50px;
        & > i {
            width: 200px;
            height: 200px;
        }
    }
    &.right{
        width: 100px;
        height: 100px;
        top: 25%;
        right: -50px;
        & > i {
            width: 100px;
            height: 100px;
        }
    }
    .r2{
        animation-delay: 2s;
    }
    .r3{
        animation-delay: 4s;
    }
    .r4{
        animation-delay: 6s;
    }
    .r5{
        animation-delay: 8s;
    }
}
</style>
<style>
#login:after {
    content: "";
    display: block;
    height: 100%;
    background: url(~@/assets/img/login_bg.png) repeat;
}
#login .otherLogin .wx {
    background: url(~@/assets/img/icon_wx_pc.svg)no-repeat center center;
}
#login .otherLogin .qq {
    background: url(~@/assets/img/icon_qq_pc.svg)no-repeat center center;
}
</style>
