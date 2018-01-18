<template>
    <div id="clipboard">
        <!-- 直接调用 -->
        <div class="demo">
            <h3>直接调用</h3>
            <el-input class='copy1' v-model="copy1" >
                <el-button slot="append" @click.stop="copy(copy1)">复制</el-button>
            </el-input>
            <el-input class="cut1" v-model="cut1" >
                <el-button slot="append" @click.stop="cut">剪切</el-button>
            </el-input>
        </div>
        <!-- 指令调用 -->
        <div class="demo">
            <h3>指令调用</h3>
            <el-input class='copy2' v-model="copy2" >
                <el-button slot="append" v-clipboard:copy="copy2" v-clipboard:success="onCopySuccess" v-clipboard:error="onCopyError">复制</el-button>
            </el-input>
            <el-input class="cut2" v-model="cut2" >
                <el-button slot="append" v-clipboard:cut="cut2" v-clipboard:success="onCutSuccess" v-clipboard:error="onCutError">剪切</el-button>
            </el-input>
        </div>

        <div class="moreLink">
            <p>更多内容：<a href="https://github.com/uncleLian/vue-clipboard-pack" target="_blank">vue-clipboard-pack</a></p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'clipboard',
    data() {
        return {
            copy1: '复制复制复制复制复制',
            cut1: '剪切剪切剪切剪切剪切',
            copy2: '复制复制复制复制复制',
            cut2: '剪切剪切剪切剪切剪切'
        }
    },
    methods: {
        copy(val) {
            // 复制功能需要：绑定变量的值
            this.$copyText(val)
            .then(res => {
                this.$message.success('直接调用：复制成功')
            })
            .catch(err => {
                console.log(err)
                this.$message.error('直接调用：复制失败')
            })
        },
        cut() {
            // 剪切功能需要：剪切元素（只适用于input 和 textarea）
            this.$cutText(this.$el.querySelector('.cut1 input'))
            .then(res => {
                this.$message.success('直接调用：剪切成功')
            })
            .catch(err => {
                console.log(err)
                this.$message.error('直接调用：剪切失败')
            })
        },
        onCopySuccess(e) {
            this.$message.success('指令调用：复制成功')
        },
        onCopyError(e) {
            this.$message.error('指令调用：复制失败')
        },
        onCutSuccess(e) {
            this.$message.success('指令调用：剪切成功')
        },
        onCutError(e) {
            this.$message.error('指令调用：剪切失败')
        }
    }
}
</script>
<style lang='stylus'>
#clipboard {
    .demo {
        width: 50%;
        margin-bottom: 50px;
        .el-input{
            margin-bottom: 10px;
        }
    }
}
</style>
