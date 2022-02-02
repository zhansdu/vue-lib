<template>
  <search-component-vue class="padding mt-5"></search-component-vue>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

// components
import SearchComponentVue from "./components/search/SearchComponent.vue";

export default defineComponent({
  components: { SearchComponentVue },
});
</script>
