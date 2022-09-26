import { Delete, post, get } from '@/requests/request.js'
import { timePickerDefaultProps } from 'element-plus'

function SignUp(school) {
    return post('/api/newborn-algoirthm/signUp/' + school)
}

function CancelSignUp() {
    return Delete('/api/newborn-algoirthm/cancellation')
}

function getRankList() {
    let data = new Date()
    return get('http://yumingxi.xyz:3100/api/previous_winners/getPreviousWinnersList',{
        competitionName: "算法新生赛",
        session: data.getFullYear(),
    })
}

export {
    SignUp,
    CancelSignUp,
    getRankList
}