<script lang="ts" setup>
import logo from "@/assets/layouts/logo.png";
import logoText1 from "@/assets/layouts/logo-text-1.png";
import logoText2 from "@/assets/layouts/logo-text-2.png";
import { useSettingsStore } from "@/store/model/settings";
import { storeToRefs } from "pinia";

interface Props {
  collapse?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  collapse: true,
});

const settingsStore = useSettingsStore();
const { layoutMode } = storeToRefs(settingsStore);
</script>

<template>
  <div class="layout-logo-container">
      <router-link v-if="props.collapse" key="collapse" to="/">
        <img :src="logo" class="layout-logo-collapse" />
      </router-link>
      <router-link v-else key="expand" to="/">
        <img :src="layoutMode !== 'left' ? logoText2 : logoText1" class="layout-logo-expand" />
      </router-link>
  </div>
</template>

<style lang="scss" scoped>
.layout-logo-container {
  background-color: transparent;
  width: 100%;
  height: var(--v3-header-height);
  display: flex;
  justify-content: center;
  align-items: center;
  .layout-logo-collapse {
    width: 40px;
    height: 40px;
  }

  .layout-logo-expand {
    width: 100%;
    height: 100%;
  }
}
</style>
