<template>
    <div id="login">
        <div class="login-wrapper">
            <div class="login-container">
                <div class="login-brand">
                    <img src="~@/assets/img/logo.jpg">
                </div>
                <div class="login-box">
                    <el-form class="login-form" :model="form" @submit.native.prevent="verify" label-position="top">
                        <el-form-item class="tip">{{$t('login.step')}}</el-form-item>
                        <el-form-item :label="$t('login.username')">
                            <el-input v-model="form.username" auto-complete='off' />
                        </el-form-item>
                        <el-form-item :label="$t('login.password')">
                            <el-input v-model="form.password" auto-complete='off' type="password" show-password />
                        </el-form-item>
                        <el-form-item label=" ">
                            <el-input class="submit" type="submit" :value="$t('login.submit')" />
                        </el-form-item>
                    </el-form>
                    <div class="languageSelect-container">
                        <language-select class="languageSelect ishover" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import LanguageSelect from '@/components/LanguageSelect'
export default {
    name: 'login',
    components: { LanguageSelect },
    data() {
        return {
            form: {
                username: 'uncleLian',
                password: '123456'
            },
            pwdWatch: false
        }
    },
    methods: {
        verify() {
            let usernameMsg = this.$t('login.usernameMsg')
            let passwordMsg = this.$t('login.passwordMsg')
            if (!this.form.username) {
                this.$message.error(usernameMsg)
            } else if (!this.form.password) {
                this.$message.error(passwordMsg)
            } else {
                this.login()
            }
        },
        login() {
            let successMsg = this.$t('login.successMsg')
            let errorMsg = this.$t('login.errorMsg')
            this.$store.dispatch('GET_LOGIN_DATA', this.form).then((res) => {
                this.$message.success(successMsg)
                this.$route.query.redirect ? this.$router.push(this.$route.query.redirect) : this.$router.push('/')
            }).catch((err) => {
                console.log(err)
                this.$message.error(errorMsg)
            })
        }
    }
}
</script>
<style lang='stylus'>
$loginPrimary = #44a0b3;
$loginPrimaryRGB = 68, 160, 179;
$loginGrey = rgba($loginPrimaryRGB, 0.06);
$loginDark = rgba($loginPrimaryRGB, 0.5);
#login {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: rgba($loginPrimary, 0.4);
    background-image: linear-gradient(45deg, #8baaaa 0%, #ae8b9c 100%);
    .login-wrapper {
        width: 360px;
        padding: 150px 0;
        margin: 0 auto;
        .login-container {
            position: relative;
            .login-brand {
                position: relative;
                width: 100px;
                height: 100px;
                margin: 0 auto -50px auto;
                border-radius: 50%;
                box-shadow: 0 4px 40px rgba(0, 0, 0, 0.07);
                padding: 10px;
                background-color: #fff;
                z-index: 1;
                overflow: hidden;
                img {
                    width: 100%;
                }
            }
            .login-box {
                position: relative;
                width: 100%;
                height: 100%;
                background-color: #fff;
                box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
                padding: 60px 25px 25px 25px;
                border-radius: 3px;
                .login-form {
                    .tip {
                        color: $loginDark;
                        text-align: center;
                        font-weight: 700;
                        margin-top: 10px;
                    }
                    .el-form-item__label {
                        color: $loginDark;
                        font-weight: 700;
                        padding: 0;
                    }
                    .el-input__inner {
                        height: 45px;
                        line-height: 45px;
                        background: $loginGrey;
                        border: none;
                    }
                    .submit {
                        cursor: pointer;
                        input {
                            width: 100%;
                            color: #fff;
                            border-radius: 3px;
                            background-color: $loginPrimary;
                            box-shadow: 0 2px 7px $loginDark;
                            font-weight: 700;
                            cursor: pointer;
                            border: none;
                            outline: 0;
                            transition: all 0.3s;
                        }
                        &:hover {
                            input {
                                opacity: 0.9;
                            }
                        }
                    }
                }
                .languageSelect-container {
                    position: absolute;
                    right: 15px;
                    top: 15px;
                    .languageSelect {
                        .el-dropdown-selfdefine {
                            color: $loginPrimary;
                            font-size: 16px;
                            padding: 5px 8px;
                            cursor: pointer;
                        }
                    }
                }
            }
            &:after {
                content: ' ';
                position: absolute;
                top: 100%;
                left: 50%;
                width: 88%;
                height: 5px;
                transform: translateX(-50%);
                background-color: #f0f0f0;
                border-radius: 0 0 3px 3px;
            }
        }
    }
}
</style>
