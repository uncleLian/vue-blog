<template>
    <div id="homeTable">
        <template>
            <el-table :data="tableJson" style="width: 100%" border fit :header-cell-style="{'text-align': 'center'}">
                <!-- 序号 -->
                <el-table-column type="index" align="center" label="序号" width="50">
                    <template slot-scope="scope">
                        <span>{{scope.$index + 1}}</span>
                    </template>
                </el-table-column>
                <!-- 标题 -->
                <el-table-column label="标题" min-width="250">
                    <template slot-scope="scope">
                        <el-popover trigger="hover" placement="top">
                            <template v-if="scope.row.sound.song_info">
                                <p v-if="scope.row.sound.song_info.name">{{scope.row.sound.song_info.name.type}}: {{ scope.row.sound.song_info.name.name}}</p>
                                <p v-if="scope.row.sound.song_info.author">{{scope.row.sound.song_info.author.type}}: {{ scope.row.sound.song_info.author.name}}</p>
                                <p v-if="scope.row.sound.song_info.album_name">{{scope.row.sound.song_info.album_name.type}}: {{ scope.row.sound.song_info.album_name.name}}</p>
                            </template>
                            <div slot="reference">
                                <el-tag size="medium"><a :href="`http://echo.liansixin.win/#/detail/${scope.row.sound.id}`" target="_blank">{{scope.row.sound.name}}</a></el-tag>
                            </div>
                        </el-popover>
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
                                <el-rate disabled :max="3" :value="scope.row.sound.is_hot" :icon-classes="['el-icon-my-hot', 'el-icon-my-hot', 'el-icon-my-hot']" :colors="['#99A9BF', '#F7BA2A', '#FF9900']"></el-rate>
                            </div>
                        </el-popover>
                    </template>
                </el-table-column>
                <!-- 作者 -->
                <el-table-column align="center" label="作者" min-width="100">
                    <template slot-scope="scope">
                        <span>{{scope.row.sound.user.name}}</span>
                    </template>
                </el-table-column>
            </el-table>
        </template>
    </div>
</template>
<script>
import { getList } from '@/api'
export default {
    name: 'homeTable',
    data() {
        return {
            tableJson: []
        }
    },
    mounted() {
        getList().then(res => {
            if (res) {
                this.tableJson = res.data.slice(0, 7)
            }
        })
    }
}
</script>
<style lang='stylus'>
#homeTable {
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
}
</style>
