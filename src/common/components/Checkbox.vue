<template>
  <div
    class="relative checkbox border-darkgrey cursor-pointer"
    :class="[
      options?.class,
      round ? 'round' : 'square',
      {
        'd-flex align-items-center justify-content-center border-orange clicked':
          state,
        'disabled border-darkgrey': disabled,
      },
    ]"
    :style="options?.style"
    @click="item_click"
  />
</template>
<script lang="ts">
import { defineComponent, PropType, ref, watch } from "@vue/runtime-core";

type CheckboxOptions = {
  class?: string | Record<string, boolean> | Array<string>;
  style?: string | Record<string, boolean> | Array<string>;
};

export default defineComponent({
  emits: ["change", "update:modelValue"],
  props: {
    modelValue: {
      type: Object as PropType<unknown>,
      required: false,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    checked: {
      type: Boolean,
      required: false,
    },
    value: {
      type: Object,
      required: false,
    },
    round: {
      type: Boolean,
      required: false,
    },
    options: {
      type: Object as PropType<CheckboxOptions>,
      required: false,
    },
  },
  setup(props, context) {
    const state = ref(props.checked);

    const item_click = (): void => {
      state.value = !state.value;
      const value = props.value ?? state.value;
      context.emit("update:modelValue", value);
      context.emit("change", value);
    };

    watch(
      () => props.checked,
      () => {
        state.value = props.checked;
      }
    );

    return {
      state,
      item_click,
    };
  },
});
</script>
<style lang="scss" scoped>
.checkbox {
  min-width: 1.25em;
  max-width: 1.25em;
  height: 1.25em;
  border: 0.125em solid;
}

.square {
  border-radius: 0.3125em;
}
.round,
.round.clicked:after {
  border-radius: 50%;
}

.clicked::after {
  content: "";
  width: 0.75em;
  height: 0.75em;
  position: absolute;
  background-color: #ff9d29;
  border-radius: 0.125em;
}

.disabled::after {
  background-color: #b5bac7;
}
</style>
