<template>
  <div
    tabindex="0"
    class="position-relative d-flex align-items-center bg-white cursor-pointer rounded border"
    @focusout="
      () => {
        show(false);
      }
    "
    @click="
      () => {
        if (!multiple) {
          show();
        }
      }
    "
  >
    <div v-if="required">
      <input
        type="text"
        :value="modelValue"
        required
        @change="
          ($event) => {
            $emit('update:modelValue', ($event.target as HTMLInputElement).value);
          }
        "
      />
    </div>
    <!-- label -->
    <div
      class="d-flex text-black justify-content-between align-items-center w-100"
      :class="options?.title?.class"
      :style="options?.title?.style"
    >
      <div v-if="multiple" class="d-flex align-items-center">
        <div
          v-for="(item, index) in multiple_title"
          :key="index"
          v-t="item_label(item) ?? ((item as boolean | string | number).toString())"
          class="m-1 p-1 px-2 bg-lightblue rounded-pill"
          @click="multiple_title_click(+index)"
        ></div>
      </div>
      <div
        v-else
        v-t="label"
        @click="
          () => {
            if (multiple) {
              show();
            }
          }
        "
      ></div>
      <div
        class="rotate ms-1"
        @click="
          () => {
            if (multiple) {
              show();
            }
          }
        "
      >
        <CaretUp />
      </div>
    </div>
    <!-- /label -->

    <!-- results list -->
    <div ref="select" class="results bg-white shadow-sm pl-3 transition">
      <div :class="options?.items?.class" :style="options?.items?.style">
        <div
          v-for="(item, index) in items"
          :key="index"
          v-t="item_label(item) ?? (item as boolean | string | number).toString()"
          class="cursor-pointer text-black py-2"
          :class="options?.item?.class"
          :style="options?.item?.style"
          @click="
            () => {
              item_click(item);
            }
          "
        ></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
// icons
import CaretUp from "@/common/assets/icons/CaretUp.vue";
import { defineComponent, ref, PropType, watchEffect } from "@vue/runtime-core";

import { SelectOptions } from "./SelectTypes";
import { StringRecordType, ObjectRecordType } from "../types/PrimitiveTypes";
import { computed } from "vue";

export default defineComponent({
  name: "SelectVue",
  components: { CaretUp },
  props: {
    modelValue: {
      type: [Object, Array, String, Number],
      required: true,
      default: null,
    },
    items: {
      type: Array as PropType<Array<unknown>>,
      required: true,
    },
    disabled: {
      type: Boolean,
      required: false,
    },
    required: {
      type: Boolean,
      required: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Object as PropType<SelectOptions>,
      required: false,
      default: () => {
        return {};
      },
    },
  },
  emits: ["change", "update:modelValue"],
  setup(props, context) {
    const select_height = ref(0);
    const shown = ref(false);
    const select = ref({} as HTMLDivElement);
    const label = ref();
    const multiple_title = computed(() => {
      return props.modelValue as Array<unknown>;
    });

    function show(show?: boolean): void {
      if (show == undefined) {
        shown.value = !shown.value;
      } else {
        shown.value = show as boolean;
      }
      if (shown.value) {
        let docHeight = window.innerHeight - select.value.getBoundingClientRect().bottom;
        select_height.value = docHeight > 250 ? 250 : docHeight;
      } else {
        select_height.value = 0;
      }
      select.value.style.maxHeight = select_height.value + "px";
    }

    function item_label(item: unknown): string | null {
      if (!item) {
        return null;
      }
      return (item as StringRecordType)[props.options?.label as string];
    }

    function setLabel() {
      label.value =
        item_label(props.modelValue) ??
        props.options?.placeholder ??
        item_label(props.items[0]) ??
        (props.items[0] as boolean | number | string).toString();
    }

    function item_click(item: unknown): void {
      if (!props.multiple) {
        // actually I need to close here -> show(false)
        // but since it is located inside div that already closes ( reverses ) - the value here should also be reversed -> show( true )
        show(true);
        context.emit(
          "update:modelValue",
          (item as ObjectRecordType)[props.options?.value as string] ?? item
        );
      } else {
        (props.modelValue as Array<unknown>).push(item);
      }
      context.emit("change", item);
    }

    function multiple_title_click(index: number) {
      let items = props.modelValue as Array<unknown>;
      items.splice(index, 1);
    }

    watchEffect(() => {
      const value = props.modelValue;
      if (value) {
        if (!props.multiple) {
          // if model value becomes a value of an item
          // then we have to search for an item with that value
          let item = value;
          if (props.options?.value) {
            item = props.items.find(
              (elem) => (elem as ObjectRecordType)[props.options?.value as string] == value
            ) as typeof props.modelValue;
          }
          label.value = item_label(item) ?? item.toString();
        }
      } else {
        setLabel();
      }
    });

    // on created
    setLabel();

    return {
      select,
      label,
      multiple_title,

      show,
      item_click,
      item_label,
      multiple_title_click,
    };
  },
});
</script>
<style scoped lang="scss">
.results,
input {
  position: absolute;
  top: 102%;
  left: 0;
}
.results {
  z-index: 1000;
  overflow: hidden;
  overflow-y: auto;
  max-height: 0;
}
input {
  visibility: hidden;
  width: 100%;
  &:invalid > label {
    color: var(--red);
  }
}
</style>
