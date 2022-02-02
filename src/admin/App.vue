<template>
  <app-vue></app-vue>
</template>
<script lang="ts">
import set_theme from "@/common/composables/set_theme";
import { defineComponent } from "vue";
import AppVue from "./views/_main_layout/Main.vue";
export default defineComponent({
  components: {
    AppVue,
  },
  setup() {
    set_theme("dark");
  },
});
</script>
