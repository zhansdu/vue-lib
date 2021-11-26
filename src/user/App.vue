<template>
  <app-vue></app-vue>
</template>

<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import AppVue from "@user/views/_main_layout/App.vue";
export default defineComponent({
  components: { AppVue },
});
</script>
