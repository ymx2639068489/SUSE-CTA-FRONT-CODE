const Gxa = () => import('@/views/Gxa/index.vue')
const Layout = () => import('@/layout/index.vue')
export default [{
    path: "/gxa",
    component: Layout,
    children: [
        {
            path: "",
            component: Gxa,
            meta: { title: '国信安' },
        }
    ],
}, {
  path: "/invite",
  component: () => import("@/views/Gxa/invite.vue"),
}]