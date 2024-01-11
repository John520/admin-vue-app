import { constant } from "lodash-es";
import { type RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"


const Layouts = () => import("@/layouts/LeftMode.vue")


export const constantRoutes: RouteRecordRaw[] = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: {
      hidden: true
    }
  },
  {
    path: "/",
    redirect: "/dashboard",
    component: Layouts,
    children: [{
      path: "dashboard",
      name: "Dashboard",
      component: () => import("@/views/dashboard/index.vue"),
      meta: {
        title: "首页",
        svgIcon: "dashboard",
        affix: true
      },

    }]
  },
  {
    path: "/menu1",
    component: Layouts,
    redirect: "/menu1/index",
    children: [{
      path: "index1",
      component: () => import("@/views/manu1/index.vue"),
      meta: {
        title: "岳阳楼记",
        svgIcon: "link"
      },
    }]

  },
  {
    path: "/menu2",
    component: Layouts,
    meta: {
      title: "岳阳楼记2",
      svgIcon: "link"
    },
    children: [{
      path: "index21",
      component: () => import("@/views/manu1/index.vue"),
      meta: {
        title: "岳阳楼记2-1",
        svgIcon: "link"
      },
    }, {
      path: "index22",
      component: () => import("@/views/manu1/index.vue"),
      meta: {
        title: "岳阳楼记2-2",
        svgIcon: "link"
      },
    }]
  }

];



const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});
export default router;