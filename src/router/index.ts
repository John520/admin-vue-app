import { constant } from "lodash-es";
import { type RouteRecordRaw, createRouter, createWebHashHistory } from "vue-router"


const Layouts = () => import("@/layouts/LeftMode.vue")
const MultiLevel = () => import("@/layouts/components/MultiLevel/index.vue")


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
    meta: {
      title: "默认",
      elIcon: "Menu"
    },
    children: [{
      path: "dashboard",
      name: "Dashboard",
      component: () => import("@/views/dashboard/index.vue"),
      meta: {
        title: "首页",
        svgIcon: "dashboard",
      },

    }],

  },
  {
    path: "/menu1",
    component: Layouts,
    meta: {
      title: "岳阳楼记1",
      elIcon: "Menu",
    },
    children: [{
      path: "index1",
      component: () => import("@/views/manu1/index.vue"),
      meta: {
        title: "岳阳楼记1-1",
        svgIcon: "link"
      },
    }],


  },
  {
    path: "/menu2",
    component: Layouts,
    meta: {
      title: "岳阳楼记2",
    },
    children: [{
      path: "index21",
      component: () => import("@/views/manu2/index21.vue"),
      meta: {
        svgIcon: "link",
        title: "岳阳楼记2-1",
      },
    }, {
      path: "index22",
      component: MultiLevel,
      meta: {
        title: "岳阳楼记2-2",
      },
      children: [{
        path: "index221",
        component: () => import("@/views/manu2/index221.vue"),
        meta: {
          svgIcon: "link",
          title: "岳阳楼记2-2-1",
        },
      },
      ]
    }]
  }

];



const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes,
});
export default router;