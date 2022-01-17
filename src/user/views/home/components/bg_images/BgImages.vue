<template>
  <div class="home bg-darkblue padding text-white d-flex align-items-center justify-content-center">
    <search-component-vue></search-component-vue>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

// components
import SearchComponentVue from "@/user/views/search/components/search/SearchComponent.vue";

export default defineComponent({
  components: { SearchComponentVue },
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
