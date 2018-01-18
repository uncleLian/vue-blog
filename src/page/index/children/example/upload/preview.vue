<template>
    <el-dialog class="preview" title="预览" :visible.sync="visible">
        <!-- options -->
        <div class="mobileOptions">
            <el-select v-model="value" placeholder="请选择">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                    <span style="float: left">{{ item.label }}</span>
                    <span style="float: right; font-size: 13px">{{ item.size }}</span>
                </el-option>
          </el-select>
        </div>
        <!-- container -->
        <div class="preview-container" :class="value">
            <!-- 封面 -->
            <h1>封面：</h1>
            <div class="cover">
                <!-- 无图 -->
                <div class="text" v-if="!(json.coverImages.length > 0)">
                    <h2 class="title">{{json.title}}</h2>
                     <div class="info">
                        <span>0 阅读</span> 
                        <span>{{json.createdTime | formatTime('{y}-{m}-{d}')}}</span>
                    </div>
                </div>
                <!-- 单图 -->
                <div class="single" v-if="json.cover_mode === 1 && json.coverImages.length === 1">
                    <h2 class="title">{{json.title}}</h2>
                    <div class="img">
                        <ul><li><img :src="json.coverImages"></li></ul>
                    </div>
                    <div class="info">
                        <span>0 阅读</span> 
                        <span>{{json.createdTime | formatTime('{y}-{m}-{d}')}}</span>
                    </div>
                </div>
                <!-- 三图 -->
                <div class="more" v-if="json.cover_mode === 3 && json.coverImages.length > 1">
                    <h2 class="title">{{json.title}}</h2>
                    <div class="img">
                        <ul><li v-for="(item,index) in json.coverImages"><img :src="item"></li></ul>
                    </div>
                    <div class="info">
                        <span>0 阅读</span> 
                        <span>{{json.createdTime | formatTime('{y}-{m}-{d}')}}</span>
                    </div>
                </div>
            </div>
            <!-- 文章 -->
            <h1>文章：</h1>
            <div class="article">
                <h2 class="title">{{json.title}}</h2>
                <p>{{json.createdTime | formatTime('{y}-{m}-{d} {h}:{i}')}}</p>
                <article v-html="json.content"></article>
            </div>
        </div>
    </el-dialog>
</template>
<script>
export default {
    name: 'preview',
    props: {
        json: Object
    },
    data() {
        return {
            visible: true,
            value: 'iPhone6',
            options: [
                {
                    value: 'iPhone5',
                    label: 'iPhone5',
                    size: '320 x 568'
                },
                {
                    value: 'iPhone6',
                    label: 'iPhone6',
                    size: '375 x 667'
                },
                {
                    value: 'iPhone6Plus',
                    label: 'iPhone6 Plus',
                    size: '414 x 736'
                },
                {
                    value: 'iPad',
                    label: 'iPad',
                    size: '768 x 1024'
                }
            ]
        }
    },
    watch: {
        visible(val) {
            if (!val) {
                this.$emit('close', false)
            }
        }
    }
}
</script>
<style lang='stylus'>
singleImgHeight = 180px
moreImgHeight = 80px
.preview {
    .el-dialog{
        background-color: #f0f9eb;
        .el-dialog__body{
            padding: 20px 16px;
        }
    }
    h1{
        font-size: 24px;
        color: #F56C6C;
    }
    h2{
        margin-top: 0;
    }
    ul{
        margin: 0;
        padding: 0;
    }
    .mobileOptions{
        margin-bottom: 30px;
        text-align: center;
        span{
            cursor: pointer;
            user-select: none;
        }
    }
    .preview-container{
        margin: 0 auto;
        background-color: #fff;
        padding: 10px 16px;
        max-width: 100%;
        &.iPhone5{
            width: 320px;
            min-height: 568px;
        }
        &.iPhone6{
            width: 375px;
            min-height: 667px;
        }
        &.iPhone6Plus{
            width: 414px;
            min-height: 763px;
        }
        &.iPad{
            width: 768px;
            min-height: 1024px;
        }
        .cover{
            .title{
                font-size: 17px;
                margin-bottom: 8px;
            }
            .info{
                margin-top: 6px;
            }
            .single{
                ul{
                    height: singleImgHeight;
                    overflow: hidden;
                    li{
                        height: singleImgHeight;
                        overflow: hidden;
                        img{
                            width: 100%;
                            min-height: singleImgHeight;
                            vertical-align: top;
                        }
                    }
                }
            }
            .more{
                ul{
                    height: moreImgHeight;
                    overflow: hidden;
                    li{
                        display: inline-block;
                        width: 33%;
                        height: moreImgHeight;
                        overflow: hidden;
                        img{
                            width: 100%;
                            min-height: moreImgHeight;
                        }
                        &:nth-child(2){
                            padding: 0 2px;
                        }
                    }
                }
            }
        }
        .article{
            .title{
                color: #000;
                font-size: 20px;
                font-weight: 700;
            }
            article{
                position: relative;
                color: #333;
                font-size: 18px!important;
                line-height: 30px;
                text-align: justify;
                img{
                    width: 100%;
                }
            }
        }
    }
}
</style>
