import axios from 'axios'
import { Message } from 'element-ui'
import cache from '@/utils/cache'

export const instance = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    timeout: 20 * 1000
})

// request
instance.interceptors.request.use(config => {
    if (cache.getToken()) {
        config.headers['Authorization'] = `Bearer ${cache.getToken()}`
    }
    return config
}, error => {
    Promise.reject(error)
})

// response
instance.interceptors.response.use(response => {
    const res = response.data
    // 自定义报错规则
    if (res && res.errorMessage) {
        return Promise.reject(res.errorMessage)
    }
    return Promise.resolve(res)
}, error => {
    // 请求直接报错
    Message({
        message: error.message,
        type: 'error',
        duration: 3 * 1000
    })
    return Promise.reject(error)
})

/*
* request方法（统一axios请求方法的格式）
* url       请求URL
* type      请求类型
* data      参数
* isForm    是否表单数据
*/
export const request = async (url = '', type = 'GET', data = {}, isForm = false) => {
    let result
    type = type.toUpperCase() // 转为大写
    let requestOptions = {
        method: type,
        url: url
    }
    if (isForm) {
        let form = new FormData()
        Object.keys(data).forEach(key => {
            console.log('key', key)
            form.append(key, data[key])
        })
        data = form
    }
    requestOptions['headers'] = {
        'Content-type': isForm ? 'multipart/form-data' : 'application/json'
    }
    if (type === 'GET') {
        requestOptions['params'] = data
    } else {
        requestOptions['data'] = data
    }
    await instance(requestOptions).then(res => {
        result = res
    })
    return result
}
