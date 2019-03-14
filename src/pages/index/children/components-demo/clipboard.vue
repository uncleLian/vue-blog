<template>
    <div id="clipboard">
        <div class="app-introduce">
            {{$t('clipboard.description')}}
            <a href="https://github.com/uncleLian/vue-clipboard-pack" target="_blank">vue-clipboard-pack</a>
        </div>
        <div class="demo">
            <h3>{{$t('clipboard.directive')}}</h3>
            <el-input v-model="copy1">
                <el-button slot="append" v-clipboard:copy="copy1" v-clipboard:success="onSuccess" v-clipboard:error="onError">{{$t('clipboard.copy')}}</el-button>
            </el-input>
            <el-input v-model="cut1">
                <el-button slot="append" v-clipboard:cut="cut1" v-clipboard:success="onSuccess" v-clipboard:error="onError">{{$t('clipboard.cut')}}</el-button>
            </el-input>
        </div>
        <div class="demo">
            <h3>{{$t('clipboard.default')}}</h3>
            <el-input v-model="copy2">
                <el-button slot="append" @click="copy(copy2)">{{$t('clipboard.copy')}}</el-button>
            </el-input>
            <el-input v-model="cut2" class="cutEl">
                <el-button slot="append" @click="cut">{{$t('clipboard.cut')}}</el-button>
            </el-input>
        </div>

    </div>
</template>
<script>
export default {
    name: 'clipboard',
    data() {
        return {
            copy1: '111111111',
            cut1: '222222222',
            copy2: '333333333',
            cut2: '444444444'
        }
    },
    methods: {
        copy(val) {
            this.$copyText(val).then(res => {
                this.onSuccess()
            }).catch(() => {
                this.onError()
            })
        },
        cut() {
            // 剪切功能需要：元素节点（只适用于input 和 textarea）
            let el = this.$el.querySelector('.cutEl input')
            this.$cutText(el).then(res => {
                this.onSuccess()
            }).catch(() => {
                this.onError()
            })
        },
        onSuccess() {
            this.$message.success('Success')
        },
        onError() {
            this.$message.error('Error')
        }
    }
}
</script>
<style lang='stylus'>
#clipboard {
    .demo {
        width: 50%;
        margin-bottom: 30px;
        .el-input {
            margin-bottom: 10px;
        }
    }
}
</style>
