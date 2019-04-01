<template>
    <div id="diagDialog-container">
        <div class="app-introduce">
            {{$t('dragDialog.description')}}
            <a>@/directive/dragDialog</a>
        </div>
        <el-button type="primary" @click="visibile = true">{{$t('dragDialog.button')}}</el-button>
        <el-dialog v-drag :visible.sync="visibile" :title="$t('dragDialog.title')" @moving="handleMove">
            <el-select ref="select" v-model="selectVal">
                <el-option v-for="(item, index) in options" :key="index" :label="item.label" :value="item.value" />
            </el-select>
        </el-dialog>
    </div>
</template>
<script>
export default {
    name: 'diagDialog',
    data() {
        return {
            visibile: false,
            selectVal: '',
            options: [
                { value: 0, label: 'first' },
                { value: 1, label: 'second' },
                { value: 2, label: 'third' },
                { value: 3, label: 'fourth' }
            ]
        }
    },
    methods: {
        handleMove() {
            this.$refs.select.blur()
        }
    }
}
</script>
<style lang='stylus'>
#diagDialog {
}
</style>
