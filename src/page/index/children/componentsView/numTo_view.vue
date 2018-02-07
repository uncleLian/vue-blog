<template>
    <div id="numTo_view">
        <!-- 默认调用 -->
        <el-alert title="默认调用" type="success" :closable="false"></el-alert>
        <div><vue-num-to></vue-num-to></div>

        <!-- 其他设置 -->
        <el-alert title="其他设置" type="warning" :closable="false"></el-alert>
        <div><vue-num-to ref="numTo" :startVal="startVal" :endVal="endVal" :duration="duration" :autoplay="autoplay" :prefix="prefix" :suffix="suffix" :decimals="decimals" :decimal="decimal" :ease="ease" @complete="handleComplete"></vue-num-to></div>
        <!-- 设置值 -->
        <div class="demo">
            <el-input :clearable="true"  v-model.number.trim="startVal"><template slot="prepend">开始值</template></el-input>
            <el-input :clearable="true" v-model.number.trim="endVal"><template slot="prepend">结束值</template></el-input>
            <el-input :clearable="true" v-model.number.trim="duration"><template slot="prepend">时长</template></el-input>
            <el-input :clearable="true" v-model.number.trim="prefix"><template slot="prepend">前缀</template></el-input>
            <el-input :clearable="true" v-model.number.trim="suffix"><template slot="prepend">后缀</template></el-input>
            <el-input :clearable="true" v-model.number.trim="decimal"><template slot="prepend">小数点符号</template></el-input>
            <label >小数点后几位</label><el-input-number v-model="decimals" :min="0" :max="10"></el-input-number>
            <el-checkbox v-model="autoplay">自动开始</el-checkbox>
            <el-checkbox v-model="ease">平滑动画</el-checkbox>
        </div>
        <!-- 控制按钮 -->
        <div class="demo">
            <el-button type="primary" @click="start">开始</el-button>
            <el-button type="primary" @click="pause">暂停</el-button>
            <el-button type="primary" @click="resume">恢复</el-button>
            <el-button type="primary" @click="reset">重置</el-button>
            <el-button type="primary" @click="pauseResume">暂停 / 恢复</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'numTo_view',
    data() {
        return {
            startVal: 0,
            endVal: 2017,
            duration: 3000,
            prefix: '￥',
            suffix: '',
            decimal: '.',
            decimals: 0,
            autoplay: true,
            ease: true
        }
    },
    methods: {
        start() {
            this.$refs.numTo.start()
        },
        pause() {
            this.$refs.numTo.pause()
        },
        resume() {
            this.$refs.numTo.resume()
        },
        reset() {
            this.$refs.numTo.reset()
        },
        pauseResume() {
            this.$refs.numTo.pauseResume()
        },
        handleComplete(val) {
            this.$message.success(`动画完成回调，参数为：${val}`)
        }
    }
}
</script>
<style lang='stylus'>
#numTo_view {
    .demo{
        margin: 10px 0;
    }
    .el-alert {
        width: 50%;
        margin: 20px 0;
    }
    .el-input{
        margin-bottom: 10px;
        width: fit-content;
    }
    label{
        margin: 0 10px;
    }
}
</style>
