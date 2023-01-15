import axios from 'axios'
import { ElMessage } from 'element-plus'
const instance = axios.create({
    baseURL: 'http://yumingxi.xyz:3002',
    headers: {
        'Content-Type': 'application/json'
    }
})

instance.interceptors.request.use(config => {
    let token = localStorage.getItem('token')
    config.headers.Authorization = "Bearer " + token
    return config
}, err => {
    // 发送请求错误
    ElMessage({
        type: "warning",
        message: "请求发送失败"
    })
});

instance.interceptors.response.use(response => {
    const res = response.data
    switch (res.code) {
        case 0:
            return response
        default:
            ElMessage({
                type: 'warning',
                message: res.message,
            })
            return Promise.reject(res)
    }
}, err => {
    if (err.response.status == 401) {
        ElMessage({
            type: "warning",
            message: "请登陆"
        })
        localStorage.removeItem('token')
    } else {
        ElMessage({
            type: "error",
            message: "err " + err.response.data.message
        })
    }
    return Promise.reject(err)
});


export default instance