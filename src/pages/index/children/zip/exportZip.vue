<template>
    <div id="exportZip">
        <div class="app-introduce">
            {{$t('excel.export')}} Zip
            <a href="https://github.com/Stuk/jszip" target="_blank">jszip</a>
        </div>
        <div class="tablePage-container">
            <div class="left-item">
                <el-input v-model="filename" clearable placeholder="请输入文件名（默认：example）" prefix-icon="el-icon-document" style='width:260px;'></el-input>
            </div>
            <div class="left-item">
                <el-button type="primary" @click="handleExport" :loading="exportLoading">{{$t('excel.export')}}</el-button>
            </div>
        </div>
        <base-table @completed="(data) => json = data" />
    </div>
</template>
<script>
import baseTable from '@/components/TableDemo/baseTable'
export default {
    name: 'exportZip',
    components: { baseTable },
    data() {
        return {
            filename: '',
            json: [],
            exportLoading: false
        }
    },
    methods: {
        // export zip
        handleExport() {
            this.exportLoading = true
            import('@/utils/Export2Zip').then(zip => {
                const tHeader = ['序号', 'ID', '时间', '标题', '频道', '热度', '作者']
                const filterVal = ['order', 'id', 'time', 'title', 'channel', 'hot', 'author']
                const filterJson = this.filterJson(this.json)
                const data = this.formatJson(filterJson, filterVal)
                zip.export_txt_to_zip({
                    'header': tHeader,
                    'data': data,
                    'txtName': this.filename || 'example',
                    'zipName': this.filename || 'example'
                })
                this.exportLoading = false
            })
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
