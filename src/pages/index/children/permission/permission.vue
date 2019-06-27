<template>
    <div id="permission">
        <div class="app-introduce">
            {{$t('permission.description')}}
        </div>
        <el-switch v-model="permission" inactive-text="admin" active-text="visitor"></el-switch>

        <div class="permission-directive-container">
            <h3>
                指令权限：
                <el-tag type="info">v-permission="['admin']"</el-tag>
            </h3>
            <div :key="'v-permission' + index">
                <el-tag v-permission="['admin']">{{$t('permission.permissionMsg')}}</el-tag>
            </div>
        </div>
        <div class="permission-directive-container">
            <h3>
                JS方法验证权限：
                <el-tag type="info">v-if="$checkPermission(['admin'])"</el-tag>
            </h3>
            <div :key="'checkPermission' + index">
                <el-tag v-if="$checkPermission(['admin'])">{{$t('permission.permissionMsg')}}</el-tag>
            </div>
        </div>
        <div class="permission-directive-container">
            <h3>动态渲染的dom节点，只能使用JS方法</h3>
            <div :key="'checkPermission-demo' + index">
                <el-tabs v-model="activeName">
                    <el-tab-pane label="用户管理" name="first">用户管理</el-tab-pane>
                    <el-tab-pane v-if="$checkPermission(['admin'])" label="配置管理" name="second">配置管理</el-tab-pane>
                </el-tabs>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'permission',
    data() {
        return {
            permission: false,
            activeName: 'first',
            index: 1 // 切换权限的时候重新渲染节点，这样指令才能重新执行
        }
    },
    watch: {
        permission(val) {
            if (val) {
                this.$store.commit('login/SET_ROLE', 'visitor')
            } else {
                this.$store.commit('login/SET_ROLE', 'admin')
            }
            this.index++
        }
    }
}
</script>
<style lang='stylus'>
#permission {
    .permission-directive-container {
        margin-top: 30px;
    }
}
</style>
