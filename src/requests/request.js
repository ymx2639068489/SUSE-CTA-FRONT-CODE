import { ElLoading } from "element-plus";
import instance from "./index.js";

function request(url, method, params, options = { loading: true, error: true }) {
    let loadingInstance;
    if (options.loading) loadingInstance = ElLoading.service({
        text: "网络请求中"
    });
    return new Promise((resolve, reject) => {
        let data = {};
        if (method == 'get') data = { params };
        if (method == 'post') data = { data: params };
        if (method == 'put') data = { data: params };
        if (method == 'patch') data = { data: params };
        instance({
            url,
            method,
            ...data,

        }).then((res) => {
            resolve(res);
        }).catch((err) => {
            reject(err);
        }).finally(() => {
            if (options.loading) loadingInstance.close();
        });
    });
};

function get(url, params, options) {
    return request(url, 'get', params, options)
}

function post(url, params, options) {
    return request(url, 'post', params, options)
}

function put(url, params, options) {
    return request(url, 'put', params, options)
}

function patch(url, params, options) {
    return request(url, 'patch', params, options)
}

function Delete(url, params, options) {
    return request(url, 'delete', params, options)
}


export {
    get,
    post,
    put,
    patch,
    Delete,
}