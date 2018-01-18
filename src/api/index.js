import { request, instance } from '@/utils/request'

// 登录
export function getLogin(form) {
    let res = request('/login', 'POST', form)
    return res
}

// 用户信息
export function getUser(token) {
    let res = request('/user', 'GET', token)
    return res
}

// 列表
export function getList() {
    let res = request('/list', 'GET')
    return res
}

// 图片
export async function getPicture(data) {
    let res = await instance.get('http://api.toutiaojk.com/e/extend/jkh/picsearch', { params: data })
    return res.data
}
