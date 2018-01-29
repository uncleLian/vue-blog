<template>
    <div id="banner">
        <el-carousel type="card" height="200px" trigger="click" :interval="4000">
            <el-carousel-item>
                <div class="item-content">
                    <img src="~@/assets/img/echo.jpg">
                    <a class="title" href="https://github.com/uncleLian/vue2-echo" target="_blank">echo回声</a>
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="item-content">
                    <img src="~@/assets/img/health.gif">
                    <a class="title" href="https://github.com/uncleLian/vue2-health" target="_blank">头条号</a>
                </div>
            </el-carousel-item>
            <el-carousel-item>
                <div class="item-content">
                    <img src="~@/assets/img/toutiao.jpg">
                    <a class="title" href="https://github.com/uncleLian/vue2-news" target="_blank">今日头条</a>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
export default {
    name: 'banner'
}
</script>
<style lang='stylus'>
#banner {
    .el-carousel {
        margin-bottom: 25px;
        .el-carousel__item {
            .item-content {
                width: 100%;
                height: 100%;
                img {
                    width: 100%;
                }
                .title {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    color: #fff;
                    text-align: center;
                    background-color: rgba(0, 0, 0, 0.3);
                    &:hover {
                        color: appColor;
                    }
                }
            }
        }
    }
}
</style>
