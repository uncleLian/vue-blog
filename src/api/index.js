import { request, instance } from '@/utils/request'

// Tip：
// 1、request方法适用于普遍的GET、POST方法
// 2、instance方法适用于需要做特殊处理的请求，如：自定义Header、其他的http方法等
// 3、使用解构参数，方便阅读和管理
// 4、同一请求不同参数可以另写1个function或着不使用解构参数

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
export async function getPicture({key, page}) {
    let res = await instance.get('http://api.toutiaojk.com/e/extend/jkh/picsearch', { params: {key, page} })
    return res.data
}
