import Vue from 'vue'
import VueI18n from 'vue-i18n'
import cache from '@/utils/cache'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import enLocale from './en.js'
import zhLocale from './zh.js'

Vue.use(VueI18n)

const i18n = new VueI18n({
    locale: cache.getCookie('language') || 'zh',
    messages: {
        zh: {
            ...zhLocale,
            ...elementZhLocale
        },
        en: {
            ...enLocale,
            ...elementEnLocale
        }
    }
})

export default i18n
