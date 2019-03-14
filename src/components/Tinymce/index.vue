<template>
    <div id="tinymce" :style="{'height': height + 'px'}">
        <textarea :id="tinymceId"></textarea>

        <el-button class="uploadImage-button" :class="{'fullscreen': fullscreen}" icon="el-icon-upload" size="mini" type="primary" @click="uploadImageVisible = true">上传图片</el-button>

        <!-- 自定义上传图片 -->
        <my-upload-image v-if="uploadImageVisible" @complete="inserPicture" @close="uploadImageVisible = false"></my-upload-image>
    </div>
</template>
<script>
import uploadImage from './uploadImage'
export default {
    name: 'tinymce',
    components: { 'my-upload-image': uploadImage },
    props: {
        value: {
            type: String,
            default: ''
        },
        height: {
            type: Number,
            default: 360
        },
        // 默认关闭草稿功能，因为演示图片链接是base64格式，几张图片localstorage就超过了限制
        // 要使用时，图片用短链接即可
        draft: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            tinymceId: `vue-tinymce-${new Date().getTime()}`,
            fullscreen: false,
            uploadImageVisible: false
        }
    },
    mounted() {
        this.initTinymce()
    },
    beforeDestroy() {
        // 解决全屏时切换路由导致页面无法滚动的问题
        const tinymce = window.tinymce.get(this.tinymceId)
        if (this.fullscreen) {
            tinymce.execCommand('mceFullScreen')
        }
        if (tinymce) {
            tinymce.destroy()
        }
    },
    methods: {
        initTinymce() {
            window.tinymce.init({
                language: 'zh_CN',
                selector: `#${this.tinymceId}`,
                height: this.height,
                plugins: ['advlist anchor autolink autosave code codesample directionality emoticons fullscreen hr image imagetools insertdatetime link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace spellchecker tabfocus table template textpattern visualblocks visualchars wordcount'],
                toolbar: ['insertfile undo redo | formatselect | forecolor backcolor bold italic underline strikethrough subscript superscript removeformat | alignleft aligncenter alignright alignjustify | bullist numlist', 'link image media emoticons table anchor hr | print preview fullscreen'],
                end_container_on_empty_block: true, // 允许块元素内按下回车键，拆分当前容器块元素
                object_resizing: false, // 可对图片和表格进行调整
                powerpaste_word_import: 'clean', // 清除粘帖内容的格式
                default_link_target: '_blank', // 默认链接打开方式
                nonbreaking_force_tab: true, // 允许使用tab缩进
                link_title: false,
                init_instance_callback: editor => {
                    // 初始设置
                    if (this.value) {
                        editor.setContent(this.value)
                    }
                    // 有草稿则会覆盖初始值
                    this.handleDraft('get')
                    // 改变时输出内容
                    editor.on('NodeChange Change KeyUp SetContent', () => {
                        this.$emit('input', editor.getContent())
                        this.handleDraft('set')
                    })
                },
                setup: editor => {
                    editor.on('FullscreenStateChanged', (e) => {
                        this.fullscreen = e.state
                    })
                }
            })
        },
        // 处理草稿
        handleDraft(type) {
            if (this.draft) {
                // 多用户登录，保存草稿时应该使用用户唯一标识来保存，这里只做简单处理
                let draftKey = `draft-${this.$cache.getToken()}`
                if (type === 'get') {
                    let data = this.$cache.getLocal(draftKey)
                    if (data) {
                        this.setContent(data)
                        this.draftVisible = true
                    }
                } else if (type === 'set') {
                    let data = this.getContent()
                    this.$cache.setLocal(draftKey, data)
                } else if (type === 'remove') {
                    this.$cache.removeLocal(draftKey)
                    this.setContent(this.value)
                    this.draftVisible = false
                }
            }
        },
        setContent(value) {
            window.tinymce.get(this.tinymceId).setContent(value)
        },
        getContent() {
            return window.tinymce.get(this.tinymceId).getContent()
        },
        // 插入图片
        inserPicture(arr) {
            arr.forEach(item => {
                window.tinymce.get(this.tinymceId).insertContent(`<img class="wscnph" src="${item}" >`)
            })
        }
    }
}
</script>
<style lang='stylus'>
#tinymce {
    position: relative;
    .uploadImage-button {
        position: absolute;
        right: 5px;
        top: 5px;
        &.fullscreen {
            position: fixed;
            z-index: 1500;
        }
    }
}
</style>
