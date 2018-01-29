// 通过此方法是为了，无翻译值时返回原值
// 翻译字段 ？翻译 ： 原值
export function translation(name, key) {
    let res = name
    if (this.$te(`${key}.${name}`)) {
        res = this.$t(`${key}.${name}`)
    }
    return res
}
