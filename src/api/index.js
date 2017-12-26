import { fetch, instance } from '@/utils/fetch.js'

export function get_list_data() {
    let res = fetch('/list', 'GET')
    return res
}

export async function get_picture_data(data) {
    let res = await instance.get('http://api.toutiaojk.com/e/extend/jkh/picsearch', {params: data})
    return res.data
}
