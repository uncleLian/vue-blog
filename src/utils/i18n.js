export function translationRouteTitle(title) {
    let res = title
    if (this.$te('route.' + title)) {
        res = this.$t('route.' + title)
    }
    return res
}
