<template>
    <div id="exportExcel">
        <div class="fileName">
            <el-input v-model="filename" placeholder="请输入文件名（默认：example）" prefix-icon="el-icon-document" style='width:260px;' ></el-input>
            <el-button type="primary" @click="handleExport" :loading="exportLoading">导出 excel</el-button>
        </div>
        <el-table :data="json" v-loading.body="loading" element-loading-text="拼命加载中..." style="width: 100%" border fit :header-cell-style="{'text-align': 'center'}">
            <!-- 序号 -->
            <el-table-column type="index" align="center" label="序号" width="65">
                <template slot-scope="scope">
                    <span>{{scope.$index + 1}}</span>
                </template>
            </el-table-column>
            <!-- ID -->
            <el-table-column align="center" label="ID" width="100">
                <template slot-scope="scope">
                    <span>{{scope.row.sound.id}}</span>
                </template>
            </el-table-column>
            <!-- 时间 -->
            <el-table-column align="center" label="时间" width="180">
                <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span>{{scope.row.updated_at}}</span>
                </template>
            </el-table-column>
            <!-- 标题 -->
            <el-table-column label="标题" min-width="300">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                        <template v-if="scope.row.sound.song_info">
                            <p v-if="scope.row.sound.song_info.name">{{scope.row.sound.song_info.name.type}}: {{ scope.row.sound.song_info.name.name}}</p>
                            <p v-if="scope.row.sound.song_info.author">{{scope.row.sound.song_info.author.type}}: {{ scope.row.sound.song_info.author.name}}</p>
                            <p v-if="scope.row.sound.song_info.album_name">{{scope.row.sound.song_info.album_name.type}}: {{ scope.row.sound.song_info.album_name.name}}</p>
                        </template>
                        <div slot="reference">
                            <el-tag size="medium" type="info">{{scope.row.sound.name}}</el-tag>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <!-- 频道 -->
            <el-table-column align="center" label="频道" min-width="160">
                <template slot-scope="scope">
                    <el-tag size="medium">{{scope.row.sound.channel.name}}</el-tag>
                </template>
            </el-table-column>
            <!-- 热度 -->
            <el-table-column align="center" label="热度" width="100">
                <template slot-scope="scope">
                    <el-popover trigger="hover" placement="right">
                        <template v-if="scope.row.sound.song_info">
                            <p v-if="scope.row.sound.view_count">播放：{{scope.row.sound.view_count | devide_10k}}</p>
                            <p v-if="scope.row.sound.like_count">喜欢：{{scope.row.sound.like_count | devide_10k}}</p>
                            <p v-if="scope.row.sound.share_count">分享：{{scope.row.sound.share_count | devide_10k}}</p>
                        </template>
                        <div slot="reference">
                            <el-rate disabled :max="3" :value="Number(scope.row.type)" :icon-classes="['el-icon-fa-fire', 'el-icon-fa-fire', 'el-icon-fa-fire']" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
                        </div>
                    </el-popover>
                </template>
            </el-table-column>
            <!-- 作者 -->
            <el-table-column align="center" label="作者" min-width="120">
                <template slot-scope="scope">
                    <span>{{scope.row.sound.user.name}}</span>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import { getList } from '@/api'
export default {
    name: 'exportExcel',
    data() {
        return {
            filename: '',
            json: [],
            loading: false,
            exportLoading: false
        }
    },
    methods: {
        get_list() {
            this.loading = true
            getList().then(res => {
                // console.log(res)
                if (res) {
                    this.json = res.data
                }
                this.loading = false
            })
            .catch(() => {
                this.loading = false
            })
        },
        handleName() {
            this.$prompt('请输入文件名字（默认为：example）', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消'
            })
            .then(({ value }) => {
               this.filename = value
               this.handleExport()
            })
            .catch(() => {
            })
        },
        handleExport() {
            this.exportLoading = true
            require.ensure([], () => {
                const { export_json_to_excel } = require('@/utils/Export2Excel')
                const filterJson = this.filterJson(this.json)
                const filterVal = ['order', 'id', 'time', 'title', 'channel', 'hot', 'author']
                const tHeader = ['序号', 'ID', '时间', '标题', '频道', '热度', '作者']
                const data = this.formatJson(filterJson, filterVal)
                export_json_to_excel(tHeader, data, this.filename)
                this.exportLoading = false
            })
        },
        // 过滤要导出的数据
        filterJson(json) {
            let res = []
            json.forEach((item, index) => {
                let obj = {}
                obj.order = index
                obj.id = item.sound.id
                obj.time = item.updated_at
                obj.title = item.sound.name
                obj.channel = item.sound.channel.name
                obj.hot = item.type
                obj.author = item.sound.user.name
                res.push(obj)
            })
            return res
        },
        // 格式化数据
        formatJson(json, filterVal) {
            let data = json.map(item => filterVal.map(key => {
                return item[key]
            }))
            return data
        }
    },
    mounted() {
        this.get_list()
    }
}
</script>
<style lang='stylus'>
#exportExcel {
    .fileName {
        margin-bottom: 20px;
    }
}
</style>
