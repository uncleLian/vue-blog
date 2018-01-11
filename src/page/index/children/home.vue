<template>
    <div id="home">
        <!-- Github -->
        <a class="github" href="https://github.com/uncleLian/vue2-blog" target="_blank">
            <div class="bg"></div>
            <i class="el-icon-fa-github"></i>
        </a>

        <!-- carousel -->
        <el-carousel  type="card" height="200px" trigger="click" :interval="4000">
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

        <!-- count -->
        <el-row  :gutter="32" class="count">
            <el-col class="count-item" :xs="24" :sm="12" :lg="6" v-for="(item,index) in countList" :key="index" >
                <div class="item-container" :class="`item-container-${index + 1}`">
                    <div class="icon">
                        <i :class="item.icon" ></i>
                    </div>
                    <div class="text">
                        <div class="title">{{item.title}}</div>
                        <my-countTo :startVal="0" :endVal="item.endVal" class="number"></my-countTo>
                    </div>
                </div>
            </el-col>
        </el-row>

        <el-row>
            <el-col :span="6">
                <!-- card -->
                <el-card>
                    <a slot="header" class="box-card-header" href="https://github.com/uncleLian" target="_blank">
                        <img src='~@/assets/img/uncleLian.png'>
                    </a>
                    <div style="position:relative;">
                        <div class="name">uncleLian</div>
                        <div class="text">贴近彼此，感受生活</div>
                        <div class="info">
                            <div><i class="el-icon-location-outline"></i><span>Guangzhou</span></div>
                            <div><i class="el-icon-message"></i><a href="mailto:771674109@qq.com">771674109@qq</a></div>
                            <div><i class="el-icon-fa-link"></i><a href="http://liansixin.win" target="_blank">http://liansixin.win</a></div>
                        </div>
                    </div>
                </el-card>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
    name: 'home',
    data() {
        return {
            countList: [
                {
                    icon: 'el-icon-fa-paper-plane',
                    title: 'Page View',
                    endVal: 182735
                },
                {
                    icon: 'el-icon-fa-user-circle',
                    title: 'Unique Visitor',
                    endVal: 7428
                },
                {
                    icon: 'el-icon-fa-commenting',
                    title: 'Message',
                    endVal: 2839
                },
                {
                    icon: 'el-icon-fa-qq',
                    title: 'QQ group',
                    endVal: 338241465
                }
            ]
        }
    },
    computed: {
    },
    methods: {

    },
    mounted() {
    }
}
</script>
<style lang='stylus'>
GithubSize = 80px
iconSize = GithubSize / 2
color1 = #55c8ca
color2 = #f7b87f
color3 = #36a3f7
color4 = #34bfa3
#home {
    padding-right: 30px;
    background-color: #fff;
    .github{
        position: absolute;
        right: 0;
        top: 0;
        z-index: 9999;
        width: GithubSize;
        height: GithubSize;
        &:hover .bg{
            border-top-color: #F56C6C;
        }
        .bg{
            width: 0;
            height: 0;
            border-top: GithubSize solid #f4516c;
            border-left: GithubSize solid transparent;
        }
        i{
            position: absolute;
            top: 10%;
            right: 10%;
            font-size: iconSize;
            transform: rotate(45deg);
            color: #fff;
        }
    }
    .el-carousel{
        margin-bottom: 25px;
        .el-carousel__item{
            .item-content{
                width: 100%;
                height: 100%;
                img{
                    width: 100%;
                }
                .title{
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
                    &:hover{
                        color: #6ed56c;
                    }
                }
            }
        }
    }
    .count{
        .count-item{
            margin-bottom: 32px;
            .item-container{
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 16px 20px;
                background-color: #f3f4f5;
                border-radius: 6px;
                cursor: pointer;
                &:hover{
                    opacity: 0.8;
                }
                &.item-container-1{
                    background: color1;
                }
                &.item-container-2{
                    background: color2;
                }
                &.item-container-3{
                    background: color3;
                }
                &.item-container-4{
                    background: color4;
                }
                .icon{
                    padding: 16px;
                    border-radius: 6px;
                    cursor: pointer;
                    transition: all 0.3s ease-out;
                    i{
                        font-size: 48px;
                        color: #fff;
                    }
                }
                .text{
                    text-align: right;
                    color: #fff;
                    .title{
                        font-size: 16px;
                        margin-bottom: 12px;
                    }
                    .number{
                        font-size: 20px;
                    }
                }
            }
        }
    }
    .el-card{
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        .el-card__header{
            padding: 0;
            border: none;
            .box-card-header{
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
        .el-card__body{
            font-size: 14px;
            line-height: 1.5;
            color: #24292e;
            .name{
                margin-bottom: 16px;
                font-size: 20px;
                font-weight: 300;
                line-height: 24px;
                color: #666;
            }
            .text{
                padding-bottom: 12px;
                border-bottom: 1px solid rgba(27,31,35,0.2);
            }
            .info{
                margin-top: 16px;
                div{
                    margin-top: 5px;
                   i{
                        vertical-align: middle;
                        margin-top: 3px;
                        margin-right: 8px;
                        font-size: 16px;
                        color: #6a737d;
                    } 
                    span,a{
                        font-size: 14px;
                        vertical-align: middle;
                    }
                }
                
            }
        }
    }
}
</style>
