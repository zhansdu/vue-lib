<template>
  <div
    tabindex="0"
    class="position-relative d-flex align-items-center rounded border"
    @focusout="
      () => {
        show(false);
      }
    "
  >
    <div v-if="required">
      <input
        type="text"
        @change="
          ($event) => {
            $emit('update:modelValue', ($event.target as HTMLInputElement).value);
          }
        "
        :value="modelValue"
        required
      />
    </div>
    <div class="d-flex justify-content-between align-items-center cursor-pointer w-100">
      <!-- label -->
      <div class="d-flex align-items-center" v-if="multiple">
        <div
          class="m-1 p-1 px-2 bg-lightblue rounded-pill"
          v-for="(label, index) in multiple_title()"
          :class="options?.title?.class"
          :style="options?.title?.style"
          :key="index"
          @click="multiple_title_click(+index)"
        >
          {{ $t(item_label(label)) }}
        </div>
      </div>
      <div
        v-else
        :class="options?.title?.class"
        :style="options?.title?.style"
        @click="
          () => {
            show();
          }
        "
      >
        {{ $t(label) }}
      </div>
      &nbsp;
      <div
        class="rotate"
        @click="
          () => {
            show();
          }
        "
      >
        <CaretUp />
      </div>
    </div>
    <!-- /label -->

    <!-- results list -->
    <div ref="select" class="results bg-white shadow-sm pl-3 transition">
      <div
        class="py-2 cursor-pointer"
        v-for="(item, index) in items"
        :key="index"
        :class="options?.item?.class"
        :style="options?.item?.style"
        @click="
          () => {
            item_click(item);
          }
        "
      >
        {{ $t(item_label(item)) }}
      </div>
    </div>
  </div>
</template>
<script type="text/javascript" lang="ts">
// icons
import CaretUp from "@common/assets/icons/CaretUp.vue";
import { defineComponent, ref, PropType, watchEffect} from "@vue/runtime-core";

type SelectOptions = {
  item?: {
    class?: string | Record<string, boolean> | Array<string>;
    style?: string | Record<string, boolean> | Array<string>;
  };
  title?: {
    class?: string | Record<string, boolean> | Array<string>;
    style?: string | Record<string, boolean> | Array<string>;
  };
}
type Title = {
  placeholder?: string;
  label?: string;
};
type Item={
  label:string;
}
export default defineComponent({
  emits: ["change", "update:modelValue"],
  props: {
    modelValue: {
      type: [Object, Array, String, Number],
      required: true,
      default: null,
    },
    title: {
      type: Object as PropType<Title>,
      required: true,
    },
    items: {
      type: Array as PropType<Array<Item | unknown>>,
      required: true,
    },
    disabled: {
      type:Boolean,required:false
    },
    required: {
      type:Boolean,required:false
    },
    multiple: {
      type: Boolean,
      default: false
    },
    options:{
      type:Object as PropType<SelectOptions>,
      required:false
    }
  },
  components: { CaretUp },
  setup(props, context) {
    const select_height = ref(0);
    const shown = ref(false);

    const show = (show?: boolean): void => {
      let select = ref<HTMLDivElement>();
      if (show == undefined) {
        shown.value = !shown.value;
      }
      shown.value = show as boolean;
      if (shown.value) {
        let docHeight = window.innerHeight - (select.value as HTMLDivElement).getBoundingClientRect().bottom;
        select_height.value = docHeight > 250 ? 250 : docHeight;
      }
      else {
        select_height.value = 0;
      }
      (select.value as HTMLDivElement).style.maxHeight = select_height.value + "px";
    };

    const label = ref(props.title.placeholder ?? (props.items[0] as Item).label ?? props.items[0]);

    watchEffect(
      () => {
        if (props.modelValue != null) {
          if (!props.multiple) {
            if (props.title.label != null) {
              label.value = (props.modelValue as Record<string,string | number>)[props.title.label].toString();
            }
            else {
              label.value = props.modelValue.toString();
            }
          }
        }
      }
    );

    const item_click = (item: Item | unknown): void => {
      if (!props.multiple) {
        show(false);
        context.emit("update:modelValue", (item as Item).label ?? (item as Item).toString());
      }
      else {
        (props.modelValue as Array<Item | unknown>).push(item);
      }
      context.emit("change", item);
    };

    const item_label = (item: Item | unknown): string => {
      let title = props.title;

      if (title.label) {
        return (item as Record<string,string | number | boolean>)[title.label].toString();
      }
      else {
        return (item as string | number | boolean).toString();
      }
    };

    const multiple_title = (): Array<unknown> => (props.modelValue as Array<unknown>);

    const multiple_title_click = (index: number) => {
      let items = props.modelValue as Array<unknown>;
      items.splice(index, 1);
    };

    return {
      label,
      show,
      item_click,
      item_label,
      multiple_title,
      multiple_title_click,
    };
  }
});
</script>
<style scoped lang="scss">
.results,
input {
  position: absolute;
  top: 102%;
  width: 100%;
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
  &:invalid > label {
    color: red;
  }
}
</style>
