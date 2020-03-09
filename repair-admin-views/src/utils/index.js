import axios from 'axios';
import { Message } from 'element-ui';

const fetch = axios.create({
    baseURL: ''  //基础路径，开发和线上是不一样的，我们可以通过配置webpack文件进行配置
});

fetch.interceptors.response.use(res => {
    if(res.data.code != 200) {
        Message.error(res.data.msg())
    }
    return res.data
});    //配置一个响应拦截


// 我们也可以把axios请求文件封装成一个组件

export default {
    install(Vue) {
        Vue.prototype.$axios = fetch
    }
}