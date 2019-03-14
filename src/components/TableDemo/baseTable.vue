<template>
    <el-table :data="json" v-loading.body="loading" element-loading-text="Loading..." style="width: 100%" border fit :header-cell-style="{'text-align': 'center'}" @selection-change="handleSelectionChange" ref="baseTable">
        <el-table-column type="selection" align="center" v-if="isSelect"></el-table-column>
        <el-table-column type="index" align="center" label="序号" width="65">
            <template slot-scope="scope">
                <span>{{scope.$index + 1}}</span>
            </template>
        </el-table-column>
        <el-table-column align="center" label="ID" width="100">
            <template slot-scope="scope">
                <span>{{scope.row.sound.id}}</span>
            </template>
        </el-table-column>
        <el-table-column align="center" label="时间" width="180">
            <template slot-scope="scope">
                <i class="el-icon-time" style="margin-right: 5px"></i>
                <span>{{scope.row.sound.update_time | formatTime}}</span>
            </template>
        </el-table-column>
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
        <el-table-column align="center" label="频道" min-width="160">
            <template slot-scope="scope">
                <el-tag size="medium">{{scope.row.sound.channel.name}}</el-tag>
            </template>
        </el-table-column>
        <el-table-column align="center" label="热度" width="100">
            <template slot-scope="scope">
                <el-popover trigger="hover" placement="right">
                    <template v-if="scope.row.sound.song_info">
                        <p v-if="scope.row.sound.view_count">播放：{{scope.row.sound.view_count | devide_10k}}</p>
                        <p v-if="scope.row.sound.like_count">喜欢：{{scope.row.sound.like_count | devide_10k}}</p>
                        <p v-if="scope.row.sound.share_count">分享：{{scope.row.sound.share_count | devide_10k}}</p>
                    </template>
                    <div slot="reference">
                        <el-rate disabled :max="3" :low-threshold="1" :high-threshold="3" :icon-classes="['el-icon-my-hot', 'el-icon-my-hot', 'el-icon-my-hot']" :colors="['#99A9BF', '#F7BA2A', '#F56C6C']" :value="scope.row.sound.is_hot"></el-rate>
                    </div>
                </el-popover>
            </template>
        </el-table-column>
        <el-table-column align="center" label="作者" min-width="120">
            <template slot-scope="scope">
                <span>{{scope.row.sound.user.name}}</span>
            </template>
        </el-table-column>
    </el-table>
</template>
<script>
import { getList } from '@/api'
export default {
    props: {
        isSelect: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            json: [],
            selectedJson: [],
            loading: false
        }
    },
    mounted() {
        this.getTableList()
    },
    methods: {
        getTableList() {
            this.loading = true
            getList().then(res => {
                if (res) {
                    this.json = res.data
                    this.$emit('completed', this.json)
                }
                this.loading = false
            }).catch(() => {
                this.loading = false
            })
        },
        handleSelectionChange(val) {
            this.selectedJson = val
            this.$emit('selected', this.selectedJson)
        },
        clearSelection() {
            this.$refs.baseTable.clearSelection()
        }
    }
}
</script>
