import {getUserInfo} from '@/api/user.js'
const User = {
    state() {
        return {
            loginStatus: false,
            avatarUrl: "/profil.jpg",
            class: [],
            college: "",
            identity: { department: '', duty: "" },
            major: "",
            phoneNumber: "",
            qq: "",
            studentId: "",
            username: "",
            gender: "false",
        }
    },
    mutations: {
        setUserInfo(state, info) {
            for (const key in state) {
                if (key === 'loginStatus') state[key] = true
                else state[key] = info[key]
            }
        },
        userExit(state) {
            state.loginStatus = false
            state.avatarUrl = "/profil.jpg"
            localStorage.removeItem('token')
        },
        setUserToken(state, token) {
            state.token = token
        }
    },
    getters: {
        getUserLoginStatus(state) {
            return state.loginStatus
        },
        getUserInfo(state) {
            return state
        },
    },
    actions: {
        getUserData(context) {
            return new Promise((resolve, reject) => {
                getUserInfo().then(res => {
                    let userinfo = res.data.data
                    context.commit('setUserInfo', userinfo)
                    resolve(userinfo)
                })
            })
        }
    }
}
export default User