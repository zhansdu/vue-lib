<template>
  <section tag="bg_images">
    <div class="home bg-darkblue padding text-white">
      <tabs-vue :tabs="tabs"></tabs-vue>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import TabsVue from "@/common/components/Tabs.vue";
import DropdownVue from "@/common/components/Dropdown.vue";
export default defineComponent({
  components: {
    TabsVue,
  },
  setup() {
    const items = [{ label: "Zhax" }];
    const items_1 = [{ label: "Zhaxes" }, { label: "AAH" }];
    const tabs = [
      {
        label: "Zhan",
        component: {
          component: DropdownVue,
          props: {
            items: items,
          },
        },
      },
      {
        label: "Men",
        component: {
          component: DropdownVue,
          props: {
            items: items_1,
          },
        },
      },
    ];
    return { tabs };
  },
});
</script>
<style lang="scss" scoped>
.home {
  position: relative;
  min-height: max(calc(100vh - 163px), 660px);
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
</style>
