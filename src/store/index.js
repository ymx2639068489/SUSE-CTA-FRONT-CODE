import {createStore} from 'vuex'
import User from './modules/user'
import Recruit from './modules/recruit'
import Exam from './modules/exam'

const store = createStore({
    state() {
        
    },
    mutations: {
       
    },
    modules: {
        User,
        Recruit,
        Exam,
    }
})

export default store