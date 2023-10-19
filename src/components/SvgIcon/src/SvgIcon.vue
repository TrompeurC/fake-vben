<template>
  <svg
    aria-hidden="true"
    :style="getStyle"
    :class="[$attrs.class, spin && 'svg-icon-spin']"
  >
    <use :href="symbolId" :fill="color" />
  </svg>
</template>

<script lang="ts" setup>
import { CSSProperties, computed } from "vue";
import { SvgIconProp } from "./props";

defineOptions({
  name: "SvgIcon"
});
const props = withDefaults(defineProps<SvgIconProp>(), {
  prefix: "icon",
  color: "#333",
  size: 16,
  spin: false
});
const symbolId = computed(() => `#${props.prefix}-${props.name}`);

const getStyle = computed((): CSSProperties => {
  const { size } = props;
  let s = `${size}`;
  s = `${s.replace("px", "")}px`;
  return {
    width: s,
    height: s
  };
});
</script>
<style scoped lang="less">

.svg-icon-spin {
  animation: loadingCircle 1s infinite linear;
}
</style>
