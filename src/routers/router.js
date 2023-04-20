import { createRouter, createWebHistory } from "vue-router";
import { get } from "@/requests/request";
import { ElMessage } from "element-plus";

import store from "@/store/index.js";

import Home from "@/views/Home/Home.vue";
import Gxa from "./modules/gxa.js";
import Space from "./modules/space.js";
import Journalism from "./modules/journalism.js";
import Quiz from "./modules/quiz.js";
import FreshmanAlgorithm from "./modules/freshmanAlgorithm.js";
import youngStudy from "./modules/youngStudy.js";
const Layout = () => import("@/layout/index.vue");

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      {
        path: "",
        meta: { title: "首页" },
        name: "home",
        component: Home,
      },
    ],
  },
  ...Gxa,
  ...Space,
  ...Journalism,
  ...Quiz,
  ...FreshmanAlgorithm,
  ...youngStudy,
  {
    path: "/mobile_class",
    component: () => import('@/views/youngStudy/mobile_class.vue'),
    meta: { title: "青年大学习" },
  }, {
    path: "/mobile_detail",
    component: () => import('@/views/youngStudy/mobile_detail.vue'),
    meta: { title: "青年大学习" },
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from) => {
  if (to.meta.requiresAuth && store.getters.getUserLoginStatus == false) {
    let token = localStorage.getItem("token");
    if (token == null) {
      ElMessage({
        type: "error",
        message: "请登陆后查看",
      });
      return "/";
    }
    get("/api/users/getUserInfo").then((res) => {
      store.commit("setUserInfo", res.data.data);
    });
  }
  return true;
});
const getCookie = (name) =>
  document.cookie.match(`[;\s+]?${name}=([^;]*)`)?.pop();
export default router;
