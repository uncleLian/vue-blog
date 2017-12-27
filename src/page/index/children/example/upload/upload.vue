<template>
    <div id="upload">
        <div class="wrapper">
            <!-- 自定义草稿功能 -->
            <div class="recovery" v-if="draft">
                已从草稿中恢复
                <el-button type="text" class="cancle" @click.stop="handleDraft('remove')">撤销</el-button>
            </div>

            <div class="writer">
                <!-- 标题 -->
                <div class="title">
                    <input type='text' placeholder="标题 (5-30个字符)" v-model.trim="title">
                    <div class="title-count" :class="{'error': (title.length < 5 || title.length > 30) && title.length > 0}">{{title.length}} / 30</div>
                </div>
                <!-- 正文 -->
                <div class="content">
                    <quill-editor v-model.trim="content" ref="myQuillEditor" :options="editorOption">
                        <!-- slot方式 -->
                        <my-sticky slot="toolbar">
                            <div id="toolbar">
                                <div class="ql-formats">
                                    <button class="ql-header" value="1" title="H1标题"></button>
                                    <button class="ql-bold" title="加粗"></button>
                                    <button class="ql-italic" title="斜体"></button>
                                    <button class="ql-underline" title="下划线"></button>
                                    <button class="ql-strike" title="删除线"></button>
                                    <button class="ql-blockquote" title="引用"></button>
                                    <button class="ql-list" value='ordered' title="有序列表"></button>
                                    <button class="ql-list" value="bullet" title="无序列表"></button>
                                </div>
                                <div class='ql-formats'>
                                    <!-- 自定义上传图片按钮 -->
                                    <el-button icon="el-icon-picture" title="插入图片" style="font-size: 16px;" @click.stop="uploadPictureVisible = true"></el-button>
                                    <button class="ql-link" title="文章链接"></button>
                                    <button class="ql-video" title="插入视频"></button>
                                </div>
                                <div class="ql-formats">
                                    <button class="ql-clean" title="清除格式"></button>
                                    <!-- 自定义撤销和重做 -->
                                    <button class="undo" title="撤销" @click.stop="editor.history.undo()"><i class="el-icon-fa-undo"></i></button>
                                    <button class="redo" title="重做" @click.stop="editor.history.redo()"><i class="el-icon-fa-repeat"></i></button>
                                </div>
                                <!-- 自定义保存状态 -->
                                <div class="draftSave" :class="{on : isSave}"></div>
                            </div>
                        </my-sticky>
                    </quill-editor>
                </div>
            </div>

            <div class="edit">
                <div class="cover edit-cell">
                    <div class="cover-label">封面</div>
                    <div class="cover-input">
                        <div class="select-radio">
                            <el-radio-group v-model="cover_mode">
                                <el-radio :label="1">单图</el-radio>
                                <el-radio :label="3">三图</el-radio>
                            </el-radio-group>
                        </div>
                        <!-- 单图 -->
                        <div class="cover-images"> 
                            <template v-for="(item,index) in cover_mode">
                                <div class="cover-img" v-if="coverImages[index]" @click="openSelectPicture(index)">
                                    <img :src="coverImages[index]">
                                </div>
                                <div class="cover-add" v-else @click="openSelectPicture(index)">
                                    <i class="el-icon-plus"></i>
                                </div>
                            </template>
                        </div>
                        <!-- 提示 -->
                        <div class="cover-tip">优质的封面有利于推荐，请使用清晰度较高的图片，避免使用GIF、带大量文字的图片。</div>
                    </div>
                </div>
                <div class="control edit-cell">
                    <el-button type='primary' size='large' @click.stop="verify('publish')">发表</el-button>
                    <el-button class="gray" type='primary' size='large' @click.stop="verify('draft')">存草稿</el-button>
                    <el-button class="gray" type='primary' size='large' @click.stop="openPreview">预览</el-button>
                    <el-button class="gray" type='primary' size='large' @click.stop="$router.go(-1)">取消</el-button>
                </div>
            </div>
        </div>

        <!-- 自定义上传图片 -->
        <upload-picture  v-if="uploadPictureVisible" @complete="inserPicture" @close="uploadPictureVisible = false"></upload-picture>

        <!-- 选择封面图 -->
        <select-picture v-if="selectPictureVisible" :json="contentImages"  @complete="inserCover" @close="selectPictureVisible = false"></select-picture>

        <!-- 预览 -->
        <preview-article v-if="previewVisible" :json="previewJson" @close="previewVisible = false"></preview-article>
    </div>
