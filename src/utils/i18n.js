export function formatLanguage(name, key) {
    if (key) {
        return this.$t(`${key}.${name}`)
    } else {
        return this.$t(name)
    }
}
