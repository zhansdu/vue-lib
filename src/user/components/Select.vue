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
        @change="
          ($event) => {
            $emit('update:modelValue', ($event.target as HTMLInputElement).value);
          }
        "
        :value="modelValue"
        required
      />
    </div>
    <!-- label -->
    <div
      class="d-flex text-black justify-content-between align-items-center w-100"
      :class="options?.title?.class"
      :style="options?.title?.style"
    >
      <div class="d-flex align-items-center" v-if="multiple">
        <div
          class="m-1 p-1 px-2 bg-lightblue rounded-pill"
          v-for="(item, index) in multiple_title()"
          :key="index"
          @click="multiple_title_click(+index)"
          v-html="$t(item_label(item) ?? ((item as boolean | string | number).toString()))"
        ></div>
      </div>
      <div
        v-else
        @click="
          () => {
            if (multiple) {
              show();
            }
          }
        "
        v-html="$t(label)"
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
          class="cursor-pointer text-black py-2"
          v-for="(item, index) in items"
          :key="index"
          :class="options?.item?.class"
          :style="options?.item?.style"
          @click="
            () => {
              item_click(item);
            }
          "
          v-html="$t(item_label(item) ?? (item as boolean | string | number).toString())"
        ></div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript" lang="ts">
// icons
import CaretUp from "@common/assets/icons/CaretUp.vue";
import { defineComponent, ref, PropType, watchEffect } from "@vue/runtime-core";

type SelectOptions = {
  title?: {
    class?: string | Record<string, boolean> | Array<string>;
    style?: string | Record<string, boolean> | Array<string>;
  };
  items?: {
    class?: string | Record<string, boolean> | Array<string>;
    style?: string | Record<string, boolean> | Array<string>;
  };
  item?: {
    class?: string | Record<string, boolean> | Array<string>;
    style?: string | Record<string, boolean> | Array<string>;
  };
  placeholder?: string;
  label?: string;
  value?: string;
}

type SimpleItem=boolean | number | string;

export default defineComponent({
  emits: ["change", "update:modelValue"],
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
    const select = ref({} as HTMLDivElement);

    function show (show?: boolean): void  {
      if (show == undefined) {
        shown.value = !shown.value;
      }
      else{
        shown.value = show as boolean;
      }
      if (shown.value) {
        let docHeight = window.innerHeight - select.value.getBoundingClientRect().bottom;
        select_height.value = docHeight > 250 ? 250 : docHeight;
      }
      else {
        select_height.value = 0;
      }
      select.value.style.maxHeight = select_height.value + "px";
    };

     type StringRecordType = Record<string,string>;
     type ObjectRecordType = Record<string,unknown>;

    function item_label(item:unknown):string | null{
      if(!item){
        return null;
      }
      return (item as StringRecordType)[props.options?.label as string];
    }

    const label = ref();

    function setLabel(){
      label.value=item_label(props.modelValue) ?? props.options?.placeholder ?? item_label(props.items[0]) ?? (props.items[0] as SimpleItem).toString()
    }

    watchEffect(
      () => {
        const value=props.modelValue;
        if (value) {
          if (!props.multiple) {
            // if model value becomes a value of an item
            // then we have to search for an item with that value
            let item=value;
            if(props.options?.value){
              item=props.items.find((elem)=>(elem as ObjectRecordType)[(props.options?.value as string)]==value) as typeof props.modelValue
            }
            label.value=item_label(item) ?? item.toString();
          }
        }
        else{
          setLabel();
        }
      }
    );

    function item_click (item: unknown): void {
      if (!props.multiple) {
        // actually I need to close here -> show(false)
        // but since it is located inside div that already closes ( reverses ) - the value here should also be reversed -> show( true )
        show(true);
        context.emit("update:modelValue",  (item as ObjectRecordType)[props.options?.value as string] ?? item);
      }
      else {
        (props.modelValue as Array<unknown>).push(item);
      }
      context.emit("change", item);
    };

    const multiple_title = (): Array<unknown> => (props.modelValue as Array<unknown>);

    function multiple_title_click (index: number) {
      let items = props.modelValue as Array<unknown>;
      items.splice(index, 1);
    };

    setLabel();

    return {
      select,
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
    color: red;
  }
}
</style>
