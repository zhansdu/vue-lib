<template>
  <div>
    <tabs-vue :tabs="tabs" :options="options" />
  </div>
</template>
<script lang="ts">
// core
import { defineComponent } from "@vue/runtime-core";

// components
import TabsVue from "@/common/components/Tabs.vue";
import BooksMediaVue from "./books&media/Books&Media.vue";
import EResourcesVue from "./e_resources/EResources.vue";

export default defineComponent({
  components: { TabsVue },
  props: {
    tab_options: {
      type: Object,
      required: false,
    },
  },
  setup() {
    const tabs = [
      {
        label: "search.books&media",
        component: {
          component: BooksMediaVue,
        },
      },
      {
        label: "search.eresources",
        component: {
          component: EResourcesVue,
        },
      },
    ];
    const options = {
      tab: {
        active: "text-orange",
      },
    };
    return { tabs, options };
  },
});
</script>
