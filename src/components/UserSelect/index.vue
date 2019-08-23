<template>
    <el-dropdown class="userSelect" placement="bottom" trigger="click">
        <div class="userSelect-container">
            <img src="~@/assets/img/logo.png">
            <span>{{user.nickname}}</span>
        </div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :disabled="true">{{version}}</el-dropdown-item>
            <el-dropdown-item divided @click.native="infoVisible = true">{{$t('header.userInfo')}}</el-dropdown-item>
            <el-dropdown-item @click.native="passwordVisible = true">{{$t('header.password')}}</el-dropdown-item>
            <el-dropdown-item @click.native="handleLogout">{{$t('header.logout')}}</el-dropdown-item>
        </el-dropdown-menu>
        <!-- dialog -->
        <info-dialog :title="$t('header.userInfo')" v-if="infoVisible" :visible.sync="infoVisible" @onSubmit="handleChangeUserInfo" disabled :json="user" />
        <password-dialog :title="$t('header.password')" v-if="passwordVisible" :visible.sync="passwordVisible" @onSubmit="handleChangeUserPassword" />
    </el-dropdown>
</template>
<script>
import { mapState } from 'vuex'
import infoDialog from './infoDialog'
import passwordDialog from './passwordDialog'
export default {
    components: { infoDialog, passwordDialog },
    data() {
        return {
            infoVisible: false,
            passwordVisible: false
        }
    },
    computed: {
        ...mapState('login', {
            user: state => state.user
        }),
        version() {
            return 'v' + require('../../../package.json').version
        }
    },
    methods: {
        handleLogout(val) {
            this.$store.dispatch('login/logout')
        },
        handleChangeUserInfo(form) {
            // 假修改
            const user = { ...this.user, ...form }
            this.$store.commit('login/SET_USER', user)
            this.infoVisible = false
            this.$message.success('success')
        },
        handleChangeUserPassword(form) {
            // 假修改
            this.passwordVisible = false
            this.$message.success('success')
        }
    }
}
</script>
<style lang='stylus' scoped>
$avatarSize = 30px;
.userSelect {
    font-size: 14px !important;
    user-select: none;
    a {
        color: inherit;
    }
    .userSelect-container {
        flex-center();
        height: 100%;
        img {
            display: inline-block;
            width: $avatarSize;
            height: $avatarSize;
            margin-right: 5px;
            vertical-align: middle;
            border-radius: 100%;
        }
    }
}
</style>
