<template>
    <div id="dragTable">
        <div class="app-introduce">
            {{$t('dragTable.description')}}
            <a href="https://github.com/SortableJS/Sortable" target="_blank">Sortable</a>
        </div>
        <el-table :data="json" v-loading.body="loading" element-loading-text="Loading..." style="width: 100%" border fit :header-cell-style="{'text-align': 'center'}">
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
                    <el-tag size="medium" type="info">{{scope.row.sound.name}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="频道" min-width="160">
                <template slot-scope="scope">
                    <el-tag size="medium">{{scope.row.sound.channel.name}}</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" label="热度" width="100">
                <template slot-scope="scope">
                    <el-rate disabled :max="3" :low-threshold="1" :high-threshold="3" :icon-classes="['el-icon-my-hot', 'el-icon-my-hot', 'el-icon-my-hot']" :colors="['#99A9BF', '#F7BA2A', '#F56C6C']" :value="scope.row.sound.is_hot"></el-rate>
                </template>
            </el-table-column>
            <el-table-column align="center" label="作者" min-width="120">
                <template slot-scope="scope">
                    <span>{{scope.row.sound.user.name}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="拖拽" width="80" class-name="drag-block">
                <i class="el-icon-rank"></i>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import Sortable from 'sortablejs'
export default {
    name: 'dragTable',
    data() {
        return {
            json: [],
            loading: false
        }
    },
    mounted() {
        this.getTableList()
    },
    methods: {
        getTableList() {
            this.loading = true
            this.$store.dispatch('GET_LIST_DATA').then(res => {
                if (res) {
                    this.json = res.data
                    this.setDrag()
                }
                this.loading = false
            })
        },
        setDrag() {
            const el = this.$el.querySelector('.el-table__body-wrapper > table > tbody')
            Sortable.create(el, {
                handle: '.drag-block',
                onEnd: evt => {
                    // console.log(evt)
                }
            })
        }
    }
}
</script>
<style lang='stylus'>
#dragTable {
    .drag-block {
        cursor: move;
    }
}
</style>
