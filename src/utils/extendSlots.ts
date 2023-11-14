import { isFunction } from "lodash-es";
import { Slots } from "vue";

export function getSlot(
  slots: Slots,
  slot = "default",
  data?: any
  // opts?: RenderOpts
) {
  if (!slots || !Reflect.has(slots, slot)) {
    return null;
  }
  if (!isFunction(slots[slot])) {
    console.error(`${slot} is not a function!`);
    return null;
  }
  const slotFn = slots[slot];
  if (!slotFn) return null;
  const params = {
    ...data
    // ...opts
  };
  return slotFn(params);
}

export function extendSlots(slots: Slots, excluedKeys: string[] = []) {
  const slotsKey = Object.keys(slots);
  const ret: any = {};
  slotsKey.map((key) => {
    if (excluedKeys.includes(key)) {
      return null;
    }
    ret[key] = (data?: any) => getSlot(slots, key, data);
  });
  return ret;
}
