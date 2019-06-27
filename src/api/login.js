import { request } from '@/utils/request'

// 登录
export function getLogin(form) {
    let res = request('/api/login', 'POST', form)
    return res
}
// 用户信息
export function getUser(token) {
    let res = request('/api/user', 'POST', token)
    return res
}
