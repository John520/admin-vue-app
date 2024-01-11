import { type LayoutSettings, layoutSettings } from "@/config/layouts";
import { watch } from "vue";
import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { Key } from "readline";
import { setConfigLayout } from "@/utils/cache/local_storage";

type SettingsStore = {
    [k in keyof LayoutSettings]: Ref<LayoutSettings[k]>
}

type SettingsStoreKey = keyof SettingsStore

export const useSettingsStore = defineStore("settings", () => {

    const state = {} as SettingsStore

    for (const [key, value] of Object.entries(layoutSettings)) {
        const refVal = ref(value);
        // @ts-ignore
        state[key as SettingsStoreKey] = refVal
        watch(refVal, () => {
            const setttings = _getCacheData()
            setConfigLayout(setttings)
        })
    }

    function _getCacheData() {
        const settings = {} as LayoutSettings
        for (const [k, v] of Object.entries(state)) {
            // @ts-ignore
            settings[k as SettingsStoreKey] = v.value
        }
        return settings
    }

    return state
})

