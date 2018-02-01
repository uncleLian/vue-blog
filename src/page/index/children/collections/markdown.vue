<template>
    <div id="markdown">
        <div class="myREADME">复制过来看一看效果：<a href="https://github.com/uncleLian/vue2-blog/edit/master/README.md" target="_blank">README.md</a></div>
        <textarea id="simplemde"></textarea>
        <div style="margin-top: 20px;">
            <el-button type="primary" @click="markdown2Html">转化为 HTML</el-button>
            <div class="markdownHTML" v-html="html"></div>
        </div>
        <div class="moreLink">
            <p>更多内容：
                <a href="https://github.com/sparksuite/simplemde-markdown-editor" target="_blank">simplemde-markdown-editor（markdown编辑器）</a>
                <a href="https://github.com/showdownjs/showdown" target="_blank">showdown（markdown语法转HTML结构）</a>
            </p>
            <p>额外内容：
                <a href="https://github.com/dfenstermaker/text-loader" target="_blank">text-loader（将.md内容转成String）</a>
                <a href="https://github.com/peerigon/markdown-loader" target="_blank">markdown-loader（将.md输出为.html）</a>
            </p>
        </div>
    </div>
</template>
<script>
import 'font-awesome/css/font-awesome.min.css'
import 'simplemde/dist/simplemde.min.css'
import SimpleMDE from 'simplemde/dist/simplemde.min.js'
export default {
    name: 'markdown',
    data() {
        return {
            simplemde: null,
            content: '',
            html: ''
        }
    },
    methods: {
        markdownInit() {
            this.simplemde = new SimpleMDE({
                element: document.getElementById('simplemde'),
                toolbar: ['heading-1', 'bold', 'italic', 'strikethrough', '|', 'quote', 'unordered-list', 'ordered-list', '|', 'link', 'image', 'table', '|', 'preview', 'side-by-side', 'fullscreen', '|', 'guide'],
                autoDownloadFontAwesome: false,
                autofocus: false,
                autosave: {
                    enabled: true,
                    uniqueId: 'simplemde',
                    delay: 1000
                },
                promptURLs: true,
                spellChecker: false,
                placeholder: ''
            })
            this.simplemde.value(this.content)
            this.simplemde.codemirror.on('change', () => {
                this.content = this.simplemde.value()
            })
        },
        markdown2Html() {
            /* eslint-disable */
            if (this.content) {
                import ('showdown').then(showdown => {
                    const converter = new showdown.Converter()
                    this.html = converter.makeHtml(this.content)
                    this.$message.success('转化成功')
                })
            } else {
                this.$message.warning('没有内容')
            }
        }
    },
    mounted() {
        this.markdownInit()
    }
}
</script>
<style lang='stylus'>
#markdown {
    width: 80%;
    .myREADME{
        margin-bottom: 20px;
    }
    .CodeMirror {
        height: 200px;
    }
    .CodeMirror-scroll {
        min-height: 200px;
    }
    .CodeMirror,
    .editor-preview-side {
        padding: 20px;
    }
    .editor-toolbar {
        a {
            font-size: 16px;
        }
    }
    .CodeMirror-code {
        .cm-link {
            color: #42b983;
        }
        .cm-url {
            color: #F56C6C;
            font-weight: bold;
        }
    }
    /*编辑器下方状态栏*/
    /*.editor-statusbar {
      display: none;
    }*/
    .markdownHTML {
        margin-top: 30px;
        width: 100%;
        padding: 30px 35px;
        word-wrap: break-word;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 3px;
    }
    .markdownHTML,
    .editor-preview-side {
        h1, h2, h3, h4, h5, h6 {
            margin-top: 24px;
            margin-bottom: 16px;
            font-weight: 600;
        }
        p {
            margin-top: 0;
            margin-bottom: 16px;
        }
        pre {
            padding: 16px;
            background-color: #f6f8fa;
            border-radius: 3px;
        }
        blockquote {
            padding: 0 1em;
            border-left: 0.25em solid #dfe2e5;
            margin-left: 0;
            margin-right: 0;
        }
    }
}
</style>
