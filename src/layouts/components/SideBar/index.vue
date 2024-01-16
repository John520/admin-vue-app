<script lang="ts" setup>
import Logo from "@/layouts/components/Logo/index.vue";
import SidebarItem from "./SidebarItem.vue"
import { usePermissionStore } from "@/store/model/permission"

const permissionStore = usePermissionStore()

interface Props {
  isCollapse?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  isCollapse: false,
})

</script>

<template>
  <div>
    <Logo :collapse="props.isCollapse"> </Logo>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu class="el-menu-wrapper" :collapse="props.isCollapse">
          <SidebarItem v-for="route in permissionStore.routes" :key="route.path" :item="route" :base-path="route.path" :is-collapse="props.isCollapse" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<style lang="scss" scoped>

</style>