<template>
    <el-dialog v-bind="$attrs" v-on="$listeners" width="40%" append-to-body>
        <el-form v-loading="loading" :model="form" :rules="rules" ref="ruleForm" label-position="top">
            <el-form-item prop="nickname" :label="$t('updateUserInfo.nickName')">
                <el-input v-model="form.nickname" clearable auto-complete="off" />
            </el-form-item>
            <el-form-item :label="$t('updateUserInfo.roleName')">
                <el-tag type="primary">{{form.roles}}</el-tag>
            </el-form-item>
        </el-form>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" icon="el-icon-circle-check" @click="onSubmit">{{$t('dialog.update')}}</el-button>
            <el-button icon="el-icon-circle-close" @click="$emit('update:visible', false)">{{$t('dialog.cancle')}}</el-button>
        </span>
    </el-dialog>
</template>
<script>
export default {
    props: {
        json: {
            type: Object
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
    data() {
        const emptyErrorMsg = this.$t('updateUserInfo.emptyErrorMsg')
        return {
            form: {
                nickname: ''
            },
            rules: {
                nickname: [
                    { required: true, message: emptyErrorMsg, trigger: 'blur' }
                ]
            },
            loading: false
        }
    },
    created() {
        if (this.json) {
            this.form = { ...this.json }
        }
    },
    methods: {
        onSubmit() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    this.$emit('onSubmit', this.form)
                }
            })
        }
    }
}
</script>
