<template>
    <el-dialog v-bind="$attrs" v-on="$listeners" width="40%" append-to-body>
        <el-form v-loading="loading" :model="form" :rules="rules" ref="ruleForm" label-position="top">
            <el-form-item prop="originalPwd" :label="$t('updateUserPassword.orginPassword')">
                <el-input v-model="form.originalPwd" auto-complete="off" type="password" show-password clearable :disabled="disabled" />
            </el-form-item>
            <el-form-item prop="newPwd" :label="$t('updateUserPassword.newPassword')">
                <el-input v-model="form.newPwd" auto-complete="off" type="password" show-password clearable />
            </el-form-item>
            <el-form-item prop="againNewPwd" :label="$t('updateUserPassword.againNewPassword')">
                <el-input v-model="form.againNewPwd" auto-complete="off" type="password" show-password clearable />
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
        const emptyErrorMsg = this.$t('updateUserPassword.emptyErrorMsg')
        return {
            form: {
                originalPwd: '',
                newPwd: '',
                againNewPwd: ''
            },
            rules: {
                originalPwd: [
                    { required: true, message: emptyErrorMsg, trigger: 'blur' }
                ],
                newPwd: [
                    { required: true, message: emptyErrorMsg, trigger: 'blur' }
                ],
                againNewPwd: [
                    { required: true, message: emptyErrorMsg, trigger: 'blur' }
                ]
            },
            loading: false
        }
    },
    methods: {
        onSubmit() {
            this.$refs['ruleForm'].validate((valid) => {
                if (valid) {
                    if (this.form.newPwd === this.form.againNewPwd) {
                        this.$emit('onSubmit', this.form)
                    } else {
                        let errorMsg = this.$t('updateUserPassword.sameErrorMsg')
                        this.$message.error(errorMsg)
                    }
                }
            })
        }
    }
}
</script>
