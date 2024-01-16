import { defineStore } from "pinia";
import { SIDEBAR_OPENED, SIDEBAR_CLOSED, SidebarClosed, SidebarOpened } from "@/constants/app_key"
import { reactive, watch } from "vue";
import { getSidebarStatus, setSidebarStatus } from "@/utils/cache/local_storage";

interface Sidebar {
    opened: boolean
}
function handleSidebarStatus(opened: boolean) {
    opened ? setSidebarStatus(SIDEBAR_OPENED) : setSidebarStatus(SIDEBAR_CLOSED)
}

export const useAppStore = defineStore("app", () => {
    const sidebar: Sidebar = reactive({
        opened: getSidebarStatus() === SIDEBAR_OPENED
    })
    watch(
        () => sidebar.opened,
        (open) => handleSidebarStatus(open)
    )
    const toggleSidebar = () => {
        sidebar.opened = !sidebar.opened
    }
    const closeSidebar = () => {
        sidebar.opened = false
    }
    return { sidebar, toggleSidebar, closeSidebar }

})