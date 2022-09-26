const Layout = () => import('@/layout/index.vue')
const Journalism = ()=> import('@/views/Journalism/index.vue')
const JournalismDetail = ()=> import('@/views/Journalism/components/detail.vue')
export default [{
    path: "/journalism",
    
    component: Layout,
    children: [
        {
            path: "",
            meta: {
                title: "动态",
            },
            name: "journalism",
            component: Journalism,
        }, {
            path: ":id",
            meta: {
                title: "详细动态",
            },
            component: JournalismDetail,
        }
    ]

}]