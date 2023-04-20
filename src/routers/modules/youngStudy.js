const Layout = () => import("@/layout/index.vue");
const youngStudy = () => import('@/views/youngStudy/index.vue')
const pc = () => import('@/views/youngStudy/pc.vue')
export default [
  {
    path: "/youngStudy",
    component: Layout,
    children: [
      {
        path: "",
        component: youngStudy,
        meta: { title: "青年大学习" },
      },{
        path: "pc",
        component: pc,
        meta: { title: "青年大学习" },
      },
    ],
  },
];
