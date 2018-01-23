<template>
    <div id="self">
        <el-card>
            <a slot="header" class="box-card-header" href="https://github.com/uncleLian" target="_blank">
                <img src='~@/assets/img/uncleLian.jpg'>
            </a>
            <div style="position:relative;">
                <div class="name">uncleLian</div>
                <div class="text">贴近彼此，感受生活</div>
                <div class="info">
                    <div><i class="el-icon-location-outline"></i><span>Guangzhou</span></div>
                    <div><i class="el-icon-message"></i><a href="mailto:771674109@qq.com">771674109@qq.com</a></div>
                    <div><i class="el-icon-link"></i><a href="http://liansixin.win" target="_blank">http://liansixin.win</a></div>
                </div>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    name: 'self'
}
</script>
<style lang='stylus'>
#self {
    .el-card {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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
                    margin-top: 5px;
                    i {
                        vertical-align: middle;
                        margin-top: 3px;
                        margin-right: 8px;
                        font-size: 16px;
                        color: #6a737d;
                    }
                    span,
                    a {
                        font-size: 14px;
                        vertical-align: middle;
                    }
                }
            }
        }
    }
}
</style>
