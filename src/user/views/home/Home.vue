<template>
  <div class="text-orange">Hello kitty</div>
  <div class="text-bro">Hello kitty</div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  setup() {
    console.log(process.env);
  },
});
</script>
<style lang="scss" scoped></style>
