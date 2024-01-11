<script lang="ts" setup>
import { RouteRecordRaw } from "vue-router";
import SidebarItemLink from "./SidebarItemLink.vue";
import { computed } from "vue";
import { isExternal } from "@/utils/validate";
import path from "path-browserify"

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
    <template v-else-if="showingChildNumber === 1">
        <SidebarItemLink v-if="showingChildren[0].meta" :to="resolvePath(showingChildren[0].path)">
            <el-menu-item :index="resolvePath(showingChildren[0].path)">
                <SvgIcon v-if="showingChildren[0].meta.svgIcon" :name="showingChildren[0].meta.svgIcon" />
                <component v-else-if="showingChildren[0].meta.elIcon" :is="showingChildren[0].meta.elIcon"
                    class="el-icon" />
                <template v-if="showingChildren[0].meta.title" #title>
                    {{ showingChildren[0].meta.title }}
                </template>
            </el-menu-item>
        </SidebarItemLink>
    </template>
    <el-sub-menu v-else :index="resolvePath(props.item.path)" teleported>
        <template #title>
            <SvgIcon v-if="props.item.meta?.svgIcon" :name="props.item.meta.svgIcon" />
            <component v-else-if="props.item.meta?.elIcon" :is="props.item.meta.elIcon" class="el-icon" />
            <span v-if="props.item.meta?.title">{{ props.item.meta.title }}</span>
        </template>
        <template v-if="props.item.children">
            <sidebar-item v-for="child in props.item.children" :key="child.path" :item="child"
                :is-collapse="props.isCollapse" :is-first-level="false" :base-path="resolvePath(child.path)" />
        </template>
    </el-sub-menu>
</template>
