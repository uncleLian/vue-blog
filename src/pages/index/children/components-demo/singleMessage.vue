<template>
    <div id="singleMessage">
        <div class="app-introduce">
            {{$t('singleMessage.description')}}
            <a>@/utils/singleMessage</a>
            <p>{{$t('singleMessage.tip')}}</p>
        </div>
        <el-button type="info" @click="handleOptionMessage('info')">Info</el-button>
        <el-button type="success" @click="handleOptionMessage('success')">Success</el-button>
        <el-button type="warning" @click="handleTypeMessage('warning')">Warning</el-button>
        <el-button type="danger" @click="handleTypeMessage('error')">Error</el-button>
    </div>
</template>
<script>
import singleMessage from '@/utils/singleMessage'
export default {
    name: 'singleMessage',
    data() {
        return {
        }
    },
    methods: {
        handleOptionMessage(val) {
            let option = {
                'type': val,
                'message': val
            }
            singleMessage(option)
        },
        handleTypeMessage(val) {
            singleMessage[val](val)
        }
    }
}
</script>
