const FreshAlgorithm = () => import('@/views/FreshmanAlgorithm/index.vue')
const Layout = () => import('@/layout/index.vue')
export default [{
    path: "/freshmanAlgorithm",
    component: Layout,
    children: [
        {
            path: "",
            component: FreshAlgorithm,
            meta: { title: '算法新生赛' },
        }
    ]
}]