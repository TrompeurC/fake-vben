<template>
  <Button v-bind="getBindingValue" @click="onClick">
    <template #icon>
      <slot name="icon"></slot>
    </template>
    <template #default="data">
      <SvgIcon :name="preIcon" v-if="preIcon" :size="iconSize" />
      <slot v-bind="data || {}"></slot>
      <SvgIcon :name="postIcon" v-if="postIcon" :size="iconSize" />
    </template>
  </Button>
</template>

<script setup lang="ts">
import { Button } from "ant-design-vue";
import { computed, unref, useAttrs } from "vue";
import { IButtonProps } from "./props";
import SvgIcon from "@/components/SvgIcon/src/SvgIcon.vue";
defineOptions({
  name: "VButton",
  inheritAttrs: false
});
const props = withDefaults(defineProps<IButtonProps>(), {
  type: "default",
  iconSize: 14
});

const attrs = useAttrs();
const getBindingValue = computed(() => ({
  ...unref(attrs),
  ...props
}));
</script>

<style scoped></style>
