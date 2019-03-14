<template>
    <div id="permission">
        <div class="app-introduce">
            {{$t('permission.description')}}
        </div>
        <el-switch v-model="permission" inactive-text="admin" active-text="visitor"></el-switch>
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
        permission(val) {
            if (val) {
                this.$store.commit('SET_ROLE', 'visitor')
            } else {
                this.$store.commit('SET_ROLE', 'admin')
            }
        }
    }
}
</script>
<style lang='stylus'>
#permission {
}
</style>
