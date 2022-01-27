<template>
  <app-vue></app-vue>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "@vue/runtime-core";
import AppVue from "@/user/views/_main_layout/Main.vue";
import store from "./store/store";
export default defineComponent({
  components: { AppVue },
  setup() {
    onMounted(() => {
      store.mutations.changeTheme("default");
    });
    return {};
  },
});
</script>
