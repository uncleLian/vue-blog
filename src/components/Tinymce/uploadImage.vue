<template>
    <el-dialog class="uploadPicture" :visible.sync="visible" title="上传图片">
        <div>
            <el-upload ref="upload" action="https://httpbin.org/post" list-type="picture-card" :multiple="true" :before-upload="uploadBefore" :on-success="onSuccess" :on-error="onError" :on-remove="onRemove" :on-preview="onPreview">
                <i class="el-icon-plus"></i>
            </el-upload>
            <el-dialog :visible.sync="preViewVisible" :modal="false" append-to-body :width="preViewDialogWidth" :title="preViewImageSize">
                <img ref="previewImg" width="100%" :src="preViewURL">
            </el-dialog>
        </div>
        <!-- footer -->
        <div slot="footer">
            <el-button class="cancle_btn" @click="visible = false">取 消</el-button>
            <el-button type="primary" @click="complete">确 定</el-button>
        </div>
    </el-dialog>
</template>
<script>
export default {
    name: 'uploadPicture',
    data() {
        return {
            uploadFileList: [],
            visible: true,
            preViewVisible: false,
            preViewURL: '',
            preViewDialogWidth: '',
            preViewImageSize: ''
        }
    },
    watch: {
        visible(val) {
            if (!val) {
                this.$emit('close', false)
            }
        }
    },
    methods: {
        // 上传图片前检查格式、大小
        uploadBefore(file) {
            const isImg = file.type === 'image/jpeg' || file.type === 'image/png' || file.type === 'image/gif'
            const isLt2M = file.size / 1024 / 1024 < 5
            if (!isImg) {
                this.$message.error('目前只支持 jpg / png / gif 的图片格式')
            } else if (!isLt2M) {
                this.$message.error('上传图片大小不能超过 2MB')
            }
            return isImg && isLt2M
        },
        // 上传成功钩子
        onSuccess(response, file, fileList) {
            this.uploadFileList = fileList
        },
        // 上传失败钩子
        onError(err, file, fileList) {
            console.log('上传图片失败', err)
            this.$message.error('上传失败，请重新尝试!')
        },
        // 移除上传图片钩子
        onRemove(file, fileList) {
            this.uploadFileList = fileList
        },
        // 预览上传图片钩子
        onPreview(file) {
            let screenWidth = window.innerWidth
            let img = new Image()
            img.src = this.preViewURL = file.url
            let timeout = setInterval(() => {
                if (img.width && img.height) {
                    let previewWidth = img.width + 40 // body: 40padding
                    if (previewWidth > screenWidth) {
                        this.preViewDialogWidth = '100%'
                    } else if (previewWidth < 300) {
                        this.preViewDialogWidth = 300 + 'px'
                    } else {
                        this.preViewDialogWidth = previewWidth + 'px'
                    }
                    this.preViewImageSize = img.width + 'x' + img.height
                    clearInterval(timeout)
                }
            }, 50)
            this.preViewVisible = true
        },
        // 上传完成或选择完成
        complete() {
            let uploadPicture = []
            let isUploadComplete = true
            this.uploadFileList.forEach((item, index) => {
                if (item.response) {
                    uploadPicture.push(item.response.files.file)
                } else {
                    isUploadComplete = false
                }
            })
            if (!isUploadComplete) {
                this.$message.warning('部分图片没有上传成功，请重新尝试')
            }
            this.$emit('complete', uploadPicture)
            this.visible = false
        }
    }
}
</script>
<style lang='stylus'>
.uploadPicture {
    .el-upload-list__item-thumbnail {
        width: auto;
        height: auto;
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
</style>
