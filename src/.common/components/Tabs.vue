<template>
  <div>
    <div
      class="tabs position-relative mb-4"
      :class="options?.parent?.class"
      :style="options?.parent?.style"
    >
      <div
        v-for="(tab, index) in tabs"
        :ref="
          (el) => {
            if (el) tab_divs[index] = el;
          }
        "
        :key="index"
        class="tab"
        :class="[
          active_tab == index ? options?.tab?.active : options?.tab?.inactive,
          options?.title?.class,
        ]"
        :style="options?.title?.style"
        @click="set_active_tab(index, tab)"
      >
        {{ $t(tab.label) }}
      </div>
      <div ref="line" class="line" :class="options?.line?.class" :style="options?.line?.style" />
    </div>
    <keep-alive>
      <component
        :is="tabs[active_tab].component.component"
        v-bind="tabs[active_tab].component.props"
        :class="options?.tab?.class"
        :style="options?.tab?.style"
      />
    </keep-alive>
  </div>
</template>
<script lang="ts">
import { Component, defineComponent, onMounted, PropType, ref } from "@vue/runtime-core";
import { KeepAlive } from "vue";

export type Tab = {
  label: string;
  component: {
    component: Component;
    props?: Record<string, unknown>;
  };
};
export type TabOptions = {
  tab?: {
    active?: string | Record<string, boolean> | Array<string>;
    inactive?: string | Record<string, boolean> | Array<string>;
    class?: string | Record<string, boolean> | Array<string>;
    style?: string | Record<string, boolean> | Array<string>;
  };
  title?: {
    class?: string | Record<string, boolean> | Array<string>;
    style?: string | Record<string, boolean> | Array<string>;
  };
  line?: {
    class?: string | Record<string, boolean> | Array<string>;
    style?: string | Record<string, boolean> | Array<string>;
  };
  parent?: {
    class?: string | Record<string, boolean> | Array<string>;
    style?: string | Record<string, boolean> | Array<string>;
  };
};

export default defineComponent({
  name: "TabsVue",
  components: {
    KeepAlive,
  },
  props: {
    tabs: {
      type: Array as PropType<Array<Tab>>,
      required: true,
    },
    options: {
      type: Object as PropType<TabOptions>,
      required: false,
    },
  },
  emits: ["click"],
  setup(props, context) {
    const tab_divs = ref([] as Array<Component>);
    const line = ref({} as HTMLDivElement);
    const active_tab = ref(0);

    function moveLine(index: number): void {
      line.value.style.left = (tab_divs.value[index] as HTMLDivElement).offsetLeft + "px";
      line.value.style.width = (tab_divs.value[index] as HTMLDivElement).offsetWidth + "px";
    }
    function set_active_tab(index: number, tab: Tab) {
      context.emit("click", tab);
      active_tab.value = index;
      moveLine(index);
    }

    onMounted(() => {
      moveLine(0);
    });

    return {
      tab_divs,
      line,
      active_tab,
      set_active_tab,
    };
  },
});
</script>
<style scoped>
.tabs {
  display: flex;
}

.tab {
  margin-right: 1.5em;
  font-weight: 500;
  font-size: 1.5em;
  line-height: 1.75em;
  cursor: pointer;
  transition: color 0.3s;
}

.line {
  height: 0.3125em;
  background: var(--orange);
  position: absolute;
  transition: 0.5s;
  /*emaa naugad*/
  bottom: -0.625em;
}
</style>
