import { fetch, instance } from '@/utils/fetch.js'

// 登录
export function getLogin(form) {
    let res = fetch('/login', 'POST', form)
    return res
}

// 用户信息
export function getUser(token) {
    let res = fetch('/user', 'GET', token)
    return res
}

// 列表
export function getList() {
    let res = fetch('/list', 'GET')
    return res
}

// 图片
export async function getPicture(data) {
    let res = await instance.get('http://api.toutiaojk.com/e/extend/jkh/picsearch', { params: data })
    return res.data
}
