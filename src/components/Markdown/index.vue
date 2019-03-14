<template>
    <div :id="id"></div>
</template>
<script>
import 'codemirror/lib/codemirror.css' // codemirror
import 'tui-editor/dist/tui-editor.css' // editor ui
import 'tui-editor/dist/tui-editor-contents.css' // editor content
import 'tui-color-picker/dist/tui-color-picker.css' // editor content
import 'highlight.js/styles/github.css' // editor content
// import Editor from 'tui-editor'
import Editor from 'tui-editor/dist/tui-editor-Editor-all.js' // all （chart...）
export default {
    props: {
        value: {
            type: String,
            default: ''
        },
        height: {
            type: Number,
            default: 360
        },
        language: {
            type: String,
            default: 'zh_CN'
        }
    },
    data() {
        return {
            editor: '',
            id: `vue-markdown-tui.editor-${new Date().getTime()}`,
            options: {
                height: this.height,
                initialValue: this.value,
                previewStyle: 'vertical',
                language: this.language,
                useCommandShortcut: true,
                useDefaultHTMLSanitizer: true,
                usageStatistics: false, // 禁止收集数据
                hideModeSwitch: false,
                toolbarItems: ['heading', 'bold', 'italic', 'strike', 'divider', 'hr', 'quote', 'divider', 'ul', 'ol', 'task', 'indent', 'outdent', 'divider', 'table', 'image', 'link', 'divider', 'code', 'codeblock'],
                exts: [
                    {
                        name: 'chart',
                        minWidth: 100,
                        maxWidth: 600,
                        minHeight: 100,
                        maxHeight: 300
                    },
                    'scrollSync',
                    'colorSyntax',
                    'uml',
                    'mark',
                    'table'
                ]
            }
        }
    },
    watch: {
        language(val) {
            console.log(this.editor)
            this.destroyEditor()
            this.$nextTick(() => {
                this.options.language = val
                this.initEditor()
            })
        }
    },
    mounted() {
        this.initEditor()
    },
    methods: {
        initEditor() {
            this.editor = new Editor({
                el: document.getElementById(this.id),
                ...this.options
            })
            this.editor.on('change', () => {
                this.$emit('input', this.editor.getValue())
            })
        },
        destroyEditor() {
            if (!this.editor) return
            this.editor.off('change')
            this.editor.remove()
        },
        getEditor() {
            return this.editor
        }
    }
}
</script>
