import axios from 'axios'
import qs from 'qs'
import store from '@/store'
import { Message } from 'element-ui'
import cache from '@/utils/cache'

// 创建axios实例
export const instance = axios.create({
    baseURL: process.env.BASE_API,      // api的base_url
    timeout: 10 * 1000                  // 请求超时时间
})

// request拦截器
instance.interceptors.request.use(config => {
    // Do something before request is sent
    if (store.getters.token) {
        config.headers['X-Token'] = cache.getToken() // 让每个请求携带token -- ['X-Token']为自定义key 请根据实际情况自行修改
    }
    return config
}, error => {
    // Do something with request error
    Promise.reject(error)
})

// respone拦截器
instance.interceptors.response.use(response => {
    const res = response.data
    if (res && res.error) {
        return Promise.reject(res.error)
    }
    return response
}, error => {
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error)
})

export const request = async(url = '', type = 'GET', data = {}) => {
    let result
    type = type.toUpperCase()

    if (type === 'GET') {
        await instance.get(url, { params: data })
        .then(res => {
            result = res.data
        })
    } else if (type === 'POST') {
        await instance.post(url, qs.stringify(data))
        .then(res => {
            result = res.data
        })
    }
    return result
}
