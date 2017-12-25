import fetch from '@/utils/fetch.js'

export function get_list_data() {
    let res = fetch('/list', 'GET')
    return res
}
