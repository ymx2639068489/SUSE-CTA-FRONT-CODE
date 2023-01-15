import { Delete, post, get } from '@/requests/request.js'
import { timePickerDefaultProps } from 'element-plus'

function SignUp(school) {
    return post('/api/newborn-algoirthm/signUp/' + school)
}

function CancelSignUp() {
    return Delete('/api/newborn-algoirthm/cancellation')
}

function getRankList(group, semester, studentId) {
    return get('http://yumingxi.xyz:3100/api/algorithm-integral',{
        semester,
        group,
        studentId
    })
}

export {
    SignUp,
    CancelSignUp,
    getRankList
}