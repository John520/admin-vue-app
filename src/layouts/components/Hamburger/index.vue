<script lang="ts" setup>
import SvgIcon from "@/components/SvgIcon/index.vue"
import { computed } from "vue";

interface Props {
    isActive?: boolean
    prefix?: string
}

const props = withDefaults(defineProps<Props>(), {
    isActive: false,
    prefix: "icon",

})

/** Vue 3.3+ defineEmits 语法 */
const emit = defineEmits<{
    toggleClick: []
}>()
const toggleClick = () => {
    emit("toggleClick")
}


const symbolId = computed(() => {
    const name: string = props.isActive ? "expand" : "fold";
    return `#${props.prefix}-${name}`
})
</script>

<template>
    <div @click="toggleClick">
        <svg class="svg-icon" aria-hidden="true">
            <use :href="symbolId" />
        </svg>
    </div>
</template>

<style lang="scss" scoped>
.svg-icon {
    width: 2em;
    height: 2em;
    // vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
}
</style>