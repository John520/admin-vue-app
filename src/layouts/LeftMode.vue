<script lang="ts" setup>
import { computed, ref } from "vue";
import { Sidebar, AppMain, NavigationBar } from "./components";
import { storeToRefs } from "pinia";
import { useAppStore } from "@/store/model/app";


const appStore = useAppStore()
const { sidebar } = storeToRefs(appStore)
const isCollapse = computed(() => !sidebar.value.opened)

const showTagsView = ref(true);
const fixedHeader = ref(true);
const sidebarClass=computed(()=>{
  return sidebar.value.opened?"app-wrapper":"app-wrapper-collapse"
})
</script>

<template>
  <div :class="sidebarClass">
    <Sidebar class="sidebar-container" :is-collapse="isCollapse" >siderbar</Sidebar>
    <div class="main-container">
      <div class="layout-header">
        <NavigationBar />
        <div>header</div>
      </div>
      <AppMain class="app-main">
      </AppMain>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-wrapper {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: var(--v3-sidebar-width) 1fr;
}
.app-wrapper-collapse {
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: var(--v3-sidebar-width-collapse) 1fr;
}

.sidebar-container {
  background-color: var(--v3-sidebar-menu-bg-color);
  overflow: hidden;
}


.main-container {
  border: 1px solid #118de0;
  display: grid;
  grid-template-rows: auto 1fr;

}

.app-main {
  border: 1px solid #55ee18;
}
</style>
