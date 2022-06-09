<template>
  <div>
    <section tag="white_nav">
      <white-nav-vue></white-nav-vue>
    </section>
    <section tag="blue_nav">
      <blue-nav-vue></blue-nav-vue>
    </section>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import WhiteNavVue from "./WhiteNav.vue";
import BlueNavVue from "./BlueNav.vue";
export default defineComponent({
  name: "HeaderVue",
  components: { WhiteNavVue, BlueNavVue },
});
</script>
