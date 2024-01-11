<script lang="ts" setup>
import Logo from "@/layouts/components/Logo/index.vue";
import SidebarItem from "./SidebarItem.vue"
import { usePermissionStore } from "@/store/model/permission"

const permissionStore = usePermissionStore()
console.log("routes:", permissionStore.routes)
</script>

<template>
  <div>
    <Logo :collapse="false"> </Logo>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu class="el-menu-wrapper" :collapse=false>
        <el-menu>
          <SidebarItem v-for="route in permissionStore.routes" :key="route.path" :item="route" :base-path="route.path" />
        </el-menu>
      </el-menu>
    </el-scrollbar>
  </div>
</template>
