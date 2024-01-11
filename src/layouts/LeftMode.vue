<script lang="ts" setup>
import { computed, ref } from "vue";
import { Sidebar, AppMain } from "./components";

/** 定义计算属性 layoutClasses，用于控制布局的类名 */
const layoutClasses = computed(() => {
  return {};
});

const showTagsView = ref(true);
const fixedHeader = ref(true);
</script>

<template>
  <div class="app-wrapper">
    <Sidebar class="sidebar-container">siderbar</Sidebar>
    <div class="main-container">
      <div class="layout-header">
        <div>nav</div>
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

.sidebar-container {
  border: 1px solid #db0a0a;
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
