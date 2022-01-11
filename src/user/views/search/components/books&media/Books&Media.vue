<template>
  <component :is="is_simple ? SimpleSearchVue : AdvancedSearchVue"></component>
  <div>
    <div class="link mt-3" @click="changeSearchType">
      <span
        class="text-darkgrey"
        v-html="is_simple ? $t('search.advanced_search') : $t('search.simple_search')"
      ></span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import SimpleSearchVue from "./simple_search/SimpleSearch.vue";
import AdvancedSearchVue from "./advanced_search/AdvancedSearch.vue";
export default defineComponent({
  setup() {
    const is_simple = ref(true);
    function changeSearchType(): void {
      is_simple.value = !is_simple.value;
    }
    return {
      SimpleSearchVue,
      AdvancedSearchVue,
      is_simple,
      changeSearchType,
    };
  },
});
</script>

Component
