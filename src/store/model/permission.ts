import { constantRoutes } from "@/router";
import { defineStore } from "pinia";
import { ref } from "vue";
import { RouteRecordRaw } from "vue-router";

export const usePermissionStore = defineStore("permission", () => {
    const routes = ref<RouteRecordRaw[]>(constantRoutes);
    const dynamicRoutes = ref<RouteRecordRaw[]>([]);

    const setRoutes = (roles: string[]) => {
        routes.value = constantRoutes.concat([])
        dynamicRoutes.value=[]
    };

    return { routes, dynamicRoutes, setRoutes }
})