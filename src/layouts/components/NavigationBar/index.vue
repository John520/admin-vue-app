<script lang="ts" setup>
import Hamburger from "@/layouts/components/Hamburger/index.vue"
import { useAppStore } from "@/store/model/app";
import { Store, storeToRefs } from "pinia";


const appStore = useAppStore()

const { sidebar } = storeToRefs(appStore)
/** 切换侧边栏 */
const toggleSidebar = () => {
    appStore.toggleSidebar()
}

</script>

<template>
    <div class="navigation-bar">
        <Hamburger :is-active="sidebar.opened" @toggle-click="toggleSidebar"></Hamburger>
    </div>
</template>