import axios from 'axios'
import Cookies from 'js-cookie'

let instant = axios.create({
    baseURL: process.env.NODE_ENV === 'production' ? '/' : '/api'
});

//请求拦截
instant.interceptors.request.use(function(config) {
    let token = Cookies.get('token');
    if(token) {
        config.headers= {
            ...config.headers,
            token
        }
    }else {
        return
    }
    return config
},function (err) {
    return Promise.reject(err)
});

//响应拦截
instant.interceptors.response.use(function (res) {
    return res.data
},function (err) {
    return Promise.reject(err)
});

export default instant;