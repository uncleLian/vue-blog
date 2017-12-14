<template>
    <div id="clipboard">
        <div class="demo">
            <el-input class='copy1' v-model="copy1" >
                <el-button slot="append" @click="copy($event, copy1)">复制</el-button>
            </el-input>

            <el-input class="cut1" v-model="cut1" >
                <el-button slot="append" @click="cut($event)">剪切</el-button>
            </el-input>
        </div>
        
    </div>
</template>
<script>
export default {
    name: 'clipboard',
    data() {
        return {
            copy1: '复制复制复制复制复制',
            cut1: '剪切剪切剪切剪切剪切'
        }
    },
    computed: {

    },
    methods: {
        copy(event, val) {
            this.$clip({
                event: event,
                text: val
            })
        },
        cut(event) {
            this.$clip({
                event: event,
                action: 'cut',
                target: this.$el.querySelector('.cut1 input')
            })
        }
    },
    mounted() {

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
