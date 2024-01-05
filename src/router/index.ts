import { type RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"


export const routes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      hidden: true
    }
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes,
});
export default router;