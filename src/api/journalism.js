import { get } from '@/requests/request.js'

function getJournalismList(page, pageSize, content) {
    return get('/api/journalism', { page, pageSize, content })
}

function getJournalismDetail(id) {
    return get('/api/journalism/getDetails/' + id)
}

export {
    getJournalismList,
    getJournalismDetail
}