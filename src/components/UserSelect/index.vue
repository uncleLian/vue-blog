<template>
    <el-dropdown class="userSelect" placement="bottom" trigger="click" @command="onSelected">
        <div class="userSelect-container">
            <img src="~@/assets/img/logo.png">
            <span>{{user.nickname}}</span>
        </div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item :disabled="true">{{version}}</el-dropdown-item>
            <el-dropdown-item>
                <a style="color:inherit;" href="https://github.com/uncleLian/vue-blog" target="_blank">{{$t('header.github')}}</a>
            </el-dropdown-item>
            <el-dropdown-item divided command="exit">{{$t('header.logout')}}</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState([
            'user'
        ]),
        version() {
            return 'v' + require('../../../package.json').version
        }
    },
    methods: {
        onSelected(val) {
            if (val === 'exit') {
                this.$store.commit('SET_LOGOUT')
                this.$router.push('/login')
            }
        }
    }
}
</script>
<style lang='stylus' scoped>
$avatarSize = 30px;
.userSelect {
    font-size: 14px !important;
    user-select: none;
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
