<template>
    <div id="icon">
        <div class="app-introduce">
            {{$t('icons.description')}}
            <a>/src/assets/icons/svg</a>
        </div>
        <div class="icon-list">
            <el-tooltip v-for="(item, index) in iconsMap" placement="top" :key="index" :content="generateIconCode(item)" v-clipboard:copy="generateIconCode(item)" v-clipboard:success="onCopySuccess">
                <div class="list-item">
                    <svg-icon :icon-class="item" />
                    <span>{{item}}</span>
                </div>
            </el-tooltip>
        </div>
    </div>
</template>
<script>
import icons from './requireIcons'
export default {
    name: 'icon',
    data() {
        return {
            iconsMap: icons
        }
    },
    methods: {
        generateIconCode(symbol) {
            return `<svg-icon icon-class="${symbol}" />`
        },
        onCopySuccess() {
            this.$message.success('Copy Success')
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
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        .list-item {
            position: relative;
            width: 80px;
            height: 50px;
            font-size: 36px;
            margin: 36px;
            text-align: center;
            outline: none;
            cursor: pointer;
            span {
                position: absolute;
                left: 50%;
                bottom: -30px;
                transform: translateX(-50%);
                font-size: 14px;
                font-weight: bold;
                text-align: center;
                white-space: nowrap;
            }
        }
    }
}
</style>
