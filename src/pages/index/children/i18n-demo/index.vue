<template>
    <div id="i18n-demo">
        <el-card class="i18n-card">
            <template #header>
                <div class="i18n-card-header">
                    <svg-icon icon-class="global" style="margin-right: 10px" />
                    <span>{{$t('i18nDemo.switchLang')}}</span>
                </div>
            </template>
            <div class="languageOption">
                <el-radio-group v-model="lang">
                    <el-radio border size="small" label="zh">中文</el-radio>
                    <el-radio border size="small" label="en">English</el-radio>
                </el-radio-group>
            </div>
            <div class="app-introduce" style="margin: 0;">
                {{$t('i18nDemo.note')}}
                <a href="https://github.com/kazupon/vue-i18n" target="_blank">vue-i18n</a>
            </div>
        </el-card>
        <div class="i18n-content">
            <div class="button">
                <el-button size="small" round>{{$t('i18nDemo.button.round')}}</el-button>
                <el-button size="small" round type="primary">{{$t('i18nDemo.button.primary')}}</el-button>
                <el-button size="small" round type="success">{{$t('i18nDemo.button.success')}}</el-button>
                <el-button size="small" round type="info">{{$t('i18nDemo.button.info')}}</el-button>
                <el-button size="small" round type="warning">{{$t('i18nDemo.button.warning')}}</el-button>
                <el-button size="small" round type="danger">{{$t('i18nDemo.button.danger')}}</el-button>
            </div>
            <div class="alert">
                <el-alert :closable="false" :title="$t('i18nDemo.alert.success')" type="success"></el-alert>
                <el-alert :closable="false" :title="$t('i18nDemo.alert.info')" type="info"></el-alert>
                <el-alert :closable="false" :title="$t('i18nDemo.alert.warning')" type="warning"></el-alert>
                <el-alert :closable="false" :title="$t('i18nDemo.alert.error')" type="error"></el-alert>
            </div>
            <div class="datePickr">
                <el-date-picker v-model="datePickr" type="date" :placeholder="$t('i18nDemo.datePickr')"> </el-date-picker>
            </div>
            <div class="paginaction">
                <el-pagination :current-page="paginaction" :page-sizes="[100, 200, 300, 400]" :page-size="100" :total="1000" layout="total, sizes, prev, pager, next, jumper"> </el-pagination>
            </div>
        </div>
    </div>
</template>
<script>
import local from './local'
export default {
    name: 'i18n',
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
                this.$store.commit('SER_LANGUAGE', val)
            }
        }
    },
    created() {
        this.mergeLocal()
    },
    methods: {
        mergeLocal() {
            const keyName = 'i18nDemo'
            if (!this.$te(keyName)) {
                this.$i18n.mergeLocaleMessage('zh', local.zh)
                this.$i18n.mergeLocaleMessage('en', local.en)
            }
        }
    }
}
</script>
<style lang='stylus'>
#i18n-demo {
    .i18n-card {
        width: 480px;
        .i18n-card-header {
            display: flex;
            align-items: center;
            font-size: 16px;
        }
        .languageOption {
            margin-bottom: 20px;
            .el-radio {
                margin-right: 0;
            }
        }
    }
    .i18n-content {
        margin-top: 40px;
        & > div {
            margin-bottom: 30px;
        }
        .alert {
            width: 60%;
            .el-alert {
                margin-bottom: 10px;
            }
        }
    }
}
</style>
