import {get, patch} from '@/requests/request.js'

function getUserInfo() {
    return get('/api/users/getUserInfo')
}

function getCollerList() {
    return get('/api/users/getCollerList')
}

function updateUserPaaword(data) {
    return patch('/api/users/updateUserPassword', data)
}

function sendVerificationCode(data) {
    return get('/api/users/sendVerificationCode', data)
}

export {
    getUserInfo,
    getCollerList,
    updateUserPaaword,
    sendVerificationCode
}