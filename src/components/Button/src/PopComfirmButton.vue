<script lang="ts">
import { computed, defineComponent, h, unref, useAttrs } from "vue";
import { IPopComfirmButtonProps } from "./props";
import { omit } from "lodash-es";
import BasicButton from "./BasicButton.vue";
import { extendSlots } from "@/utils/extendSlots";
import { Popconfirm } from "ant-design-vue";

const props = {
  enable: {
    type: Boolean,
    default: true
  }
};

export default defineComponent({
  name: "PopButton",
  inheritAttrs: false,
  props,
  setup(props: IPopComfirmButtonProps, { slots }) {
    const attrs = useAttrs();
    console.log(attrs);
    const getBindValues = computed(() => ({
      ...props,
      ...unref(attrs)
    }));
    return () => {
      const bindValues = omit(unref(getBindValues), "icon");
      const btnBind = omit(unref(getBindValues), "title") as any;
      if (btnBind.disabled) btnBind.color = "";
      const Button = h(BasicButton, btnBind, extendSlots(slots));
      if (!props.enable) return Button;
      return h(Popconfirm, bindValues, { default: () => Button });
    };
  }
});
</script>
