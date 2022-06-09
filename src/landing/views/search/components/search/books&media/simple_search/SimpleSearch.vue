<template>
  <div class="d-flex">
    <select-vue
      v-model="select_type"
      class="border-grey border-width w-min-120 border-end-radius-0 p-3 me-n1"
      :options="select_options"
      :items="select_items"
    ></select-vue>
    <input
      class="input border-grey flex-fill border-end-0 border-end-radius-0 border-start-radius-0 p-3 me-n1"
      type="text"
    />
    <button v-t="'search.search'" class="button px-5"></button>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
// components
import SelectVue from "@/user/components/Select.vue";

// composables
import { select_options, select_items } from "../../../../composables/select_variables";

export default defineComponent({
  name: "SimpleSearch",
  components: { SelectVue },
  setup() {
    const select_type = ref();

    return {
      select_type,
      // composables
      select_options,
      select_items,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "../../../../assets/styles/search_styles.scss";
</style>
