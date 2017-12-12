<template>
    <div id="progressbar">
        <el-button type="primary" @click="start">Start</el-button>
        <el-button type="primary" @click="increase">Increase({{num}})</el-button>
        <el-button type="primary" @click="decrease">Decrease({{num}})</el-button>
        <el-button type="primary" @click="set">Set({{num}})</el-button>
        <el-button type="primary" @click="finish">Finish</el-button>
        <el-button type="primary" @click="fail">Fail</el-button>

        <!-- 配置示例 -->
        <pre class="info">
            <el-alert title="配置示例：main.js" type="info" :closable="false"></el-alert>
            <code>
                import Vue from 'vue'
                import VueProgressBar from 'vue-progressbar'
                import App from './App'

                Vue.use(VueProgressBar, {
                    color: '#29F',
                    failedColor: 'red',
                    thickness: '2px'
                })

                new Vue({
                    ...App
                })
            </code>
        </pre>

        <!-- 调用示例 -->
        <pre class="warning">
            <el-alert title="调用示例：App.vue" type="warning" :closable="false"></el-alert>
            <code>
                &lttemplate&gt
                    &ltdiv id="app"&gt
                        &lt!-- 视图 --&gt
                        &ltrouter-view&lt/router-view&gt
                        &lt!-- 进度条 --&gt
                        &ltvue-progress-bar>&lt/vue-progress-bar&gt
                    &lt/div&gt
                &lt/template&gt
                
                &ltscript&gt
                export default {
                    name: 'app',
                    methods: {
                        // 进度条
                        init_Progress() {
                            this.$router.beforeEach((to, from, next) => {
                                this.$Progress.start()
                                next()
                            })
                            this.$router.afterEach((to, from) => {
                                this.$Progress.finish()
                            })
                        }
                    },
                    created() {
                        this.$Progress.start()
                        this.init_Progress()
                    },
                    mounted() {
                        this.$Progress.finish()
                    }
                }
                &lt/script&gt
            </code>
        </pre>
        <!-- 请求示例 -->
        <pre class="success">
            <el-alert title="请求示例：.vue" type="success" :closable="false"></el-alert>
            <code>
                this.$Progress.start()
                this.$http.get('http://api.xxx.com')
                .then(res => {
                    this.$Progress.finish()
                })
                .catch(err => {
                    this.$Progress.fail()
                })
            </code>
        </pre>
    </div>
</template>
<script>
export default {
    name: 'progressbar',
    data() {
        return {
            num: 20
        }
    },
    methods: {
        start() {
            this.$Progress.start()
        },
        increase() {
            this.$Progress.increase(this.num)
        },
        decrease() {
            this.$Progress.decrease(this.num)
        },
        set() {
            this.$Progress.set(this.num)
        },
        finish() {
            this.$Progress.finish()
        },
        fail() {
            this.$Progress.fail()
        }
    }
}
</script>
<style lang='stylus'>
#progressbar {
    pre{
        width: fit-content;
        padding: 0 50px 10px 0;
        &.info{
            background: #f3f4f5;
        }
        &.warning{
            background: #fdf5e6;
        }
        &.success{
            background: #f0f9eb;
        }
    }
}
</style>
