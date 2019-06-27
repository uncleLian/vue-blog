<template>
    <div id="banner">
        <el-carousel type="card" height="200px" trigger="click" :interval="4000">
            <el-carousel-item v-for="(item, index) in json" :key="index">
                <div class="item-content">
                    <img :src="item.img">
                    <a class="title" :href="item.link" target="_blank">{{item.title}}</a>
                </div>
            </el-carousel-item>
        </el-carousel>
    </div>
</template>
<script>
import echo from '@/assets/img/echo.jpg'
import health from '@/assets/img/health.gif'
import toutiao from '@/assets/img/toutiao.jpg'
export default {
    data() {
        return {
            json: [
                {
                    img: echo,
                    link: 'https://github.com/uncleLian/vue2-echo',
                    title: 'echo回声'
                },
                {
                    img: health,
                    link: 'https://github.com/uncleLian/vue2-health',
                    title: '头条号'
                },
                {
                    img: toutiao,
                    link: 'https://github.com/uncleLian/vue2-news',
                    title: '今日头条'
                }
            ]
        }
    }
}
</script>
<style lang='stylus' scoped>
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
