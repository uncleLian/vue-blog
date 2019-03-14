<template>
    <div id="editor">
        <div class="app-introduce">
            {{$t('editor.description')}}
            <a href="https://github.com/tinymce/tinymce" target="_blank">tinymce</a>
        </div>
        <tinymce v-model="content" :height="500" />
        <div class="result-container" v-if="content">
            <div class="editor-result" v-html="content"></div>
            <div class="editor-html">{{content}}</div>
        </div>
    </div>
</template>
<script>
import Tinymce from '@/components/Tinymce'
export default {
    name: 'editor',
    components: { Tinymce },
    data() {
        return {
            content: ``
        }
    }
}
</script>
<style lang='stylus'>
#editor {
    .result-container {
        display: flex;
        margin-top: 30px;
        .editor-result {
            width: 414px;
            height: 667px;
            font-size: 16px;
            text-align: justify;
            padding: 16px;
            border: 1px solid #ccc;
            overflow-x: hidden;
            overflow-y: auto;
            img {
                display: block;
                max-width: 100%;
                margin: 0 auto;
            }
        }
        .editor-html {
            flex: 1;
            text-align: justify;
            padding: 16px;
            margin-left: 50px;
            border: 1px solid #ccc;
        }
    }
}
</style>
