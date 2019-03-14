<template>
    <el-header class="app-header" height="50px">
        <div class="container">
            <div class="header-left">
                <!-- 侧边栏伸缩按钮 -->
                <Cola class="left-item ishover" />
                <!-- 面包屑 -->
                <breadcrumb class="left-item" />
            </div>
            <div class="header-right">
                <!-- 错误日志 -->
                <error-log class="right-item ishover" />
                <!-- 全屏 -->
                <screenfull class="right-item ishover" />
                <!-- 切换语言 -->
                <language-select class="right-item ishover" />
                <!-- 切换主题 -->
                <theme-picker class="right-item ishover" />
                <!-- 用户选项 -->
                <user-select class="right-item ishover" />
            </div>
        </div>
    </el-header>
</template>
<script>
import Cola from '@/components/Cola'
import Breadcrumb from '@/components/Breadcrumb'
import UserSelect from '@/components/UserSelect'
import ErrorLog from '@/components/ErrorLog'
import LanguageSelect from '@/components/LanguageSelect'
import ThemePicker from '@/components/ThemePicker'
import Screenfull from '@/components/Screenfull'
export default {
    components: {
        Cola,
        Breadcrumb,
        UserSelect,
        ErrorLog,
        LanguageSelect,
        ThemePicker,
        Screenfull
    }
}
</script>
<style lang='stylus' scoped>
.app-header {
    position: relative;
    width: 100%;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.12), 0 0 3px 0 rgba(0, 0, 0, 0.04);
    padding: 0;
    z-index: 1;
    .container {
        position: relative;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left-item, .right-item {
            flex-center();
            height: 100%;
            font-size: 18px;
            padding: 0 10px;
            cursor: pointer;
            >>> .item-container {
                flex-center();
                height: 100%;
            }
        }
        .header-left {
            display: flex;
            align-items: center;
            height: 100%;
        }
        .header-right {
            display: flex;
            align-items: center;
            height: 100%;
            margin-right: 30px;
        }
    }
}
</style>
