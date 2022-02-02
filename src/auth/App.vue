<template>
  <div class="bg-white w-100 h-100">
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import set_theme from "@/common/composables/set_theme";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    set_theme("default");
  },
});
</script>
