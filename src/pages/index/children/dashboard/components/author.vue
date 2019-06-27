<template>
    <div id="author">
        <el-card>
            <a slot="header" class="box-card-header" href="https://github.com/uncleLian" target="_blank">
                <img src='~@/assets/img/uncleLian.jpg'>
            </a>
            <div style="position:relative;">
                <div class="name">uncleLian</div>
                <div class="text">贴近彼此，感受生活</div>
                <div class="info">
                    <div>
                        <i class="info-icon el-icon-location-outline" />
                        <span>Guangzhou</span>
                    </div>
                    <div>
                        <svg-icon class="info-icon" icon-class="qq" />
                        <el-tooltip effect="dark" content="Copy" placement="top">
                            <a href="javascript:;" v-clipboard:copy="338241465" v-clipboard:success="onCopySuccess">338241465</a>
                        </el-tooltip>
                    </div>
                    <div>
                        <svg-icon class="info-icon" icon-class="github" />
                        <el-tooltip effect="dark" content="Github" placement="top">
                            <a href="https://github.com/uncleLian" target="_blank">https://github.com/uncleLian</a>
                        </el-tooltip>
                    </div>
                    <div>
                        <svg-icon class="info-icon" icon-class="issue" />
                        <a href="https://github.com/uncleLian/vue-blog/issues" target="_blank">vue-blog issues</a>
                    </div>
                </div>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    methods: {
        onCopySuccess() {
            this.$message.success('Copy Success')
        }
    }
}
</script>
<style lang='stylus' scoped>
#author {
    >>> .el-card {
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
        .el-card__header {
            padding: 0;
            border: none;
            .box-card-header {
                position: relative;
                height: 160px;
                img {
                    width: 100%;
                    height: 100%;
                    transition: all 0.2s linear;
                    &:hover {
                        transform: scale(1.1, 1.1);
                        filter: contrast(130%);
                    }
                }
            }
        }
        .el-card__body {
            font-size: 14px;
            line-height: 1.5;
            color: #24292e;
            .name {
                margin-bottom: 16px;
                font-size: 20px;
                font-weight: 300;
                line-height: 24px;
                color: #666;
            }
            .text {
                padding-bottom: 12px;
                border-bottom: 1px solid rgba(27, 31, 35, 0.2);
            }
            .info {
                margin-top: 16px;
                div {
                    display: flex;
                    align-items: center;
                    font-size: 14px;
                    margin-top: 6px;
                    .info-icon {
                        margin-right: 8px;
                        font-size: 16px;
                        color: #6a737d;
                    }
                }
            }
        }
    }
}
</style>
