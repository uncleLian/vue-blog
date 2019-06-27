<template>
    <div id="navBar">
        <div class="navBar-left">
            <!-- 侧边栏伸缩按钮 -->
            <Cola class="left-item ishover" />
            <!-- 面包屑 -->
            <breadcrumb class="left-item" />
        </div>
        <div class="navBar-right">
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
#navBar {
    position: relative;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0 1px 2px rgba(0, 21, 41, 0.08);
    .navBar-left {
        display: flex;
        align-items: center;
        height: 100%;
    }
    .navBar-right {
        display: flex;
        align-items: center;
        height: 100%;
        margin-right: 30px;
    }
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
}
</style>
