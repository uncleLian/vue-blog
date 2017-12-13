<template>
    <div id="editor">
        <div class="wrapper">
            <!-- 草稿 -->
            <div class="editor-recovery" v-if="draft">
                已从草稿中恢复
                <el-button type="text" class="cancle" @click.stop="removeDraft">撤销</el-button>
            </div>

            <div class="editor-writer">
                <!-- title -->
                <div class="title">
                    <input type='text' placeholder="标题 (5-30个字符)" v-model.trim="title">
                    <div class="title-count" :class="{'error': (title.length < 5 || title.length > 30) && title.length > 0}">{{title.length}} / 30</div>
                </div>
                <!-- content -->
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
                                    <button class="ql-image" title="插入图片"></button>
                                    <button class="ql-link" title="文章链接"></button>
                                    <button class="ql-video" title="插入视频"></button>
                                </div>
                                <div class="ql-formats">
                                    <button class="ql-clean" title="清除格式"></button>
                                    <!-- 自定义图标和操作 -->
                                    <button class="undo" title="撤销" @click.stop="editor.history.undo()"></button>
                                    <button class="redo" title="重做" @click.stop="editor.history.redo()"></button>
                                </div>
                                <div class="draftSave" :class="{on : isSave}"></div>
                            </div>
                        </my-sticky>
                    </quill-editor>
                </div>
            </div>

            <div class="editor-code">
                <h3>Code：</h3>
                <div class="container">
                    <h4>标题：</h4>
                    <div>{{title}}</div>
                    <h4>正文：</h4>
                    <div>{{content}}</div>
                </div>
            </div>

            <div class="moreLink">
                <p>自定义图片上传：<a href="https://github.com/uncleLian/vue2-health" target="_blank">请参考项目里publish.vue组件</a></p>
                <p>更多内容：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a></p>
            </div>
        </div>
    </div>
</template>
<script>
import { get_local_cache, set_local_cache, remove_local_cache } from '@/utils/cache.js'
export default {
    name: 'editor',
    data() {
        return {
            draft: false,
            isSave: false,
            title: '',
            content: '',
            editorOption: {
                theme: 'snow',
                modules: {
                    toolbar: '#toolbar',    // slot方式：更多的自定义扩展
                    // 代码方式
                    // toolbar: [
                    //     ['bold', 'italic', 'underline', 'strike'],
                    //     ['blockquote', 'code-block'],
                    //     [{ 'header': 1 }, { 'header': 2 }],
                    //     [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    //     [{ 'script': 'sub' }, { 'script': 'super' }],
                    //     [{ 'indent': '-1' }, { 'indent': '+1' }],
                    //     [{ 'direction': 'rtl' }],
                    //     [{ 'size': ['small', false, 'large', 'huge'] }],
                    //     [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    //     [{ 'font': [] }],
                    //     [{ 'color': [] }, { 'background': [] }],
                    //     [{ 'align': [] }],
                    //     ['clean'],
                    //     ['link', 'image', 'video']
                    // ],
                    history: {
                        delay: 2000,
                        maxStack: 500,
                        userOnly: true
                    }
                },
                placeholder: ' '
            }
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
            this.setDraft()
        }
    },
    methods: {
        // 获取草稿
        getDraft() {
            let draft = JSON.parse(get_local_cache('draft'))
            if (draft && (draft.title || draft.content)) {
                this.draft = true
                this.title = draft.title
                this.content = draft.content
            }
        },
        // 设置草稿
        setDraft() {
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
        },
        // 移除草稿
        removeDraft() {
            remove_local_cache('draft')
            this.draft = false
            this.title = this.content = ''
        }
    },
    mounted() {
        this.getDraft()
    }
}
</script>
<style lang='stylus'>
#editor {
    padding: 0 10px;
    .wrapper{
        width: 80%;
        .editor-recovery{
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
        .editor-writer {
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
                    }
                    .ql-container {
                        height: 200px;
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
        .editor-code{
            width: 100%;
            margin: 50px 0;
            .container{
                border: 1px solid #e9e9e9;
                padding: 12px 15px;
                font-size: 14px;
                color: #5d5d5d;
            }
            h4{
                color: #f85959;
            }
        }
    }
}
</style>
<style>
#editor .undo {
    background: url(~@/assets/img/laststep.png)no-repeat center center;
}
#editor .undo.nothing {
    opacity: 0.3;
}
#editor .redo {
    background: url(~@/assets/img/nextstep.png)no-repeat center center;
}
#editor .redo.nothing {
    opacity: 0.3;
}
@keyframes slideDown {
    6%{
        height: 40px;
    }
    94% {
        height: 40px;
    }
    100% {
        height: 0;
    }
}
</style>
