import { LayoutSettings } from "@/config/layouts"
import { SidebarOpened, SidebarClosed } from "@/constants/app_key"
import CacheKey from "@/constants/cache_key"

// 系统 layout 布局
export const getConfigLayout = () => {
    const json = localStorage.getItem(CacheKey.CONFIG_LAYOUT)
    return json ? (JSON.parse(json) as LayoutSettings) : null
}

export const setConfigLayout = (settings: LayoutSettings) => {
    localStorage.setItem(CacheKey.CONFIG_LAYOUT, JSON.stringify(settings))
}
export const removeConfigLayout = () => {
    localStorage.removeItem(CacheKey.CONFIG_LAYOUT)
}

// 侧边栏 sidebar 状态

export const setSidebarStatus = (sidebarStatus: SidebarOpened | SidebarClosed) => {
    localStorage.setItem(CacheKey.SIDEBAR_STATUS, sidebarStatus)
}
export const getSidebarStatus = () => {
    return localStorage.getItem(CacheKey.SIDEBAR_STATUS)
}