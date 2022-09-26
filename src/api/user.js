import {get} from '@/requests/request.js'

function getUserInfo() {
    return get('/api/users/getUserInfo')
}

function getCollerList() {
    return get('/api/users/getCollerList')
}
export {
    getUserInfo,
    getCollerList,
}