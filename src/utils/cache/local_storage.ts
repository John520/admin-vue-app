import { LayoutSettings } from "@/config/layouts"
import CacheKey from "@/constants/cache_key"

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