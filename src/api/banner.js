import {get } from '@/requests/request.js'
function getALLBanner() {
    return get('/api/banner')
}

function getHomeBanner() {
    return get('/api/banner/home')
}

function getGxaBanner() {
    return get('/api/banner/gxa')
}

export {
    getHomeBanner,
    getGxaBanner
}