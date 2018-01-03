<template>
    <div id="importExcel">
        <div class="importWrapper">
            <input id="importExcel-input" type="file" accept=".xlsx, .xls" @change="handkeFileChange">
            <el-button :loading="importLoading" type="primary" @click="handleImport">导入 Excel</el-button>
        </div>
        <el-table v-if="tableBody.length > 0" :data="tableBody" style="width: 100%;" border fit :row-style="{'text-align': 'center'}" :header-cell-style="{'text-align': 'center'}">
            <el-table-column v-for='(item,index) of tableHeader' :prop="item" :label="item" :key='index'>
            </el-table-column>
        </el-table>
    </div>
</template>
<script>
import XLSX from 'xlsx'
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
        handleImport() {
            document.getElementById('importExcel-input').click()
        },
        handkeFileChange(ev) {
            this.importLoading = true
            const files = ev.target.files
            const itemFile = files[0]
            const reader = new FileReader()
            reader.onload = e => {
                const data = e.target.result
                const fixedData = this.fixdata(data)
                const workbook = XLSX.read(btoa(fixedData), { type: 'base64' })
                const firstSheetName = workbook.SheetNames[0]
                const worksheet = workbook.Sheets[firstSheetName]
                const header = this.get_header_row(worksheet)
                const body = XLSX.utils.sheet_to_json(worksheet)
                this.generateDate(header, body)
            }
            reader.readAsArrayBuffer(itemFile)
        },
        fixdata(data) {
            let o = ''
            let l = 0
            const w = 10240
            for (; l < data.byteLength / w; ++l) o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w, l * w + w)))
            o += String.fromCharCode.apply(null, new Uint8Array(data.slice(l * w)))
            return o
        },
        get_header_row(sheet) {
            const headers = []
            const range = XLSX.utils.decode_range(sheet['!ref'])
            let C
            const R = range.s.r /* start in the first row */
            for (C = range.s.c; C <= range.e.c; ++C) { /* walk every column in the range */
                var cell = sheet[XLSX.utils.encode_cell({ c: C, r: R })] /* find the cell in the first row */
                var hdr = 'UNKNOWN ' + C // <-- replace with your desired default
                if (cell && cell.t) hdr = XLSX.utils.format_cell(cell)
                headers.push(hdr)
            }
            return headers
        },
        generateDate(header, body) {
            this.tableHeader = header
            this.tableBody = body
            this.importLoading = false
        }
    }
}
</script>
<style lang='stylus'>
#importExcel {
    .importWrapper {
        margin-bottom: 20px;
        #importExcel-input {
            display: none;
        }
    }
}
</style>
