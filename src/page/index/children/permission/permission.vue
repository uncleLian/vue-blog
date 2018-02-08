<template>
    <div id="permission">
        <p>你的权限为：{{$store.state.user.role}}</p>
        <p class="switchBtn"><el-switch v-model="permission" inactive-text="admin" active-text="visitor"></el-switch></p>
        <el-alert type="warning" :closable="false" title="注意：">
            <p>进入此页面的权限等级为：admin</p>
            <p>如果你切换为visitor，重新进入此页面时你将无法进入，请刷新重新查看效果</p>
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
    .switchBtn{
        margin: 30px 0;
    }
    .el-alert{
        width: fit-content;
    }
}
</style>
