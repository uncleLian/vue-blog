// 翻译字段 ？翻译 ： 原值
export function translation(name, key) {
    let res = name
    if (this.$te(`${key}.${name}`)) {
        res = this.$t(`${key}.${name}`)
    }
    return res
}
