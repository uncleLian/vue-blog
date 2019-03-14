<template>
    <div class="guide">
        <div class="app-introduce">
            {{$t('guide.description')}}
            <a href="https://github.com/kamranahmedse/driver.js" target="_blank">driver.js</a>
        </div>
        <el-button icon="el-icon-question" type="primary" @click.prevent.stop="startGuide">{{$t('guide.button')}}</el-button>
    </div>
</template>

<script>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import steps from './steps'
export default {
    name: 'guide',
    data() {
        return {
            driver: null
        }
    },
    mounted() {
        this.driver = new Driver({
            // allowClose: false,
            padding: 0
        })
    },
    methods: {
        startGuide() {
            steps.forEach(item => {
                let key = item.popover.name
                item.popover.title = this.$t(`guide.${key}.title`)
                item.popover.description = this.$t(`guide.${key}.description`)
            })
            this.driver.defineSteps(steps)
            this.driver.start()
        }
    }
}
</script>
