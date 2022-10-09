import {} from '@/requests/request.js'
import axios from 'axios'

function getPreviousWinnerList(data) {
    return axios.get('http://yumingxi.xyz:3100/api/previous_winners/getPreviousWinnersList', {
        params: data,
    })
}

export {
    getPreviousWinnerList
}