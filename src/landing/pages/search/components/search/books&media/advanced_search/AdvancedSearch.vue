<template>
  <div>
    <div v-for="(search, index) in searches" :key="index" class="d-flex mt-3">
      <select-vue
        v-model="search.key"
        class="border-grey border-width w-min-120 border-end-0 border-end-radius-0 p-3"
        :options="select_options"
        :items="select_items"
      ></select-vue>
      <input
        v-model="search.value"
        class="input border-grey flex-fill border-start-radius-0 p-3"
        :class="{ 'me-3': index != input_max_number - 1 }"
      />
      <select-vue
        v-if="index != searches.length - 1"
        v-model="searches[index + 1].operator"
        class="border-grey border-width w-min-120 p-3"
        :items="operators"
        :options="operator_options"
      ></select-vue>
      <button
        v-else-if="index < input_max_number - 1"
        v-t="'+'"
        type="button"
        class="button w-min-120 px-5"
        @click="addSearch()"
      ></button>
    </div>
    <div class="d-flex justify-content-between mt-3">
      <button v-t="'search.reset'" class="button" @click="resetSearch()"></button>
      <button v-t="'search.search'" class="button"></button>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

// components
import SelectVue from "@/user/components/Select.vue";

// composables
import { select_options, select_items } from "../../../../composables/select_variables";
import {
  input_max_number,
  operators,
  operator_options,
} from "../../../../composables/search_variables";

type SearchType = {
  key: string;
  value: string;
  operator: string;
};

export default defineComponent({
  name: "AdvancedSearch",
  components: { SelectVue },
  setup() {
    const searches = ref([] as Array<SearchType>);

    function addSearch() {
      searches.value.push({
        key: "",
        value: "",
        operator: "and",
      });
    }
    function resetSearch() {
      searches.value = [
        {
          key: "",
          value: "",
          operator: "and",
        },
        {
          key: "",
          value: "",
          operator: "and",
        },
      ];
    }

    resetSearch();
    return {
      searches,
      addSearch,
      resetSearch,
      // composables
      select_options,
      select_items,
      input_max_number,
      operators,
      operator_options,
    };
  },
});
</script>
<style lang="scss" scoped>
@import "../../../../assets/styles/search_styles.scss";
</style>
