<template>
  <div class="dropdown">
    <a
      class="dropdwon-toggle"
      data-bs-toggle="dropdown"
      :class="title ? title.class : ''"
      :style="title ? title.style : ''"
    >
      <span>{{ $t(placeholder).toUpperCase() }}</span>
    </a>
    <ul class="dropdown-menu">
      <li v-for="(item, index) in data" :key="index">
        <router-link
          class="dropdown-item"
          :target="item.target ?? ''"
          :to="item.link ?? ''"
          :class="item.class"
          :style="item.style"
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
import { PropType, defineComponent, ref, computed } from "@vue/runtime-core";

type Item = {
  name: string;
  value?: string;
  link?: string | Object;
  invisible?: boolean;
  target?: string;
  class?: string | object | Array<string>;
  style?: string | object | Array<string>;
};

type Title = {
  name?: string;
  uppercase?: boolean;
  class?: string | object | Array<string>;
  style?: string | object | Array<string>;
};

export default defineComponent({
  emits: ["click", "update:modelValue"],
  props: {
    modelValue: [String, Number],
    title: {
      type: Object as PropType<Title>,
      required: false,
    },
    items: {
      type: Array as PropType<Array<Item>>,
      required: true,
    },
  },
  setup(props, context) {
    const title = props.title;

    const item_click = (item: Item): void => {
      context.emit("update:modelValue", item.value ?? item.toString());
      context.emit("click", item);
    };

    const placeholder = computed((): string => {
      if (props.modelValue) {
        console.log(props.modelValue);
        let item = props.items.find(
          (item: Item) =>
            item.value == props.modelValue ||
            item.toString() == props.modelValue
        ) as Item;
        console.log(item);

        return item.name ?? item.value ?? item.toString();
      } else {
        if (props.title) {
          if (props.title.name) {
            if (props.title.uppercase) {
              return (props.title as Title).name?.toUpperCase() ?? "";
            } else {
              return (props.title as Title).name ?? "";
            }
          }
        }
        let item = props.items[0] as Item;
        return item.name ?? item.value ?? item.toString();
      }
    });

    const data = props.items.filter((item) => !item.invisible);

    return { item_click, data, title, placeholder };
  },
});
</script>
