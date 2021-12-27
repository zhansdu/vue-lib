<template>
  <div class="bg-white">
    <section tag="search">
      <div class="padding mt-5">
        <tabs-vue :tabs="search_tabs" />
      </div>
    </section>
    <section tah="results"></section>
  </div>
</template>
<script lang="ts">
// core
import { defineComponent } from "@vue/runtime-core";

// components
import TabsVue from "@/common/components/Tabs.vue";
import BooksMediaVue from "./components/books&media/Books&Media.vue";
import EResourcesVue from "./components/e_resources/EResources.vue";
export default defineComponent({
  components: { TabsVue },
  setup() {
    const search_tabs = [
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
    return { search_tabs };
  },
});
</script>
