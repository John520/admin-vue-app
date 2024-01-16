import { type LayoutSettings, layoutSettings } from "@/config/layouts";
import { reactive, watch } from "vue";
import { defineStore } from "pinia";
import { Ref, ref } from "vue";
import { setConfigLayout } from "@/utils/cache/local_storage";


export const useSettingsStore = defineStore("settings", () => {
    const state = reactive(layoutSettings)

    watch(state, () => {
        setConfigLayout(state)
    })
    return state
})