</template>
<script>
import { get_local_cache, set_local_cache, remove_local_cache } from '@/utils/cache.js'
import uploadPicture from './uploadPicture'
import selectPicture from './selectPicture'
import previewArticle from './preview'
export default {
    name: 'upload',
    components: { uploadPicture, selectPicture, previewArticle },
    data() {
        return {
            editorOption: {
                theme: 'snow',
                modules: {
                    toolbar: '#toolbar',
                    history: {
                        delay: 2000,
                        maxStack: 500,
                        userOnly: true
                    }
                },
                placeholder: ' '
            },
            draft: false,                           // 草稿toggle
            isSave: false,                          // 保存toggle
            isChange: false,                        // 内容是否发生改变
            title: '',                              // 标题
            content: '',                            // 正文
            uploadPictureVisible: false,            // 自定义图片上传dialog的toggle
            selectPictureVisible: false,            // 选择封面图dialog的toggle
            previewVisible: false,                  // 预览文章dialog的tiggle
            cover_mode: 1,                          // 封面模式：单图 / 三图
            contentImages: [],                      // 正文里的图片
            clickIndex: '',                         // 选中的封面图片index
            coverImages: [],                        // 选择完成的封面图片
            previewJson: {}                         // 预览数据
        }
    },
    computed: {
        editor() {
            return this.$refs.myQuillEditor.quill
        },
        article(val) {
            return this.title + this.content
        }
    },
    watch: {
        article(val) {
            this.isChange = true
            if (this.draft) {
                this.isChange = false
            }
            this.handleDraft('set')
        },
        ischange(val) {
            if (val) {
                window.addEventListener('beforeunload', this.listenFreshClose)
            }
        }
    },
    methods: {
        // 处理草稿
        handleDraft(type) {
            if (type === 'get') {
                let draft = JSON.parse(get_local_cache('draft'))
                if (draft && (draft.title || draft.content)) {
                    this.draft = true
                    this.title = draft.title
                    this.content = draft.content
                }
            } else if (type === 'set') {
                let data = {
                    time: new Date(),
                    title: this.title,
                    content: this.content
                }
                set_local_cache('draft', data)
                this.isSave = true
                let timer = setTimeout(() => {
                    this.isSave = false
                    clearTimeout(timer)
                }, 1500)
            } else if (type === 'remove') {
                remove_local_cache('draft')
                this.draft = false
                this.title = this.content = ''
            }
        },
        // 查找正文全部图片
        openSelectPicture(index) {
            let allImg = []
            this.clickIndex = index
            this.editor.container.querySelectorAll('img').forEach(item => {
                allImg.push(item.src)
            })
            this.contentImages = allImg
            this.selectPictureVisible = true
        },
        openPreview() {
            if (this.onlyTitleRule()) {
                this.previewJson = {
                    title: this.title,
                    content: this.content,
                    cover_mode: this.cover_mode,
                    coverImages: this.coverImages,
                    createdTime: new Date()
                }
                this.previewVisible = true
            }
        },
        // 插入图片
        inserPicture(files) {
            this.editor.focus()
            files.forEach((item, index) => {
                if (item) {
                    this.editor.insertEmbed(this.editor.getSelection().index + index, 'image', item)
                }
            })
            // 设置光标为末尾
            this.editor.setSelection(this.editor.getSelection().index + 1)
        },
        // 插入封面图
        inserCover(val) {
            if (val) {
                this.coverImages[this.clickIndex] = val
            }
        },
        // 验证
        verify(type) {
            if (type === 'publish') {
                if (this.allRule()) {
                    this.$confirm('确定发表文章？', '提示', {
                        confirmButtonText: '确定',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        this.$notify.success('发表成功')
                    }).catch(() => {
                        console.log('cancle')
                    })
                }
            } else if (type === 'draft') {
                if (this.onlyTitleRule()) {
                    this.$notify.success('已存为草稿')
                }
            }
        },
        // 所有规则
        allRule() {
            if (!this.title) {
                this.$message.error('标题不能为空')
            } else if (this.title.length < 5) {
                this.$message.error('标题长度不能低于5个字')
            } else if (this.title.length > 30) {
                this.$message.error('标题长度不能超过30个字')
            } else if (!this.content) {
                this.$message.error('正文不能为空')
            } else if (!this.coverImages.length > 0) {
                this.$message.error('封面图片不能为空')
            } else if (this.cover_mode === 3 && this.coverImages.length < 3) {
                this.$message.error('封面图片不能少于3张')
            } else {
                return true
            }
        },
        // 标题规则
        onlyTitleRule() {
            if (!this.title) {
                this.$message.error('标题不能为空')
            } else if (this.title.length < 5) {
                this.$message.error('标题长度不能低于5个字')
            } else if (this.title.length > 30) {
                this.$message.error('标题长度不能超过30个字')
            } else {
                return true
            }
        },
        // 监听刷新和关闭窗口
        listenFreshClose(e) {
            e.returnValue = '您将离开页面，可能会丢失正在编辑的内容'
        }
    },
    mounted() {
        this.handleDraft('get')
    },
    beforeDestroy() {
        window.removeEventListener('beforeunload', this.listenFreshClose)
    },
    // 离开路由钩子
    beforeRouteLeave (to, from, next) {
        if (this.isChange && (this.title || this.content)) {
            this.$confirm('要离开本页面吗？系统将可能不会保存你做的更改', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            })
            .then(() => {
                next()
                window.removeEventListener('beforeunload', this.listenFreshClose)
            })
            .catch(() => {
                next(false)
            })
        } else {
            next()
            window.removeEventListener('beforeunload', this.listenFreshClose)
        }
    }
}
</script>
<style lang='stylus'>
#upload {
    position: relative;
    width: 100%;
    .wrapper{
        width: 80%;
        .recovery{
            background: rgba(254,133,0,0.95);
            font-size: 14px;
            color: #fff;
            margin-bottom: 10px;
            animation: slideDown 5s ease;
            height: 0px;
            line-height: 40px;
            padding: 0 15px;
            overflow: hidden;
            .cancle{
                color: #4d7dd2;
                margin-left: 8px;
            }
        }
        .writer {
            position: relative;
            border: 1px solid #e9e9e9;
            .title {
                position: relative;
                width: 100%;
                height: 58px;
                line-height: 58px;
                input {
                    width: 100%;
                    height: 100%;
                    border: none;
                    outline: none;
                    color: #595959;
                    font-size: 20px;
                    padding-left: 20px;
                    padding-right: 80px;
                    font-weight: 700;
                }
                .title-count {
                    position: absolute;
                    width: 80px;
                    height: 100%;
                    top: 0;
                    right: 0;
                    color: #999;
                    font-size: 14px;
                    padding: 0 10px;
                    text-align: right;
                    &.error {
                        color: #ff4949;
                    }
                }
            }
            .content {
                .quill-editor {
                    .ql-toolbar.ql-snow {
                        border: none;
                        background: #eee;
                    }
                    .ql-toolbar {
                        border-bottom: 1px solid #e9e9e9 !important;
                        .undo, .redo {
                            color: #555;
                            &:hover{
                                color: #06c;
                            }
                            i{
                                color: inherit;
                            }
                        }
                    }
                    .ql-container {
                        height: 600px;
                        font-size: 16px;
                        color: #5D5D5D;
                        border: none;
                    }
                    .ql-formats {
                        padding-right: 20px;
                        border-right: 1px solid #D8D8D8;
                        button {
                            width: 30px;
                            height: 26px;
                            outline: none;
                            &:hover{
                                color: #06c;
                            }
                            i{
                                font-size: 17px;
                                color: #555;
                            }
                        }
                        .el-picture{
                            font-size: 20px;
                        }
                    }
                    h1 {
                        position: relative;
                        font-size: 18px;
                        line-height: 24px;
                        font-weight: 700;
                        padding-left: 12px;
                        &:after {
                            content: "";
                            width: 4px;
                            height: 18px;
                            background: #f85959;
                            top: 3px;
                            position: absolute;
                            left: 0;
                        }
                    }
                    img {
                        display: block;
                        margin: 0 auto;
                        margin-bottom: 1em;
                    }
                }
                .draftSave{
                    float: right;
                    margin-top: 9px;
                    font-size: 13px;
                    color: #9e9e9e;
                    margin-right: 12px;
                    &:before{
                        content: "已保存"
                    }
                    &.on:before{
                        content: "保存中..."
                    }
                }
            }
        }
        .edit {
            margin: 50px 0;
            .edit-cell {
                width: 100%;
                margin-bottom: 30px;
            }
            .cover{
                .el-radio{
                    color: #999;
                    .el-radio__label {
                        padding-left: 10px;
                    }
                }
                .cover-label {
                    float: left;
                    width: 122px;
                    font-size: 16px;
                }
                .cover-input {
                    margin-left: 122px;
                    font-size: 14px;
                    color: #999;
                    .select-radio {
                        margin-bottom: 16px;
                    }
                    .cover-images{
                        .cover-add,.cover-img{
                            position: relative;
                            width: 150px;
                            height: 105px;
                            margin-right: 20px;
                            display: inline-block;
                            cursor: pointer;
                            border-radius: 4px;
                            overflow: hidden;
                            img{
                                width: 100%;
                                min-height: 105px;
                            }
                        }
                        .cover-add{
                            position: relative;
                            width: 150px;
                            height: 105px;
                            margin-right: 20px;
                            display: inline-block;
                            cursor: pointer;
                            border-radius: 4px;
                            overflow: hidden;
                            background-color: #f0f1f3;
                            i{
                                position: absolute;
                                left: 50%;
                                top: 50%;
                                font-size: 20px;
                                margin-left: -.5em;
                                margin-top: -.5em;
                            }
                        }
                    }
                }
                .cover-tip {
                    padding-top: 10px;
                }
            }
            .control {
                padding-left: 122px;
                margin-bottom: 50px;
                button{
                    font-size: 16px;
                    width: 140px;
                    line-height: 1;
                }
                .gray{
                    background-color: #f1f1f1;
                    color: #a4a4a4;
                    border-color: #f1f1f1;
                    &:hover{
                        background-color: #e4e4e4;
                        color: #989898;
                        border-color: #e4e4e4;
                    }
                }
            }
        }
    }
    .img-list{
        .img-item{
            width: 150px;
            height: 120px;
            position: relative;
            display: inline-block;
            border: 1px solid #e8e8e8;
            margin: 10px;
            cursor: pointer;
            label{
                width: 100%;
                height: 100%
                &.is-active:before,&.is-checked:before{
                    content: "";
                    display: block;
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 1;
                    background-color: rgba(0,0,0,.5);
                    background-position: 100% 0;
                    background-repeat: no-repeat;
                    text-align: center;
                    color: #fffacd;
                }
                &.is-active:after,&.is-checked:after{
                    content: '';
                    display: block;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -moz-transform: translate(-50%,-50%);
                    -ms-transform: translate(-50%,-50%);
                    transform: translate(-50%,-50%);
                    -webkit-transform: translate(-50%,-50%);
                    z-index: 2;
                    font-size: 30px;
                    color: #fffacd;
                }
            }
            span{
                width: 100%;
                height: 100%;
                padding: 0;
                border: none;
                background-color: #fff;
            }
            img {
                position: absolute;
                top: 0;
                bottom: 0;
                left: 0;
                right: 0;
                max-width: 100%;
                max-height: 100%;
                margin: auto;
                user-select: none;
            }
        }
    }
}
</style>
<style type="text/css" media="screen">
.img-list .img-item label.is-active:before, .img-list .img-item label.is-checked:before{
    background-image: url(~@/assets/img/checked.png);
} 
</style>
