<template>
  <div>
    <div class="d-flex mt-3" v-for="(search, index) in searches" :key="index">
      <select-vue
        class="border-grey border-width w-min-120 border-end-0 border-end-radius-0 p-3"
        :options="select_options"
        :items="select_items"
        v-model="search.key"
      ></select-vue>
      <input
        class="input border-grey flex-fill border-start-radius-0 p-3"
        :class="{ 'me-3': index != input_max_number - 1 }"
        v-model="search.value"
      />
      <select-vue
        v-if="index != searches.length - 1"
        class="border-grey border-width w-min-120 p-3"
        :items="operators"
        :options="operator_options"
        v-model="searches[index + 1].operator"
      ></select-vue>
      <button
        type="button"
        class="button w-min-120 px-5"
        v-html="$t('+')"
        v-else-if="index < input_max_number - 1"
        @click="addSearch()"
      ></button>
    </div>
    <div class="d-flex justify-content-between mt-3">
      <button class="button" v-html="$t('search.reset')" @click="resetSearch()"></button>
      <button class="button" v-html="$t('search.search')"></button>
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
  name: "advanced_search",
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
      // mixins
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
