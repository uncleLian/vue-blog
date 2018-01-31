<template>
    <div id="permission">
        <p>目前角色为：{{$store.state.user.role}}</p>
        <p><el-switch v-model="permission" inactive-text="admin" active-text="visitor"></el-switch></p>
        <el-alert type="warning" :closable="false" title="注意：">
            <p>当角色切换后，重新进入此页面将会进行权限验证。</p>
            <p>如果你是visitor，你将无法进入这个页面，请刷新重新查看效果。</p>
        </el-alert>
    </div>
</template>
<script>
export default {
    name: 'permission',
    data() {
        return {
            permission: false
        }
    },
    watch: {
        permission (val) {
            // 一般是不会动态修改用户权限，所以这里只做测试
            if (val) {
                this.$store.commit('set_role', 'visitor')
            } else {
                this.$store.commit('set_role', 'admin')
            }
        }
    }
}
</script>
<style lang='stylus'>
#permission {
    .el-alert{
        width: fit-content;
    }
}
</style>
