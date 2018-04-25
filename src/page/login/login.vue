<template>
    <div id="login" class="login_bgColor">
        <div class="login-wrapper">
            <!-- logo -->
            <a class="login_logo" href="https://github.com/uncleLian/vue2-blog" target="_blank">vue-blog</a>
            <!-- wrap -->
            <div class="login_wrap">
                <div class="login_content">
                    <span class="translations_btn" @click="dialogLangVisible = true">{{$t('translations')}}</span>
                    <span class="login_btn app-primary-color app-primary-borderColor" @click="dialogFormVisible = true">{{$t('login.login')}}</span>
                </div>
            </div>

            <!-- stars -->
            <div class="stars"></div>
            <div class="twinkling"></div>
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
                    <span class="pwdEye" @click="passwordToggle">
                        <i :class="eyeType"></i>
                    </span>
                </el-form-item>
                <el-input class="login_btn login_inputColor" type="submit" :value="$t('login.login')" />
            </el-form>
            <!-- otherLogin -->
            <ul slot="footer" class="otherLogin">
                <li class="wx">
                    <span>{{$t('login.weChat')}}</span>
                </li>
                <li class="qq">
                    <span>{{$t('login.qq')}}</span>
                </li>
            </ul>
        </el-dialog>
    </div>
</template>
<script>
import '@/utils/particleground.min'
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
                .then((res) => {
                    this.$route.query.redirect ? this.$router.push(this.$route.query.redirect) : this.$router.push('/')
                })
                .catch(() => {
                    this.$message.error('账号密码错误')
                })
        },
        verify() {
            if (!this.form.username) {
                this.$message.error('请输入账号')
            } else if (!this.form.password) {
                this.$message.error('请输入密码')
            } else {
                this.login()
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
        initAniCanvas() {
            particleground(this.$el.querySelector('.login-wrapper'), {
                dotColor: '#0e7085',
                lineColor: '#0e7085',
                parallaxMultiplier: 100,
                lineWidth: 0.1,
                particleRadius: 2
            })
        }
    },
    mounted() {
        this.initAniCanvas()
    }
}
</script>
<style lang='stylus'>
#login {
    position: relative;
    width: 100%;
    height: 100%;
    color: #333;
    .login-wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    li:hover {
        opacity: 0.8 !important;
    }
    .login_logo {
        position: absolute;
        top: 20px;
        left: 30px;
        z-index: 10;
        display: block;
        padding: 10px;
        font-size: 20px;
        font-weight: 400;
        color: #fff;
        letter-spacing: 0.1em;
        transition: all 0.3s;
        &:hover {
            color: appColor;
        }
    }
    .login_wrap {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate3d(-50%, -50%, 0);
        border-radius: 4px;
        text-align: center;
        z-index: 10;
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
            .translations_btn {
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
            .el-dialog__title {
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
        .otherLogin {
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            margin: 0;
            padding: 0;
            width: 100%;
            padding-bottom: 20px;
            li {
                position: relative;
                display: inline-block;
                width: 40px;
                height: 40px;
                margin: 0 12px;
                cursor: pointer;
                &.wx {
                    background: url('~@/assets/img/icon_wx_pc.svg') no-repeat center center;
                }
                &.qq {
                    background: url('~@/assets/img/icon_qq_pc.svg') no-repeat center center;
                }
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
#login {
    canvas {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        z-index: 2;
    }
    .stars, .twinkling {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        display: block;
    }
    .stars {
        background: #01092e url('~@/assets/img/stars.png') repeat top center;
        z-index: 0;
    }
    .twinkling {
        background: transparent url('~@/assets/img/twinkling_1.png') repeat top center;
        animation: move-twink-back 200s linear infinite;
        z-index: 1;
    }
}
</style>
