<template>
  <div>{{ message + 2 }}</div>
</template>
<script lang="ts">
import { defineComponent, PropType } from "@vue/runtime-core";

export default defineComponent({
  props: {
    message: {
      type: String as PropType<string>,
      required: true,
    },
  },
});
</script>
