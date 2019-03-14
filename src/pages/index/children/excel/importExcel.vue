<template>
    <div id="importExcel">
        <div class="app-introduce">
            {{$t('excel.importExcel')}}
            <a href="https://github.com/SheetJS/js-xlsx" target="_blank">xlsx</a>
        </div>
        <div class="tablePage-container">
            <div class="left-item">
                <input ref="uploadExcel-input" style="display: none" type="file" accept=".xlsx, .xls" @change="handkeFileChange">
                <el-button :loading="importLoading" type="primary" @click="handleFileSelect">{{$t('excel.import')}} Excel</el-button>
            </div>
        </div>
        <el-table v-if="tableBody.length > 0" :data="tableBody" style="width: 100%;" border fit :row-style="{'text-align': 'center'}" :header-cell-style="{'text-align': 'center'}">
            <el-table-column v-for="(item,index) of tableHeader" :key="index" align="center" :prop="item" :label="item" :min-width="item === '标题'? '150' : ''">
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import { get_excel_data } from '@/utils/Export2Excel'
export default {
    name: 'importExcel',
    data() {
        return {
            tableHeader: [],
            tableBody: [],
            importLoading: false
        }
    },
    methods: {
        handleFileSelect() {
            this.$refs['uploadExcel-input'].click()
        },
        handkeFileChange(ev) {
            this.importLoading = true
            const files = ev.target.files
            const file = files[0]
            get_excel_data(file, (data) => {
                this.tableHeader = data.header
                this.tableBody = data.body
                this.importLoading = false
                // fix can't select same file
                this.$refs['uploadExcel-input'].value = null
            })
        }
    }
}
</script>
