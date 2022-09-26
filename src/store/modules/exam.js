
const Exam = {
    state() {
        return {
            data: [],
            ans: new Map(),
        }
    },
    getters: {
        getQuestionData(state) {
            return state.data
        },
        getAllAns(state) {
            return state.ans
        },
        getAnsByRealID: (state) => (id) => {
            if (state.ans.get(id) == null) {
                return 0
            } else {
                return state.ans.get(id)
            }
        }
    },
    mutations: {
        setQuestionData(state, data) {
            state.data = data
        },
        setAns(state, { id, ans }) {
            state.ans.set(id, ans)
        },
    },
    actions: {
        
    }
}
export default Exam