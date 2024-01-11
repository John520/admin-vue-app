<script lang="ts" setup>
import { RouteRecordRaw } from "vue-router";
import SidebarItemLink from "./SidebarItemLink.vue";
import { computed } from "vue";
import { isExternal } from "@/utils/validate";
import path from "path-browserify"
import SvgIcon from "@/components/SvgIcon/index.vue"

interface Props {
    item: RouteRecordRaw
    isCollapse?: boolean
    basePath?: string
}
const props = withDefaults(defineProps<Props>(), {
    isCollapse: false,
    basePath: ""
})

/** 显示的子菜单 */
const showingChildren = computed(() => {
    const ans = props.item.children?.filter((child) => !child.meta?.hidden) ?? []
    console.log("showingChildren:", ans)
    return ans
})
/** 显示的子菜单数量 */
const showingChildNumber = computed(() => {
    console.log("showingChildNumber:", showingChildren.value.length)
    return showingChildren.value.length
})
/** 解析路径 */
const resolvePath = (routePath: string) => {
    switch (true) {
        case isExternal(routePath):
            return routePath
        case isExternal(props.basePath):
            return props.basePath
        default:
            return path.resolve(props.basePath, routePath)
    }
}
</script>
<template>
    <template v-if="props.item.meta?.hidden"></template>
    <template v-else-if="showingChildNumber === 0">
        <SidebarItemLink v-if="item.meta" :to="resolvePath(item.path)">
            <el-menu-item :index="resolvePath(item.path)">
                <SvgIcon v-if="item.meta.svgIcon" :name="(item.meta.svgIcon as string)" />
                <component v-else-if="item.meta.elIcon" :is="item.meta.elIcon"
                    class="el-icon" />
                <template v-if="item.meta.title" #title>
                    {{ item.meta.title }}
                </template>
            </el-menu-item>
        </SidebarItemLink>
    </template>
    <el-sub-menu v-else :index="resolvePath(props.item.path)" teleported>
        <template #title>
            <SvgIcon v-if="props.item.meta?.svgIcon" :name="(props.item.meta.svgIcon as string)" />
            <component v-else-if="props.item.meta?.elIcon" :is="props.item.meta.elIcon" class="el-icon" />
            <span v-if="props.item.meta?.title">{{ props.item.meta.title }}</span>
        </template>
        <template v-if="props.item.children">
            <sidebar-item v-for="child in props.item.children" :key="child.path" :item="child"
                :is-collapse="props.isCollapse"  :base-path="resolvePath(item.path)" />
        </template>
    </el-sub-menu>
</template>
