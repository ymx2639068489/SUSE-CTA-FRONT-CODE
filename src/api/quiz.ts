import { get, post } from '@/requests/request.js'

function getRankList(page, pageSize) {
    return get('/api/computer-competition/getlist', { page, pageSize })
}

function startExam() {
    return get('/api/computer-competition/start')
}

function submitAnswer( questions: {
    [P in string]: Number
}) {
    return post('/api/computer-competition/end', { questions })
}

function getSubmitRecord()  {
    return get('/api/computer-competition/getSelfQuestionList')
}

function getQuestionDetailByID(id) {
    return get('http://yumingxi.xyz:3002/api/computer-competition/getQuestionDetaile/' + id)
}

export {
    getRankList,
    startExam,
    submitAnswer,
    getSubmitRecord,
    getQuestionDetailByID,
}