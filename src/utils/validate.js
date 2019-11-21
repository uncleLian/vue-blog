/**
 * @param   {String}    path
 * @returns {Boolean}
 */
// 是否外链
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}
