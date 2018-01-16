import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import cache from '@/utils/cache.js'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from './en.js'
import zhLocale from './zh.js'

Vue.use(VueI18n)

const messages = {
    zh: {
        ...zhLocale,
        ...elementZhLocale
    },
    en: {
        ...enLocale,
        ...elementEnLocale
    }
}

const i18n = new VueI18n({
    locale: 'zh',
    messages
})

export default i18n
