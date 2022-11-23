const Space = () => import('@/views/Space/Space.vue')
const Info = () => import('@/views/Info/Info.vue')
const Recruit = () => import('@/views/Recruit/Recruit.vue')
const Layout = () => import('@/layout/index.vue')
const Folder = () => import('@/views/404.vue')
const ChangePwd = () => import('@/views/changePwd/index.vue')
export default [{
    path: "/space", component: Layout,
    children: [
        {
            path: "",
            component: Space,
            redirect: '/space/info',
            meta: {
                requiresAuth: true,
                title: '个人空间'
            },
            children: [
                {
                    path: "info",
                    component: Info, meta: { requiresAuth: true, title: '个人信息' }
                }, {
                    path: "recruit",
                    component: Recruit, meta: { requiresAuth: true,title: "简历投递" }
                }, {
                    path: "folder",
                    component: Folder, meta: { requiresAuth: true,title: '个人文件夹' }
                }, {
                    path: "change-pwd",
                    component: ChangePwd, meta: { requiresAuth: true,title: '更改密码' }
                }
            ]
        },
    ]
}]