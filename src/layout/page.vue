<template>
	<el-main id="page">
        <router-view></router-view>
    </el-main>
</template>
<script>
export default {
    name: 'page',
    data() {
        return {

        }
    },
    computed: {

    },
    methods: {

    },
    mounted() {

    }
}
</script>
<style lang='stylus'>
#page {
    min-height: 100%;
    background: #fff;
    overflow: auto;
}
</style>
