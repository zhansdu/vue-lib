<template>
  <div>Hello kitty</div>
  <component-vue :message="'Hello Zhake! It\'s admin page'" />
</template>
<script lang="ts">
import { defineComponent } from "vue";
import ComponentVue from "./Component.vue";
export default defineComponent({
  components: { ComponentVue },
});
</script>
