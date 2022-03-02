<template>
  <app-vue></app-vue>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/runtime-core";
import AppVue from "@/user/views/_main_layout/Main.vue";
import store from "./store/store";
import set_theme from "@/common/composables/set_theme";
export default defineComponent({
  components: { AppVue },
  setup() {
    onMounted(() => {
      set_theme("default", store.states);
    });
    return {};
  },
});
</script>
