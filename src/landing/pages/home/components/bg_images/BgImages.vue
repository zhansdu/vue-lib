<template>
  <div class="home text-white bg-darkblue">
    <div class="d-flex justify-content-center padding pt-5">
      <search-component-vue class="col-md-8 col-xl-6 pt-5 mt-4"></search-component-vue>
    </div>
    <div class="position-absolute flex-fill bottom-0 w-100">
      <img class="w-100" src="@/user/assets/images/Lines.png" />
    </div>
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
