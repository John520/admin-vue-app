<script lang="ts" setup>
import Logo from "@/layouts/components/Logo/index.vue";
import SidebarItem from "./SidebarItem.vue"
import { usePermissionStore } from "@/store/model/permission"
import { computed } from "vue";
import { getCssVariableValue } from "@/utils";

const permissionStore = usePermissionStore()

interface Props {
  isCollapse?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  isCollapse: false,
})

const bgColor = computed(() => getCssVariableValue("--v3-sidebar-menu-bg-color"))
const textColor = computed(() => getCssVariableValue("--v3-sidebar-menu-text-color"))

</script>

<template>
  <div>
    <Logo :collapse="props.isCollapse"> </Logo>
    <el-menu class="el-menu-wrapper" :collapse="props.isCollapse" :background-color="bgColor" :text-color="textColor">
      <SidebarItem v-for="route in permissionStore.routes" :key="route.path" :item="route" :base-path="route.path"
        :is-collapse="props.isCollapse" />
    </el-menu>
  </div>
</template>


<style lang="scss" scoped>
.el-menu {
     border-right: solid 1px transparent;//去掉边界菜单的颜色
}
</style>