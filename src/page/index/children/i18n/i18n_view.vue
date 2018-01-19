<template>
    <div id="i18nView">
        <el-card class="i18n-card">
            <div slot="header" class="i18n-card-header">
                <i class="el-icon-fa-globe"></i><span>{{$t('translations')}}</span>
            </div>
            <div class="languageOption">
                <el-radio-group v-model="lang">
                    <el-radio border size="small" label="zh">中文</el-radio>
                    <el-radio border size="small" label="en">English</el-radio>
                </el-radio-group>
            </div>
            <el-tag type="info">{{$t('i18nView.note')}}</el-tag>
        </el-card>
        <div class="i18n-content">
            <div class="button">
                <el-button size="small" round>{{$t('i18nView.button.round')}}</el-button>
                <el-button size="small" round type="primary">{{$t('i18nView.button.primary')}}</el-button>
                <el-button size="small" round type="success">{{$t('i18nView.button.success')}}</el-button>
                <el-button size="small" round type="info">{{$t('i18nView.button.info')}}</el-button>
                <el-button size="small" round type="warning">{{$t('i18nView.button.warning')}}</el-button>
                <el-button size="small" round type="danger">{{$t('i18nView.button.danger')}}</el-button>
            </div>
            <div class="alert">
                <el-alert :closable="false" :title="$t('i18nView.alert.success')" type="success"></el-alert>
                <el-alert :closable="false" :title="$t('i18nView.alert.info')" type="info"></el-alert>
                <el-alert :closable="false" :title="$t('i18nView.alert.warning')" type="warning"></el-alert>
                <el-alert :closable="false" :title="$t('i18nView.alert.error')" type="error"></el-alert>
            </div>
            <div class="datePickr">
                <el-date-picker v-model="datePickr" type="date" :placeholder="$t('i18nView.datePickr')"> </el-date-picker>
            </div>
            <div class="paginaction">
                <el-pagination :current-page="paginaction" :page-sizes="[100, 200, 300, 400]" :page-size="100" :total="1000" layout="total, sizes, prev, pager, next, jumper" @size-change="handleSizeChange" @current-change="handleCurrentChange"> </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import i18nLocal from './i18nLocal'
const keyName = 'i18nView'
export default {
    name: 'i18nView',
    data() {
        return {
            datePickr: '',
            paginaction: 1
        }
    },
    computed: {
        lang: {
            get() {
                return this.$store.state.language
            },
            set(val) {
                this.$store.commit('set_language', val)
            }
        }
    },
    methods: {
        handleSizeChange(val) {
            console.log(`${val} items per page`)
        },
        handleCurrentChange(val) {
            console.log(`current page: ${val}`)
        },
        initLocal() {
            if (!this.$i18n.getLocaleMessage('en')[keyName]) {
                this.$i18n.mergeLocaleMessage('zh', i18nLocal.zh)
                this.$i18n.mergeLocaleMessage('en', i18nLocal.en)
            }
        }
    },
    created() {
        this.initLocal()
    }
}
</script>
<style lang='stylus'>
#i18nView {
    .i18n-card {
        width: 480px;
        .i18n-card-header {
            i {
                margin-right: 10px;
                font-size: 20px;
            }
            span {
                font-size: 16px;
                vertical-align: middle;
            }
        }
        .languageOption{
            margin-bottom: 20px;
        }
    }
    .i18n-content {
        margin-top: 40px;
        & > div {
            margin-bottom: 30px;
        }
        .alert{
            width: 60%;
            .el-alert{
                margin-bottom: 10px;
            }
        }
    }
}
</style>