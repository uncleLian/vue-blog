<template>
    <div id="documents">
        <div>
            <el-switch v-model="switchVal" inactive-text="documents.md" active-text="README.md" ></el-switch>
            <el-button class="githubRepertory" type="primary"><a href="https://github.com/uncleLian/vue2-blog" target="_blank">Github仓库</a></el-button>
        </div>
        <div class="markdownHTML" v-html="html"></div>
    </div>
</template>
<script>
import showdown from 'showdown'
export default {
    name: 'documents',
    data() {
        return {
            html: '',
            switchVal: false
        }
    },
    watch: {
        switchVal(val) {
            if (val) {
                import('blog//README.md').then(res => {
                    this.html = this.markdown2Html(res)
                })
            } else {
                import('blog//documents.md').then(res => {
                    this.html = this.markdown2Html(res)
                })
            }
        }
    },
    methods: {
        markdown2Html(markdown) {
            if (markdown) {
                const converter = new showdown.Converter()
                return converter.makeHtml(markdown)
            }
        }
    },
    mounted() {
        import('blog//documents.md').then(res => {
            this.html = this.markdown2Html(res)
        })
    }
}
</script>
<style lang='stylus'>
#documents {
    .githubRepertory{
        margin-left: 30px;
        a{
            color: #fff;
        }
    }
    .markdownHTML {
        width: 100%;
        padding: 20px;
        word-wrap: break-word;
        background-color: #fff;
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
