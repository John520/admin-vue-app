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
    <transition name="layout-logo-fade">
      <router-link v-if="props.collapse" key="collapse" to="/">
        <img :src="logo" class="layout-logo" />
      </router-link>
      <router-link v-else key="expand" to="/">
        <img :src="layoutMode !== 'left' ? logoText2 : logoText1" class="layout-logo-text" />
      </router-link>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
.layout-logo-container {
  background-color: transparent;
  .layout-logo {
    // position:relative;
    width: 32px;
    height: 32px;
  }

  .layout-logo-text {
    width: 100%;
  }
}
</style>
