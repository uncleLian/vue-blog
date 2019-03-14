<template>
    <div id="loading_view">
        <div class="btn">
            <el-button type="info" @click="getData">request</el-button>
            <el-button type="primary" @click="handleLoading(true)">loading</el-button>
            <el-button type="warning" @click="handleLoading('nothing')">nothing</el-button>
            <el-button type="danger" @click="handleLoading('error')">error</el-button>
        </div>
        <div style="font-size: 18px; margin-left: 2px;">status：{{loading}}</div>
        <app-loading :visible="loading" :reload="getData" />
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
    .btn {
        margin-bottom: 20px;
    }
}
</style>
