<template>
  <div>
    <div class="tabs position-relative" :class="tabsClasses" :style="tabsStyle">
      <div
        :ref="'tab-' + index"
        v-for="(tab, index) in tabs"
        @click="setActive(index, tab)"
        class="tab"
        :class="[
          activeTab == index ? tabActiveClasses : tabInactiveClasses,
          tabClasses,
        ]"
        :style="tabStyle"
      >
        {{ $t(tab.name) }}
      </div>
      <div ref="line" class="line" :class="lineClasses" :style="lineStyle" />
    </div>
    <keep-alive>
      <component
        :is="tabs[activeTab].component"
        class="mt-4"
        :class="componentClasses"
        :style="componentStyle"
      />
    </keep-alive>
  </div>
</template>
<script lang="ts">
type Item = {};
import { defineComponent, PropType } from "@vue/runtime-core";

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<Array<Item>>,
    },
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
  background: #ff9d29;
  position: absolute;
  transition: 0.5s;
  /*emaa naugad*/
  bottom: -0.625em;
}
</style>
