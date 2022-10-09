import {get} from '@/requests/request.js';

function getMessage(data) {
    return get('/api/message', data, { loading: false })
}

function getNotRead() {
    return get('/api/message/notRead')
}

export {
    getMessage,
    getNotRead,
}

