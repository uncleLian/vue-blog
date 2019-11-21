<template>
    <div id="cola" @click="toggleSidebarStatus">
        <svg-icon :icon-class="sidebarStatus ? 'flex-left' : 'flex-right'" />
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState([
            'sidebarStatus'
        ])
    },
    methods: {
        toggleSidebarStatus() {
            this.$store.commit('SET_SIDEBAR_STATUS')
        }
    }
}
</script>
<style lang='stylus' scoped>
#cola {
    width: 50px;
}
</style>
