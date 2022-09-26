const Layout = () => import('@/layout/index.vue')
const Quiz = () => import('@/views/quiz/index.vue')
const QuestionList = () => import('@/views/quiz/questionList.vue')
export default [{
    path: "/quiz",
    component: Layout,
    children: [
        {
            path: "",
            component: Quiz,
            meta: {
                title: "计算机知识竞赛"
            }
        },
        {
            path: "exam",
            component: QuestionList,
            meta: {
                title: "题目列表"
            }
        }
    ]
}]