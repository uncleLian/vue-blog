<template>
    <div id="editor">
        <div class="wrapper">
            <div class="editor-writer">
                <div class="content">
                    <quill-editor v-model.trim="content" ref="myQuillEditor" :options="editorOption">
                    </quill-editor>
                </div>
            </div>

            <div class="editor-code">
                <h3>Code：</h3>
                <div class="container">
                    <h4>正文：</h4>
                    <p class="text">{{content}}</p>
                </div>
            </div>

            <div class="moreLink">
                <p>自定义图片上传、草稿等功能：<router-link :to="{name: 'upload'}">请参考综合实例里的upload组件</router-link></p>
                <p>更多内容：<a href="https://github.com/surmon-china/vue-quill-editor" target="_blank">vue-quill-editor</a></p>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.snow.css'
Vue.use(VueQuillEditor)
export default {
    name: 'editor',
    data() {
        return {
            content: '',
            editorOption: {
                theme: 'snow',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],
                        ['blockquote', 'code-block'],
                        [{ 'header': 1 }, { 'header': 2 }],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'script': 'sub' }, { 'script': 'super' }],
                        [{ 'indent': '-1' }, { 'indent': '+1' }],
                        [{ 'direction': 'rtl' }],
                        [{ 'size': ['small', false, 'large', 'huge'] }],
                        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                        [{ 'font': [] }],
                        [{ 'color': [] }, { 'background': [] }],
                        [{ 'align': [] }],
                        ['clean'],
                        ['link', 'image', 'video']
                    ]
                },
                placeholder: ' '
            }
        }
    }
}
</script>
<style lang='stylus'>
#editor {
    padding: 0 10px;
    .wrapper{
        width: 80%;
        .editor-writer {
            position: relative;
            border: 1px solid #e9e9e9;
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
            .text{
                word-wrap : break-word;
                word-break: break-all;
            }
            h4{
                color: #f85959;
            }
        }
    }
}
</style>
