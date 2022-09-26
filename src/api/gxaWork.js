import { post, get } from '@/requests/request.js'
function UploadCodeZip(data) {
    return post("/api/gxa_works/upload", data)
}

function UploadOther(data) {
    return post('/api/gxa_works/submit', data)
}

function GetOther() {
    return get('/api/gxa_works')
}

export {
    UploadCodeZip,
    UploadOther,
    GetOther,
}