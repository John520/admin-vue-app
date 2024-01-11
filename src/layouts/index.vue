<script lang="ts" setup>
import { computed } from "vue";

const classes = computed(() => {
  return {
    showGreyMode: true,
    showColorWeakness: true,
  };
});
</script>

<template>
  <div :class="classes">
    <!-- 左侧模式 -->
    <LeftMode></LeftMode>
    <!-- 右侧设置面板 -->
    <RightPanel>
      <Settings />
    </RightPanel>
  </div>
</template>

<style lang="scss" scoped>
.showGreyMode {
  filter: grayscale(1);
}

.showColorWeakness {
  filter: invert(0.8);
}
</style>
