<template>
    <div v-if="logs.length > 0" @click="visible = true">
        <el-badge is-dot>
            <el-button style="padding: 8px 10px" size="small" type="danger">
                <svg-icon icon-class="bug" />
            </el-button>
        </el-badge>

        <el-dialog class="dialog" title="错误日志" :visible.sync="visible" width="80%" :append-to-body="true">
            <el-table :data="logs" border :header-cell-style="{'text-align': 'center'}">
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
                        <p>Msg：<el-tag type="danger">{{scope.row.error.message}}</el-tag>
                        </p>
                        <p>Info：<el-tag type="warning">{{scope.row.info}}</el-tag>
                        </p>
                        <p>URL：<el-tag>{{scope.row.url}}</el-tag>
                        </p>
                    </template>
                </el-table-column>
                <el-table-column label="Stack" min-width="500">
                    <template slot-scope="scope">
                        <p>{{scope.row.error.stack}}</p>
                    </template>
                </el-table-column>
            </el-table>
        </el-dialog>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    data() {
        return {
            visible: false
        }
    },
    computed: {
        ...mapState([
            'logs'
        ])
    }
}
</script>
