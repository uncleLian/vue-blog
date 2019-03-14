<template>
    <div id="markdown">
        <div class="app-introduce">
            {{$t('markdown.description')}}
            <a href="https://github.com/nhnent/tui.editor" target="_blank">tui.editor</a>
        </div>
        <markdown-editor ref="markdownEditor" v-model="content" :height="400" :language="$store.state.language" />
        <div class="editor-result tui-editor-contents" v-html="contentHTML"></div>
    </div>
</template>
<script>
import markdownEditor from '@/components/Markdown'
export default {
    name: 'markdown',
    components: { markdownEditor },
    data() {
        return {
            content: [
                '![image](https://cloud.githubusercontent.com/assets/389021/16107646/9729e556-33d8-11e6-933f-5b09fa3a53bb.png)',
                '# Heading 1',
                '## Heading 2',
                '### Heading 3',
                '#### Heading 4',
                '##### Heading 5',
                '###### Heading 6',
                '***',
                '    code block',
                '```js',
                'console.log("fenced code block");',
                '```',
                '<pre>**HTML block**</pre>',
                '* list',
                '    * list indented',
                '1. ordered',
                '2. list',
                '    1. ordered list',
                '    2. indented',
                '',
                '- [ ] task',
                '- [x] list completed',
                '',
                '[link](https://nhnent.github.io/tui.editor/)',
                '> block quote',
                '---',
                'horizontal line',
                '***',
                '`code`, *italic*, **bold**, ~~strikethrough~~, <span style="color:#e11d21">Red color</span>',
                '|table|head|',
                '|---|---|',
                '|table|body|',
                '| @cols=2:merged |',
                '| --- | --- |',
                '| table | table |',
                '```chart',
                ',category1,category2',
                'Jan,21,23',
                'Feb,31,17',
                '',
                'type: column',
                'title: Monthly Revenue',
                'x.title: Amount',
                'y.title: Month',
                'y.min: 1',
                'y.max: 40',
                'y.suffix: $',
                '```'
            ].join('\n'),
            contentHTML: ''
        }
    },
    watch: {
        content(val) {
            this.contentHTML = this.$refs.markdownEditor.getEditor().getHtml()
        }
    },
    mounted() {
        this.contentHTML = this.$refs.markdownEditor.getEditor().getHtml()
    }
}
</script>
<style lang='stylus'>
#markdown {
    .editor-result {
        margin-top: 20px;
    }
}
</style>
