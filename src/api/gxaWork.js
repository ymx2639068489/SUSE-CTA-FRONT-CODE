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

function getTeamIsApprove() {
    return get('/api/gxa_works/getTeamIsApprove')
}


function getTeamScore() {
    return get('/api/gxa_works/getTeamScore')
}

function getTeamInfo() {
    return get('/api/gxa_application/getTeamInfo')
}

function getFormulaGxaList() {
    return get('/api/gxa_works/getFormulaGxaList')
}

export {
    UploadCodeZip,
    UploadOther,
    GetOther,
    getTeamIsApprove,
    getTeamScore,
    getTeamInfo,
    getFormulaGxaList,
}