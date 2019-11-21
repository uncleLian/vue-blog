<template>
    <el-dropdown id="languageSelect" placement="bottom" trigger="click" @command="onSelected">
        <div class="item-container">
            <svg-icon icon-class="language" />
        </div>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="zh" :disabled="language === 'zh'">中文</el-dropdown-item>
            <el-dropdown-item command="en" :disabled="language === 'en'">English</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>
<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState([
            'language'
        ])
    },
    methods: {
        onSelected(val) {
            this.$store.commit('SET_LANGUAGE', val)
        }
    }
}
</script>
