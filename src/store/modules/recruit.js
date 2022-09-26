const Recruit = {
    state() {
        return {
            inchPhoto: "",
            firstChoice: "",
            secondChoice: "",
            isAdjust: true,
            isDeliver: false,
            curriculumVitae: "",
            reasonsForElection: "",
        }
    },
    getters: {
        getRecruit(state) {
            return state
        }
    },
    mutations: {
        setRecurit(state, value) {
            state.inchPhoto = value.inchPhoto;
            state.firstChoice = value.firstChoice;
            state.secondChoice = value.secondChoice;
            state.isAdjust = value.isAdjust;
            state.curriculumVitae = value.curriculumVitae;
            state.reasonsForElection = value.reasonsForElection;
            state.isDeliver = value.isDeliver;
        }
    },
    actions: {

    }
}
export default Recruit