<template>
    <el-dialog id="errorDialog" title="错误日志" :visible.sync="visible" width="80%">
        <el-table :data="$store.state.logs" border :header-cell-style="{'text-align': 'center'}">
            <el-table-column label="序号" align="center" width="50">
                <template slot-scope="scope">
                    {{scope.$index + 1}}
                </template>
            </el-table-column>
            <el-table-column label="时间" align="center" width="150">
                <template slot-scope="scope">
                    {{scope.row.time | formatTime('{y}-{m}-{d} {h}:{i}')}}
                </template>
            </el-table-column>
            <el-table-column label="bug信息" min-width="350">
                <template slot-scope="scope">
                    <p>Msg：<el-tag type="danger">{{scope.row.error.message}}</el-tag></p>
                    <p>Info：<el-tag type="warning">{{scope.row.info}}</el-tag></p>
                    <p>URL：<el-tag>{{scope.row.url}}</el-tag></p>
                </template>
            </el-table-column>
             <el-table-column label="Stack" min-width="500">
                <template slot-scope="scope">
                    <p>{{scope.row.error.stack}}</p>
                </template>
            </el-table-column>
        </el-table>
    </el-dialog>
</template>
<script>
export default {
    name: 'errorDialog',
    data() {
        return {
            visible: false
        }
    },
    methods: {
        toggle() {
            this.visible = !this.visible
        }
    }
}
</script>
<style lang='stylus'>
#errorDialog {}
</style>
