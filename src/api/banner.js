import {get } from '@/requests/request.js'
function getALLBanner() {
    return get('/api/banner')
}