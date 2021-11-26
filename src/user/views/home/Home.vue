<template>
  <div>Hello from home page</div>
  <div class="text-orange">Hello kitty</div>
  <div class="text-red">{{ $t("hello") }}</div>
  <div class="text-bro">Hello Me</div>
  <div>Bye from home page</div>
</template>
<script lang="ts">
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  setup() {},
});
</script>
<style lang="scss" scoped></style>
