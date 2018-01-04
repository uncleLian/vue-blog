<template>
    <div id="loading_view">
        <div class="btn">
            <el-button type="info" @click="getData">点击请求</el-button>
            <el-button type="primary" @click="handleLoading(true)">loading 状态</el-button>
            <el-button type="warning" @click="handleLoading('nothing')">nothing 状态</el-button>
            <el-button type="danger" @click="handleLoading('error')">error 状态</el-button>
        </div>
        <div style="font-size: 18px;margin-left: 2px;">loading：{{loading}}</div>
        <my-loading :visible="loading" :reload="getData"></my-loading>

    </div>
</template>
<script>
import { getList } from '@/api'
export default {
    name: 'loading_view',
    data() {
        return {
            loading: false
        }
    },
    methods: {
        getData() {
            this.loading = true
            getList().then(res => {
                // console.log(res)
                this.$message.success('请求成功')
                if (res) {
                    this.loading = false
                } else {
                    this.loading = 'nothing'
                }
            })
            .catch(err => {
                console.log(err)
                this.loading = 'error'
            })
        },
        handleLoading(type) {
            this.loading = type
        }
    }
}
</script>
<style lang='stylus'>
#loading_view {
    .btn{
        margin-bottom: 20px;
    }
}
</style>
