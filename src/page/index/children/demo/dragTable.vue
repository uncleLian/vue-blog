<template>
    <div id="dragTable">
        <el-table :data="json" style="width: 100%" border fit>
            <el-table-column prop="date" label="日期" width="180"></el-table-column>
            <el-table-column prop="name" label="姓名"></el-table-column>
        </el-table>
    </div>
</template>
<script>
import { get_list_data } from '@/api'
export default {
    name: 'dragTable',
    data() {
        return {
            json: [
                {name: 'uncleLian', date: '2017-12-22'},
                {name: 'uncleLian', date: '2017-12-22'}
            ]
        }
    },
    computed: {

    },
    methods: {
        get_list() {
            get_list_data()
            .then(res => {
                console.log(res)
                this.json = res.data
            })
        }
    },
    mounted() {
        this.get_list()
    }
}
</script>
<style lang='stylus'>
#dragTable {}
</style>
