<template>
    <div id="numTo-demo">
        <div class="app-introduce">
            {{$t('numTo.description')}}
            <a href="https://github.com/uncleLian/vue-num-to" target="_blank">vue-num-to</a>
        </div>
        <div class="demo">
            <vue-num-to class="number" ref="numTo" :startVal="startVal" :endVal="endVal" :duration="duration || 0" :autoplay="autoplay" :prefix="prefix" :suffix="suffix" :separator="separator" :decimals="decimals" :decimal="decimal" :ease="ease" @complete="handleComplete">
            </vue-num-to>
        </div>
        <div class="demo">
            <!-- start -->
            <div class="demo-item">
                <el-input :clearable="true" v-model.number.trim="startVal" type="number">
                    <template #prepend>{{$t('numTo.start')}}</template>
                </el-input>
            </div>
            <!-- end -->
            <div class="demo-item">
                <el-input :clearable="true" v-model.number.trim="endVal" type="number">
                    <template #prepend>{{$t('numTo.end')}}</template>
                </el-input>
            </div>
            <!-- duration -->
            <div class="demo-item">
                <el-input :clearable="true" v-model.number.trim="duration" type="number">
                    <template #prepend>{{$t('numTo.duration')}}</template>
                </el-input>
            </div>
            <!-- prefix -->
            <div class="demo-item">
                <el-input :clearable="true" v-model.trim="prefix">
                    <template #prepend>{{$t('numTo.prefix')}}</template>
                </el-input>
            </div>
            <!-- suffix -->
            <div class="demo-item">
                <el-input :clearable="true" v-model.trim="suffix">
                    <template #prepend>{{$t('numTo.suffix')}}</template>
                </el-input>
            </div>
            <!-- separator -->
            <div class="demo-item">
                <el-input :clearable="true" v-model.trim="separator">
                    <template #prepend>{{$t('numTo.separator')}}</template>
                </el-input>
            </div>
            <!-- decimal -->
            <div class="demo-item">
                <el-input :clearable="true" v-model.trim="decimal">
                    <template #prepend>{{$t('numTo.decimal')}}</template>
                </el-input>
            </div>
            <!-- decimals -->
            <div class="demo-item">
                <label>{{$t('numTo.decimals')}}</label>
                <el-input-number v-model.number="decimals" :min="0" :max="10"></el-input-number>
            </div>
            <div class="demo-item">
                <el-checkbox v-model="autoplay">{{$t('numTo.autoplay')}}</el-checkbox>
                <el-checkbox v-model="ease">{{$t('numTo.ease')}}</el-checkbox>
            </div>
        </div>
        <div class="demo">
            <el-button type="primary" @click="start">{{$t('numTo.button.start')}}</el-button>
            <el-button type="primary" @click="pause">{{$t('numTo.button.pause')}}</el-button>
            <el-button type="primary" @click="resume">{{$t('numTo.button.resume')}}</el-button>
            <el-button type="primary" @click="reset">{{$t('numTo.button.reset')}}</el-button>
            <el-button type="primary" @click="pauseResume">{{$t('numTo.button.pause')}} / {{$t('numTo.button.resume')}}</el-button>
        </div>
    </div>
</template>
<script>
export default {
    name: 'numTo_view',
    data() {
        return {
            startVal: 0, // 开始值
            endVal: new Date().getFullYear(), // 结束值
            duration: 3000, // 时长
            prefix: '￥', // 前缀
            suffix: '', // 后缀
            separator: ',', // 分隔符
            decimal: '.', // 小数点符号
            decimals: 0, // 小数点后几位
            autoplay: true, // 是否自动开始
            ease: true // 是否平滑过渡
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
            this.$message.success(`complete：${val}`)
        }
    }
}
</script>
<style lang='stylus'>
#numTo-demo {
    .number {
        color: $appColor;
        font-size: 24px;
    }
    .demo {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        margin: 20px 0;
        .demo-item {
            flex-center();
            margin: 0 10px 15px 0;
        }
    }
    .el-input {
        width: fit-content;
    }
    label {
        margin: 0 10px;
    }
}
</style>
