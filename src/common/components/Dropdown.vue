<template>
  <div class="dropdown" :class="{ dropup: options?.dropup }">
    <a
      class="dropdwon-toggle"
      data-bs-toggle="dropdown"
      :class="options?.title?.class"
      :style="options?.title?.style"
    >
      <span v-if="title?.uppercase">{{ $t(placeholder).toUpperCase() }}</span>
      <span v-else>{{ $t(placeholder) }}</span>
    </a>
    <ul class="dropdown-menu">
      <li v-for="(item, index) in data" :key="index">
        <a
          class="dropdown-item"
          :target="item.target ?? ''"
          :href="item.link ?? 'javascript:;'"
          :class="[item.class, options?.item?.class]"
          :style="item.style ?? options?.item?.style"
          @click="
            () => {
              item_click(item);
            }
          "
        >
          {{ $t(item.label ?? item.value ?? item) }}
        </a>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { PropType, defineComponent, computed } from "@vue/runtime-core";
export type DropdownOptions = {
  item?: {
    class?: string | Record<string, boolean> | Array<string>;
    style?: string | Record<string, boolean> | Array<string>;
  };
  title?: {
    class?: string | Record<string, boolean> | Array<string>;
    style?: string | Record<string, boolean> | Array<string>;
  };
  dropup?: boolean;
};
export type Item = {
  label: string;
  value?: string;
  link?: string;
  invisible?: boolean;
  target?: string;
  class?: string | Record<string, boolean> | Array<string>;
  style?: string | Record<string, boolean> | Array<string>;
};
export type Title = {
  label?: string;
  uppercase?: boolean;
};

export default defineComponent({
  emits: ["click", "update:modelValue"],
  props: {
    modelValue: [String, Number],
    items: {
      type: Array as PropType<Array<Item>>,
      required: true,
    },
    title: {
      type: Object as PropType<Title>,
      required: false,
    },
    options: {
      type: Object as PropType<DropdownOptions>,
      required: false,
    },
  },
  setup(props, context) {
    const item_click = (item: Item): void => {
      context.emit("update:modelValue", item.value ?? item.toString());
      context.emit("click", item);
    };

    const placeholder = computed((): string => {
      if (props.modelValue) {
        let item = props.items.find(
          (item) => item.value == props.modelValue || item.toString() == props.modelValue
        );

        return item?.label ?? item?.value ?? (item as Item).toString();
      } else {
        if (props.title) {
          if (props.title.label) {
            return props.title.label;
          }
        }
        let item = props.items[0];
        return item.label ?? item.value ?? item.toString();
      }
    });

    const data = computed(() => props.items.filter((item) => !item.invisible));

    return { item_click, data, placeholder };
  },
});
</script>
