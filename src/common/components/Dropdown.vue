<template>
  <div class="dropdown">
    <a
      class="dropdwon-toggle"
      data-bs-toggle="dropdown"
      :class="options?.title?.class"
      :style="options?.title?.style"
    >
      <span>{{ $t(placeholder).toUpperCase() }}</span>
    </a>
    <ul class="dropdown-menu">
      <li v-for="(item, index) in data" :key="index">
        <router-link
          class="dropdown-item"
          :target="item.target ?? ''"
          :to="item.link ?? ''"
          :class="[item.class, options?.item?.class]"
          :style="[item.style, options?.item?.style]"
          @click="
            () => {
              item_click(item);
            }
          "
        >
          {{ $t(item.name ?? item.value ?? item) }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import { PropType, defineComponent, computed } from "@vue/runtime-core";

// types
import { Options } from "@/common/types/Options";
type Item = {
  name: string;
  value?: string;
  link?: string | Record<string, unknown>;
  invisible?: boolean;
  target?: string;
  class?: string | Record<string, unknown> | Array<string>;
  style?: string | Record<string, unknown> | Array<string>;
};
type Title = {
  name?: string;
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
      type: Object as PropType<Options>,
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
          (item) =>
            item.value == props.modelValue ||
            item.toString() == props.modelValue
        );

        return item?.name ?? item?.value ?? (item as Item).toString();
      } else {
        if (props.title) {
          if (props.title.name) {
            if (props.title.uppercase) {
              return props.title.name?.toUpperCase() ?? "";
            } else {
              return props.title.name;
            }
          }
        }
        let item = props.items[0];
        return item.name ?? item.value ?? item.toString();
      }
    });

    const data = props.items.filter((item) => !item.invisible);

    return { item_click, data, placeholder };
  },
});
</script>
