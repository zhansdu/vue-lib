<template>
  <section tag="white_nav">
    <white-nav-vue></white-nav-vue>
  </section>
  <section tag="blue_nav">
    <blue-nav-vue></blue-nav-vue>
  </section>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import WhiteNavVue from "./WhiteNav.vue";
import BlueNavVue from "./BlueNav.vue";
export default defineComponent({
  components: { WhiteNavVue, BlueNavVue },
});
</script>
