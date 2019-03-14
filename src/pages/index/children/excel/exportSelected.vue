<template>
    <div id="exportSelected">
        <div class="app-introduce">
            {{$t('excel.exportSelected')}}
            <a href="https://github.com/SheetJS/js-xlsx" target="_blank">xlsx</a>
        </div>
        <div class="tablePage-container">
            <div class="left-item">
                <el-input v-model="filename" clearable :placeholder="$t('excel.filename')" prefix-icon="el-icon-document" style='width:260px;'></el-input>
            </div>
            <div class="left-item">
                <el-button type="primary" @click="handleExport" :loading="exportLoading">{{$t('excel.export')}}</el-button>
            </div>
        </div>

        <base-table ref="baseTable" isSelect @selected="(data) => json = data" />
    </div>
</template>
<script>
import baseTable from '@/components/TableDemo/baseTable'
export default {
    name: 'exportSelected',
    components: { baseTable },
    data() {
        return {
            filename: '',
            json: [],
            exportLoading: false
        }
    },
    methods: {
        // export selected
        handleExport() {
            if (this.json && this.json.length > 0) {
                this.exportLoading = true
                import('@/utils/Export2Excel').then(excel => {
                    const tHeader = ['序号', 'ID', '时间', '标题', '频道', '热度', '作者']
                    const filterVal = ['order', 'id', 'time', 'title', 'channel', 'hot', 'author']
                    const filterJson = this.filterJson(this.json)
                    const data = this.formatJson(filterJson, filterVal)
                    excel.export_json_to_excel({
                        'header': tHeader,
                        'data': data,
                        'filename': this.filename || 'example',
                        'autoWidth': true
                    })
                    this.$refs.baseTable.clearSelection()
                    this.exportLoading = false
                })
            }
        },
        filterJson(json) {
            let res = []
            json.forEach((item, index) => {
                let obj = {}
                obj.order = index
                obj.id = item.sound.id
                obj.time = this.$filter.formatTime(item.sound.update_time)
                obj.title = item.sound.name
                obj.channel = item.sound.channel.name
                obj.hot = item.sound.view_count
                obj.author = item.sound.user.name
                res.push(obj)
            })
            return res
        },
        formatJson(json, filterVal) {
            let data = json.map(item => filterVal.map(key => {
                return item[key]
            }))
            return data
        }
    }
}
</script>
