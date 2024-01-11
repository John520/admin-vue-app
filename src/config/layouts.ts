import { getConfigLayout } from "@/utils/cache/local_storage"

export interface LayoutSettings {

    // 是否显示 logo
    showLogo: boolean
    // 布局模式
    layoutMode: "left"
}

const defaultSettings: LayoutSettings = {
    layoutMode: "left",
    showLogo: true,

}
// 导出配置
export const layoutSettings: LayoutSettings = { ...defaultSettings, ...getConfigLayout() }