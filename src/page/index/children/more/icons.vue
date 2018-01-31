<template>
    <div id="icon">
        <div class="icon-link">
            <p><a href="http://www.iconfont.cn/" title="iconfont" target="_blank">iconfont</a></p>
        </div>
        <div class="icon-list">
            <ul>
                <el-tooltip v-for="(item,index) in icons" :content="item.class" placement="top" :key="index">
                    <li :class="item.class"><span>{{item.name}}</span></li>
                </el-tooltip>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'icon',
    data() {
        return {
            icons: [
                {
                    class: 'el-icon-my-lock',
                    name: 'lock'
                },
                {
                    class: 'el-icon-my-book',
                    name: 'book'
                },
                {
                    class: 'el-icon-my-hot',
                    name: 'hot'
                },
                {
                    class: 'el-icon-my-openEye',
                    name: 'openEye'
                },
                {
                    class: 'el-icon-my-closeEye',
                    name: 'closeEye'
                },
                {
                    class: 'el-icon-my-icons',
                    name: 'icons'
                },
                {
                    class: 'el-icon-my-github',
                    name: 'github'
                },
                {
                    class: 'el-icon-my-number',
                    name: 'number'
                },
                {
                    class: 'el-icon-my-link',
                    name: 'link'
                },
                {
                    class: 'el-icon-my-more',
                    name: 'more'
                },
                {
                    class: 'el-icon-my-undo',
                    name: 'undo'
                },
                {
                    class: 'el-icon-my-redo',
                    name: 'redo'
                },
                {
                    class: 'el-icon-my-news',
                    name: 'news'
                },
                {
                    class: 'el-icon-my-bug',
                    name: 'bug'
                },
                {
                    class: 'el-icon-my-401',
                    name: '401'
                },
                {
                    class: 'el-icon-my-404',
                    name: '404'
                },
                {
                    class: 'el-icon-my-qq',
                    name: 'qq'
                },

                {
                    class: 'el-icon-my-home',
                    name: 'home'
                },
                {
                    class: 'el-icon-my-progressbar',
                    name: 'progressbar'
                },
                {
                    class: 'el-icon-my-users',
                    name: 'users'
                },
                {
                    class: 'el-icon-my-excel',
                    name: 'excel'
                },
                {
                    class: 'el-icon-my-chart',
                    name: 'chart'
                },
                {
                    class: 'el-icon-my-paperplane',
                    name: 'paperplane'
                },
                {
                    class: 'el-icon-my-pencil',
                    name: 'pencil'
                },
                {
                    class: 'el-icon-my-markdown',
                    name: 'markdown'
                },
                {
                    class: 'el-icon-my-i18n',
                    name: 'i18n'
                },
                {
                    class: 'el-icon-my-ravelry',
                    name: 'ravelry'
                },
                {
                    class: 'el-icon-my-spinner',
                    name: 'spinner'
                },
                {
                    class: 'el-icon-my-clipboard',
                    name: 'clipboard'
                },
                {
                    class: 'el-icon-my-thumbtack',
                    name: 'thumbtack'
                },
                {
                    class: 'el-icon-my-cube',
                    name: 'cube'
                }
            ]
        }
    }
}
</script>
<style lang='stylus'>
#icon {
    .icon-link {
        display: inline-block;
        width: 100%;
        padding: 0 20px;
        p {
            width: 100%;
            margin: 0;
            padding: 20px;
            background-color: #f0f9eb;
        }
    }
    .icon-list {
        ul {
            margin: 0;
            padding: 0;
            li {
                position: relative;
                width: fit-content;
                width: 50px;
                height: 50px;
                font-size: 40px;
                margin: 40px;
                text-align: center;
                outline: none;
                span {
                    position: absolute;
                    left: 50%;
                    bottom: -30px;
                    transform: translateX(-50%);
                    font-size: 14px;
                    font-weight: bold;
                    text-align: center;
                }
            }
        }
    }
}
</style>
