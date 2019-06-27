/**
 * @param   {String}    path
 * @returns {Boolean}
 */
export function isExternal(path) {
    return /^(https?:|mailto:|tel:)/.test(path)
}
