<template>
  <div class="text-me">Hello kitty</div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    console.log(process.env);
  },
});
</script>
<style lang="scss" scoped>
.text-me {
  color: $red;
}
</style>
